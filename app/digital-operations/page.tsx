import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, Focus, Workflow } from "lucide-react";
import CategoryPage from "@/components/category/category-page";

export const metadata: Metadata = {
  title: "Digital Operations & Executive Support | Lhycka Loreinne",
  description:
    "Providing organized digital and administrative support to help executives and professionals manage the details, stay organized, and focus on what matters most.",
};

export default function DigitalOperationsPage() {
  return (
    <CategoryPage
      title="Digital Operations & Executive Support"
      subtitle="Providing organized digital and administrative support to help executives and professionals manage the details, stay organized, and focus on what matters most."
      category="SYSTEMS & WORKFLOWS"
    >
      {/* ========================================================
          01 — THE STORY
          ======================================================== */}
      <section className="pt-8 pb-20 md:pt-10 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              When Everything Needs Your Attention
            </span>

            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground md:text-4xl">
              You have enough on your plate.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Running a business, leading a team, or managing multiple
              priorities often means constantly switching between tasks.
              Meetings, emails, schedules, documents, follow-ups, and small
              administrative details can quickly add up.
            </p>

            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Not every task needs your direct attention. Having reliable
              support behind the scenes can create more room for the work that
              requires your decisions, expertise, and focus.
            </p>

            <p className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
              That is where I can help.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          02 — HOW I CAN HELP
          ======================================================== */}
      <section className="border-t border-border/70 pt-12 pb-20 md:pb-28">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Support Behind the Scenes
          </span>

          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground md:text-4xl">
            The details still matter.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            I can help take care of the digital and administrative work that
            keeps everyday operations organized and moving.
          </p>
        </div>

        <div className="divide-y divide-border/70 border-y border-border/70">
          {/* 01 */}
          <div className="grid gap-4 py-7 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">
              01
            </span>

            <h3 className="font-serif text-2xl text-foreground">
              Email Management
            </h3>

            <p className="text-sm leading-relaxed text-muted">
              Helping organize inboxes, identify priorities, prepare drafts,
              track follow-ups, and keep important communication from getting
              buried.
            </p>
          </div>

          {/* 02 */}
          <div className="grid gap-4 py-7 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">
              02
            </span>

            <h3 className="font-serif text-2xl text-foreground">
              Calendar Management
            </h3>

            <p className="text-sm leading-relaxed text-muted">
              Helping coordinate meetings, appointments, reminders, schedules,
              and time blocks so important commitments stay visible and
              organized.
            </p>
          </div>

          {/* 03 */}
          <div className="grid gap-4 py-7 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">
              03
            </span>

            <h3 className="font-serif text-2xl text-foreground">
              Administrative Support
            </h3>

            <p className="text-sm leading-relaxed text-muted">
              Preparing documents, spreadsheets, presentations, trackers, and
              other recurring materials that support day-to-day operations.
            </p>
          </div>

          {/* 04 */}
          <div className="grid gap-4 py-7 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">
              04
            </span>

            <h3 className="font-serif text-2xl text-foreground">
              Research & Information
            </h3>

            <p className="text-sm leading-relaxed text-muted">
              Gathering, organizing, and summarizing information so that
              research and reference materials are easier to review and use.
            </p>
          </div>

          {/* 05 */}
          <div className="grid gap-4 py-7 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">
              05
            </span>

            <h3 className="font-serif text-2xl text-foreground">
              Digital Organization
            </h3>

            <p className="text-sm leading-relaxed text-muted">
              Creating clearer structures for files, folders, documents, and
              digital workspaces so information is easier to find and maintain.
            </p>
          </div>

          {/* 06 */}
          <div className="grid gap-4 py-7 md:grid-cols-[80px_0.8fr_1.2fr] md:items-start md:gap-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold">
              06
            </span>

            <h3 className="font-serif text-2xl text-foreground">
              Documentation & Workflows
            </h3>

            <p className="text-sm leading-relaxed text-muted">
              Creating checklists, trackers, process documentation, and
              structured workflows that make recurring tasks easier to manage.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          03 — WORK SAMPLES
          ======================================================== */}
      <section className="border-t border-border/70 pt-12 pb-20 md:pb-28">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Selected Work Samples
          </span>

          <h2 className="mt-4 font-serif text-3xl font-normal text-foreground md:text-4xl">
            What support can look like.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A few examples of the systems, documents, and digital workflows I
            can help organize and manage.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* EMAIL SAMPLE */}
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
            <div className="relative aspect-[16/10] overflow-hidden border border-border/70 bg-surface">
              <Image
                src="/images/digital-operations/email-management.jpg"
                alt="Email management and inbox organization sample"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                01 / Email Management
              </span>

              <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                Keeping communication organized.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                An organized inbox makes it easier to identify what needs
                attention, what can wait, and what needs follow-up.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                I can help create structure around everyday email management
                so important messages remain visible and actionable.
              </p>
            </div>
          </div>

          {/* CALENDAR SAMPLE */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                02 / Calendar Management
              </span>

              <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                Making busy schedules easier to navigate.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                Meetings, deadlines, appointments, and reminders can quickly
                fill a calendar.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                I can help maintain a structured schedule and keep important
                commitments organized and visible.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden border border-border/70 bg-surface lg:order-2">
              <Image
                src="/images/digital-operations/calendar-management.png"
                alt="Calendar management and scheduling sample"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* DIGITAL ORGANIZATION SAMPLE */}
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
            <div className="relative aspect-[16/10] overflow-hidden border border-border/70 bg-surface">
              <Image
                src="/images/digital-operations/digital-organization.webp"
                alt="Digital file and workspace organization sample"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                03 / Digital Organization
              </span>

              <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                Turning scattered information into structure.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                As work grows, digital files and documents can quickly become
                difficult to navigate.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                I can help organize digital workspaces into a clearer system
                that makes information easier to locate and maintain.
              </p>
            </div>
          </div>

          {/* RESEARCH / DOCUMENTATION SAMPLE */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                04 / Research & Documentation
              </span>

              <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                Making information easier to review.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                Research and administrative information can become difficult
                to process when it is scattered across different sources.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                I can help gather, organize, summarize, and present information
                in a more structured format.
              </p>
            </div>

            <div className="relative order-1 aspect-[16/10] overflow-hidden border border-border/70 bg-surface lg:order-2">
              <Image
                src="/images/digital-operations/research-documentation.avif"
                alt="Research and documentation sample"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          04 — TOOLS & PLATFORMS
          ======================================================== */}
      <section className="border-t border-border/70 pt-12 pb-20 md:pb-28">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Tools & Platforms
          </span>

          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground md:text-4xl">
            Tools that keep the work moving.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            I work with a range of digital tools to organize information,
            manage schedules, prepare documents, communicate, and support
            everyday operations.
          </p>
        </div>

        {/* TOOL LOGOS */}
        <div className="grid grid-cols-2 border-y border-border/70 sm:grid-cols-3 lg:grid-cols-5">
          {/* EXCEL */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface sm:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/excel.png"
                alt="Microsoft Excel"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Microsoft Excel
            </span>
          </div>

          {/* WORD */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface lg:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/word.png"
                alt="Microsoft Word"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Microsoft Word
            </span>
          </div>

          {/* GOOGLE DRIVE */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface sm:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/google-drive.png"
                alt="Google Drive"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Google Drive
            </span>
          </div>

          {/* GOOGLE CALENDAR */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface lg:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/google-calendar.png"
                alt="Google Calendar"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Google Calendar
            </span>
          </div>

          {/* NOTION */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/notion.png"
                alt="Notion"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Notion
            </span>
          </div>

          {/* CANVA */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface sm:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/canva.png"
                alt="Canva"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Canva
            </span>
          </div>

          {/* GOOGLE DOCS */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface lg:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/google-docs.png"
                alt="Google Docs"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Google Docs
            </span>
          </div>

          {/* GOOGLE SHEETS */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface sm:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/google-sheets.png"
                alt="Google Sheets"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Google Sheets
            </span>
          </div>

          {/* GMAIL */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface lg:border-r">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/gmail.png"
                alt="Gmail"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Gmail
            </span>
          </div>

          {/* POWERPOINT */}
          <div className="group flex min-h-[150px] flex-col items-center justify-center border-b border-border/70 p-6 transition-colors duration-300 hover:bg-surface">
            <div className="relative h-12 w-12">
              <Image
                src="/images/digital-operations/tools/powerpoint.png"
                alt="Microsoft PowerPoint"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              PowerPoint
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          05 — WHY DELEGATE
          ======================================================== */}
      <section className="border-t border-border/70 pb-5 pt-30">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Why Delegate?
          </span>

          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground md:text-4xl">
            Your time has a higher-value purpose.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Delegating administrative and digital tasks does not mean stepping
            away from your work. It creates more room to focus on the
            responsibilities that require your attention most.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-y border-border/70 md:grid-cols-3 md:divide-x md:divide-border/70">
          {/* YOUR TIME */}
          <div className="py-8 md:pr-8">
            <Clock3
              className="h-10 w-10 text-gold"
              strokeWidth={1.5}
            />

            <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Your Time
            </span>

            <h3 className="mt-4 font-serif text-2xl text-foreground">
              Less time on repetitive tasks.
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              Reduce the amount of time spent managing recurring administrative
              details.
            </p>
          </div>

          {/* YOUR FOCUS */}
          <div className="border-t border-border/70 py-8 md:border-t-0 md:px-8">
            <Focus
              className="h-10 w-10 text-gold"
              strokeWidth={1.5}
            />

            <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Your Focus
            </span>

            <h3 className="mt-4 font-serif text-2xl text-foreground">
              More room for priorities.
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              Keep attention on decisions, clients, projects, and the work
              where your expertise matters most.
            </p>
          </div>

          {/* YOUR FLOW */}
          <div className="border-t border-border/70 py-8 md:border-t-0 md:pl-8">
            <Workflow
              className="h-10 w-10 text-gold"
              strokeWidth={1.5}
            />

            <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Your Flow
            </span>

            <h3 className="mt-4 font-serif text-2xl text-foreground">
              Keep things moving.
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              Maintain structure around schedules, information, tasks, and
              everyday digital operations.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          06 — HOW I WORK
          ======================================================== */}
      <section className="mt-24 border-t border-border pt-16 md:mt-32 md:pt-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT — HOW I WORK + PHOTO */}
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
              HOW I WORK
            </span>

            <h2 className="mt-4 max-w-md font-serif text-3xl leading-[1.15] text-foreground md:text-4xl">
              Not just tasks. Support.
            </h2>

            <div className="relative mt-8 aspect-[4/4.5] w-full max-w-[400px] overflow-hidden border border-border bg-surface">
              <Image
                src="/images/digital-operations/executive-support.png"
                alt="Lhycka Loreinne providing executive and virtual support"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT — HOW I SUPPORT */}
          <div className="border-t border-border lg:mt-23 mb-24">
            {/* 01 — ORGANIZE */}
            <div className="border-b border-border py-8 md:py-9">
              <div className="flex items-start gap-6">
                <span className="pt-1 text-[10px] font-semibold tracking-[0.25em] text-gold">
                  01
                </span>

                <div className="flex-1">
                  <h3 className="font-serif text-2xl leading-tight text-foreground">
                    Organize
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    I bring structure to information, schedules, files, and
                    recurring tasks so they are easier to manage and less
                    likely to get overlooked.
                  </p>
                </div>
              </div>
            </div>

            {/* 02 — ANTICIPATE */}
            <div className="border-b border-border py-8 md:py-9">
              <div className="flex items-start gap-6">
                <span className="pt-1 text-[10px] font-semibold tracking-[0.25em] text-gold">
                  02
                </span>

                <div className="flex-1">
                  <h3 className="font-serif text-2xl leading-tight text-foreground">
                    Anticipate
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    I pay attention to details, deadlines, follow-ups, and
                    priorities that can easily be overlooked when
                    responsibilities compete for attention.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — SUPPORT */}
            <div className="border-b border-border py-8 md:py-9">
              <div className="flex items-start gap-6">
                <span className="pt-1 text-[10px] font-semibold tracking-[0.25em] text-gold">
                  03
                </span>

                <div className="flex-1">
                  <h3 className="font-serif text-2xl leading-tight text-foreground">
                    Support
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    I help keep the work behind the scenes moving so you can
                    give more attention to the responsibilities that matter
                    most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          07 — FINAL CTA
          ======================================================== */}
      <section className="border-t border-border/70 pt-12 pb-12">
        <div className="w-full">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Executive & Virtual Support
          </span>

          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground md:text-5xl">
            You don't have to do everything yourself.
          </h2>

          <p className="mt-5 w-full max-w-6xl text-sm leading-relaxed text-muted sm:text-base">
            Whether you need help keeping an inbox organized, coordinating a
            busy calendar, preparing documents, researching information, or
            bringing more structure to your digital workflow, I am ready to
            help keep the details moving.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-flex items-center border border-gold/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold transition-colors duration-300 hover:bg-gold hover:text-background"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </CategoryPage>
  );
}