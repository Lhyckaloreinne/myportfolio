import type { Metadata } from "next";
import Image from "next/image";
import CategoryPage from "@/components/category/category-page";

export const metadata: Metadata = {
  title: "Data Analytics & Storytelling | Lhycka Loreinne",
  description:
    "Transforming raw datasets into compelling visual dashboards, structured reporting, and actionable business insights.",
};

export default function DataAnalyticsPage() {
  return (
    <CategoryPage
      title="From Raw Data to Interactive Dashboard"
      subtitle="A data preparation and visualization project that transformed
              a provided dataset into a structured, interactive Power BI
              dashboard."
      category="ANALYTICS & INSIGHTS"
    >
      {/* FEATURED PROJECT */}
      <section className="pt-2 pb-20 md:pt-0 md:pb-28">
        <div>

          {/* Project Heading */}
          <div className="max-w-none">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Featured Analytics Project
            </span>

            {/* <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl lg:text-6xl">
              From Raw Data to Interactive Dashboard
            </h2> */}

            {/* <p className="mt-5 max-w-none text-sm leading-relaxed text-muted sm:text-base">
              A data preparation and visualization project that transformed
              a provided dataset into a structured, interactive Power BI
              dashboard.
            </p> */}

            {/* Tools */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Microsoft Excel",
                "Data Cleaning",
                "Data Preparation",
                "Power BI",
                "Data Visualization",
              ].map((tool) => (
                <span
                  key={tool}
                  className="border border-border/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="mt-12">
            <div className="relative aspect-video overflow-hidden border border-border/70 bg-surface">
              <Image
                src="/images/analytics/dashboard.jpg"
                alt="Power BI data analytics dashboard"
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>

            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted">
              Interactive Dashboard · Power BI
            </p>
          </div>

          {/* Project Overview */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Project Overview
              </span>

              <h3 className="mt-4 font-serif text-3xl text-foreground">
                Turning information into something easier to understand.
              </h3>
            </div>

            <div>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I was provided with a sample dataset and tasked with preparing
                it for analysis and creating a visual dashboard. I began by
                reviewing and cleaning the data in Excel, organizing the
                information before bringing the refined dataset into Power BI.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                The final dashboard presents the information through visual
                summaries, charts, and interactive elements designed to make
                the dataset easier to explore and interpret.
              </p>
            </div>
          </div>

          {/* PROCESS */}
          <div className="mt-24">
            <div className="border-b border-border/70 pb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                The Process
              </span>

              <h3 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                From dataset to visual story.
              </h3>
            </div>

            <div className="grid divide-y divide-border/70 border-b border-border/70 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
              {/* Step 01 */}
              <div className="py-8 md:px-8 lg:first:pl-0">
                <span className="text-xs font-semibold tracking-[0.25em] text-gold">
                  01
                </span>

                <h4 className="mt-4 font-serif text-2xl text-foreground">
                  Understand
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Reviewed the provided dataset to understand its structure,
                  fields, and the information available for analysis.
                </p>
              </div>

              {/* Step 02 */}
              <div className="py-8 md:px-8">
                <span className="text-xs font-semibold tracking-[0.25em] text-gold">
                  02
                </span>

                <h4 className="mt-4 font-serif text-2xl text-foreground">
                  Clean
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Used Excel to organize and clean the raw information,
                  preparing the dataset for further analysis.
                </p>
              </div>

              {/* Step 03 */}
              <div className="py-8 md:px-8">
                <span className="text-xs font-semibold tracking-[0.25em] text-gold">
                  03
                </span>

                <h4 className="mt-4 font-serif text-2xl text-foreground">
                  Prepare
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Structured the cleaned data into a format suitable for
                  visualization and reporting in Power BI.
                </p>
              </div>

              {/* Step 04 */}
              <div className="py-8 md:px-8 lg:last:pr-0">
                <span className="text-xs font-semibold tracking-[0.25em] text-gold">
                  04
                </span>

                <h4 className="mt-4 font-serif text-2xl text-foreground">
                  Visualize
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Built a Power BI dashboard that presents the information
                  through clear and interactive visual elements.
                </p>
              </div>
            </div>
          </div>

          {/* TOOLS */}
          <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Tools & Capabilities
              </span>

              <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                A simple workflow with a clear purpose.
              </h3>
            </div>

            <div className="divide-y divide-border/70 border-y border-border/70">
              <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
                <span className="text-sm font-semibold text-foreground">
                  Excel
                </span>
                <p className="text-sm text-muted">
                  Data cleaning, organization, and preparation.
                </p>
              </div>

              <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
                <span className="text-sm font-semibold text-foreground">
                  Power BI
                </span>
                <p className="text-sm text-muted">
                  Dashboard development and interactive visualization.
                </p>
              </div>

              <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
                <span className="text-sm font-semibold text-foreground">
                  Data Visualization
                </span>
                <p className="text-sm text-muted">
                  Turning structured information into understandable visual
                  reports.
                </p>
              </div>

              <div className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
                <span className="text-sm font-semibold text-foreground">
                  Reporting
                </span>
                <p className="text-sm text-muted">
                  Organizing information into a format that is easier to
                  explore and communicate.
                </p>
              </div>
            </div>
          </div>

          {/* REFLECTION */}
          <div className="mt-24 border-t border-border/70 pt-12">
            <div className="max-w-none">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Reflection
              </span>

              <blockquote className="mt-5 font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
                “Good visualization starts with good data.”
              </blockquote>

              <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                This project strengthened my understanding of how data
                preparation affects the quality of analysis. It also gave me
                practical experience in moving from raw information in Excel
                to a structured and visual report in Power BI.
              </p>
            </div>
          </div>

        </div>
      </section>
    </CategoryPage>
  );
}