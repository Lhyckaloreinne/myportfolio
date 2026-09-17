import type { Metadata } from "next";
import CategoryPage from "@/components/category/category-page";
import ProjectCard from "@/components/ui/project-card";
import { getProjectsByCategory } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "UI/UX Design & Front-End Development | Lhycka Loreinne",
  description:
    "Crafting intuitive user journeys, wireframes, prototypes, and bringing designs to life through clean, responsive front-end development.",
};

export default async function UiUxPage() {
  const projects = await getProjectsByCategory("ui-ux");

  // Divide projects into Web and Mobile App collections
  const webProjects = projects.filter((project) => {
    const platform = (project.metadata.frontmatter.platform || "").toLowerCase();
    const type = (project.metadata.frontmatter.projectType || "").toLowerCase();
    return (
      platform.includes("web") ||
      type.includes("web") ||
      project.metadata.slug === "northern-cuts" ||
      project.metadata.slug === "parking-management-system"
    );
  });

  const mobileProjects = projects.filter((project) => {
    return !webProjects.some((w) => w.metadata.slug === project.metadata.slug);
  });

  return (
    <CategoryPage
      title="UI/UX Design & Front-End Development"
      subtitle="Crafting intuitive user journeys, wireframes, prototypes, and bringing designs to life through clean, responsive front-end development."
      category="DESIGN & ENGINEERING"
    >
      <div className="space-y-20 md:space-y-28">
        {/* WEB DESIGN SECTION */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border pb-5">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block mb-1">
                01 / CATEGORY
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-foreground">
                Web Design & Applications
              </h2>
            </div>
            <p className="text-xs tracking-widest text-muted uppercase font-light">
              2 Showcase Projects
            </p>
          </div>

          {/* Web Projects Grid: 2 cards per row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {webProjects.map((project) => (
              <ProjectCard key={project.metadata.slug} project={project} />
            ))}
          </div>
        </section>

        {/* MOBILE APP DESIGN SECTION */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border pb-5">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gold block mb-1">
                02 / CATEGORY
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-foreground">
                Mobile Application Design
              </h2>
            </div>
            <p className="text-xs tracking-widest text-muted uppercase font-light">
              3 Showcase Projects
            </p>
          </div>

          {/* Mobile Projects Grid: 3 cards per row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mobileProjects.map((project) => (
              <ProjectCard key={project.metadata.slug} project={project} />
            ))}
          </div>
        </section>
      </div>
    </CategoryPage>
  );
}
