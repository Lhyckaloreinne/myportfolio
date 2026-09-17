"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe, CheckCircle2 } from "lucide-react";
import { FiFigma, FiGithub } from "react-icons/fi";
import { Project } from "@/lib/content/types";
import ProjectPreview from "@/components/ui/project-preview";

interface UiUxCaseStudyProps {
  project: Project;
}

export default function UiUxCaseStudy({ project }: UiUxCaseStudyProps) {
  const { metadata, externalLinks, caseStudyData, htmlContent } = project;
  const { frontmatter } = metadata;
  const previews = metadata.previews || [];
  const platform = frontmatter.platform || "Web";
  const platformStr = platform.toLowerCase();
  const typeStr = (frontmatter.projectType || "").toLowerCase();
  const isMobile =
    platformStr.includes("mobile") ||
    platformStr.includes("android") ||
    platformStr.includes("ios") ||
    typeStr.includes("mobile");


  return (
    <article className="w-full bg-background min-h-screen py-12 sm:py-16 md:py-24 text-foreground">
      <div className="mx-auto max-w-[1040px] px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* Back Navigation */}
        <div>
          <Link
            href="/ui-ux"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to UI/UX Showcase</span>
          </Link>
        </div>

        {/* 1. CASE STUDY HEADER */}
        <header className="border-b border-border pb-12 sm:pb-16 space-y-6">
          <div className="inline-block rounded-full border border-gold/40 bg-surface px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase text-gold">
            {frontmatter.projectType || frontmatter.category || "UI/UX Case Study"}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-[1.15]">
            {frontmatter.title}
          </h1>

          {metadata.summary && (
            <p className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-muted font-light">
              {metadata.summary}
            </p>
          )}

          {/* Quick Meta Details Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/70 text-xs">
            {frontmatter.role && (
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-gold font-medium mb-1">
                  My Role
                </span>
                <span className="text-foreground font-normal">{frontmatter.role}</span>
              </div>
            )}
            {frontmatter.year && (
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-gold font-medium mb-1">
                  Year
                </span>
                <span className="text-foreground font-normal">{frontmatter.year}</span>
              </div>
            )}
            {frontmatter.platform && (
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-gold font-medium mb-1">
                  Platform
                </span>
                <span className="text-foreground font-normal">{frontmatter.platform}</span>
              </div>
            )}
            {frontmatter.tools && frontmatter.tools.length > 0 && (
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-gold font-medium mb-1">
                  Tools
                </span>
                <span className="text-foreground font-normal">
                  {frontmatter.tools.join(", ")}
                </span>
              </div>
            )}
          </div>

          {/* External Links */}
          {externalLinks && Object.keys(externalLinks).length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3 pt-4">
              {externalLinks.figma && (
                <a
                  href={externalLinks.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <FiFigma className="h-3.5 w-3.5" />
                  <span>Figma File</span>
                </a>
              )}
              {externalLinks.liveDemo && (
                <a
                  href={externalLinks.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold bg-gold px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-gold-dark"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {externalLinks.github && (
                <a
                  href={externalLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <FiGithub className="h-3.5 w-3.5" />
                  <span>Repository</span>
                </a>
              )}
              {externalLinks.prototype && (
                <a
                  href={externalLinks.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Interactive Prototype</span>
                </a>
              )}
            </div>
          )}

          {/* Hero Interface Showcase */}
          {previews.length > 0 && (
            <div className="pt-8">
              <ProjectPreview
                images={previews}
                platform={platform}
                title={frontmatter.title}
              />
            </div>
          )}
        </header>

        {/* 2. OVERVIEW / CONTEXT */}
        {(caseStudyData?.overview || caseStudyData?.businessContext) && (
          <section className="space-y-4">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block">
              01 / Overview & Context
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
              Project Background
            </h2>
            <div className="max-w-3xl space-y-4 text-sm sm:text-base text-muted font-light leading-relaxed">
              {caseStudyData.overview && <p>{caseStudyData.overview}</p>}
              {caseStudyData.businessContext && <p>{caseStudyData.businessContext}</p>}
            </div>
          </section>
        )}

        {/* 3. THE CHALLENGE */}
        {caseStudyData?.challenge && (
          <section className="space-y-4 rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block">
              02 / The Challenge
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
              Problem Statement
            </h2>
            <p className="max-w-3xl text-sm sm:text-base text-muted font-light leading-relaxed whitespace-pre-line">
              {caseStudyData.challenge}
            </p>
          </section>
        )}

        {/* 4. GOALS */}
        {(caseStudyData?.businessGoals || caseStudyData?.uxGoals) && (
          <section className="space-y-6">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block">
              03 / Project Objectives
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
              Documented Goals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudyData.businessGoals && caseStudyData.businessGoals.length > 0 && (
                <div className="rounded-xl border border-border bg-surface-card p-6 space-y-4">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground">
                    Business Goals
                  </h3>
                  <ul className="space-y-2.5">
                    {caseStudyData.businessGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted font-light">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudyData.uxGoals && caseStudyData.uxGoals.length > 0 && (
                <div className="rounded-xl border border-border bg-surface-card p-6 space-y-4">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground">
                    User Experience Goals
                  </h3>
                  <ul className="space-y-2.5">
                    {caseStudyData.uxGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted font-light">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 5. MY ROLE / RESPONSIBILITIES */}
        {caseStudyData?.roleResponsibilities && caseStudyData.roleResponsibilities.length > 0 && (
          <section className="space-y-4">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block">
              04 / Scope & Ownership
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
              My Responsibilities
            </h2>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {caseStudyData.roleResponsibilities.map((resp, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-normal text-muted"
                >
                  {resp}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 6. APPROACH / DESIGN THINKING */}
        {(caseStudyData?.approach || caseStudyData?.visualDirection) && (
          <section className="space-y-6">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block">
              05 / Approach & Design Thinking
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
              Methodology & Design Direction
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted font-light leading-relaxed">
              {caseStudyData.approach && (
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground">
                    Design Considerations
                  </h3>
                  <p className="whitespace-pre-line">{caseStudyData.approach}</p>
                </div>
              )}

              {caseStudyData.visualDirection && (
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-foreground">
                    Visual Direction
                  </h3>
                  <p className="whitespace-pre-line">{caseStudyData.visualDirection}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 7. KEY DESIGN DECISIONS */}
        {caseStudyData?.keyDecisions && caseStudyData.keyDecisions.length > 0 && (
          <section className="space-y-8">
            <div className="border-b border-border pb-4">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block mb-1">
                06 / Design Rationale
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                Key Design Decisions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudyData.keyDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-surface-card p-6 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-semibold text-gold block">
                      DECISION 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-foreground">
                      {dec.title}
                    </h3>

                    {dec.reason && (
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest font-semibold text-muted/80 block">
                          Reason
                        </span>
                        <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                          {dec.reason}
                        </p>
                      </div>
                    )}

                    {dec.impact && (
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest font-semibold text-gold block">
                          User Impact
                        </span>
                        <p className="text-xs sm:text-sm text-foreground font-light leading-relaxed">
                          {dec.impact}
                        </p>
                      </div>
                    )}

                    {dec.rawText && (
                      <p className="text-xs sm:text-sm text-muted font-light leading-relaxed whitespace-pre-line">
                        {dec.rawText}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. FINAL EXPERIENCE */}
        {caseStudyData?.walkthroughGroups && caseStudyData.walkthroughGroups.length > 0 && (
          <section className="space-y-12">
            <div className="border-b border-border pb-4">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block mb-1">
                07 / Interface Showcase
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                Final Experience & Interface Walkthrough
              </h2>
            </div>

            <div className="space-y-14">
              {caseStudyData.walkthroughGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-6">
                  <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">
                    {group.groupTitle}
                  </h3>

                  <div
                    className={
                      isMobile
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        : "grid grid-cols-1 md:grid-cols-2 gap-8"
                    }
                  >
                    {group.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="group flex flex-col justify-between rounded-2xl border border-border bg-surface-card p-5 space-y-4"
                      >
                        {item.image && (
                          isMobile ? (
                            /* Mobile App Phone Frame Presentation */
                            <div className="w-full bg-surface/60 rounded-xl p-4 sm:p-5 flex items-center justify-center border border-border/70">
                              <div className="relative aspect-[9/18.5] w-[170px] sm:w-[185px] md:w-[195px] rounded-[1.8rem] border-[4px] border-[#1f1e1c] bg-[#121110] shadow-md shadow-black/10 overflow-hidden">
                                {/* Top Notch / Speaker */}
                                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20 h-2.5 w-12 rounded-full bg-[#121110] border border-[#2e2c2a]" />
                                {/* Mobile Screen Content */}
                                <img
                                  src={encodeURI(item.image)}
                                  alt={item.title}
                                  className="h-full w-full object-cover object-top"
                                />
                                {/* Home Bar Indicator */}
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 h-1 w-12 rounded-full bg-white/30" />
                              </div>
                            </div>
                          ) : (
                            /* Responsive Web Browser Frame Presentation */
                            <div className="w-full overflow-hidden rounded-xl border border-border bg-background">
                              <div className="flex h-7 items-center justify-between border-b border-border bg-surface/90 px-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="h-2 w-2 rounded-full bg-border" />
                                  <span className="h-2 w-2 rounded-full bg-gold/40" />
                                  <span className="h-2 w-2 rounded-full bg-muted/30" />
                                </div>
                                <span className="text-[10px] font-mono text-muted/70 truncate max-w-[180px]">
                                  {item.title}
                                </span>
                              </div>
                              <img
                                src={encodeURI(item.image)}
                                alt={item.title}
                                className="w-full h-auto object-cover object-top"
                              />
                            </div>
                          )
                        )}
                        <div className="space-y-1.5 mt-auto">
                          <h4 className="font-serif text-lg font-normal text-foreground">
                            {item.title}
                          </h4>
                          {item.purpose && (
                            <p className="text-xs text-muted font-light leading-relaxed">
                              {item.purpose}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. OUTCOME */}
        {caseStudyData?.outcome && (
          <section className="space-y-4">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block">
              08 / Results & Deliverables
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
              Project Outcome
            </h2>
            <p className="max-w-3xl text-sm sm:text-base text-muted font-light leading-relaxed whitespace-pre-line">
              {caseStudyData.outcome}
            </p>
          </section>
        )}

        {/* 10. REFLECTION */}
        {caseStudyData?.reflection && (
          <section className="space-y-4 rounded-2xl border border-border bg-surface/60 p-6 sm:p-8">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block">
              09 / Lessons Learned
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
              Personal Reflection
            </h2>
            <p className="max-w-3xl text-sm sm:text-base text-muted font-light leading-relaxed whitespace-pre-line">
              {caseStudyData.reflection}
            </p>
          </section>
        )}

        {/* Fallback raw HTML body if structured data not fully available */}
        {(!caseStudyData || Object.keys(caseStudyData).length === 0) && (
          <main className="prose max-w-none prose-headings:font-serif prose-headings:font-normal prose-h2:border-b prose-h2:border-border prose-h2:pb-3 prose-headings:text-foreground prose-p:text-muted prose-p:font-light">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </main>
        )}

        {/* FOOTER & BACK NAVIGATION */}
        <footer className="pt-8 border-t border-border flex items-center justify-between">
          <Link
            href="/ui-ux"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to UI/UX Showcase</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}
