import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface CategoryPageProps {
  title: string;
  subtitle: string;
  category: string;
  description?: string;
  children?: React.ReactNode;
}

export default function CategoryPage({
  title,
  subtitle,
  category,
  description,
  children,
}: CategoryPageProps) {
  return (
    <div className="w-full bg-background min-h-[70vh] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px]  px-6 lg:px-8 xl:px-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#what-i-do"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Specializations</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-16 border-b border-border pb-12">
          <div className="inline-block rounded-full border border-gold/40 bg-surface px-3.5 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase text-gold mb-4">
            {category}
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground leading-tight mb-6">
            {title}
          </h1>
          <p className="max-w-3xl text-base md:text-lg leading-relaxed text-muted font-light">
            {subtitle}
          </p>
          {description && (
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted/80 font-light">
              {description}
            </p>
          )}
        </div>

        {/* Main Section Content */}
        {children ? (
          <div>{children}</div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface-card px-6 py-24 text-center">
            <div className="rounded-full border border-gold/30 bg-surface p-4 text-gold mb-4">
              <span className="font-serif text-xl font-light">01</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-foreground mb-3">
              Projects Coming Soon
            </h2>
            <p className="max-w-md text-xs md:text-sm text-muted font-light leading-relaxed">
              Curated case studies, interactive demonstrations, and detailed project documentation for this domain are currently under development.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
