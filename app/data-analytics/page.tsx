import type { Metadata } from "next";
import CategoryPage from "@/components/category/category-page";

export const metadata: Metadata = {
  title: "Data Analytics & Storytelling | Lhycka Loreinne",
  description:
    "Transforming raw datasets into compelling visual dashboards, structured reporting, and actionable business insights.",
};

export default function DataAnalyticsPage() {
  return (
    <CategoryPage
      title="Data Analytics & Storytelling"
      subtitle="Transforming raw datasets into compelling visual dashboards, structured reporting, and actionable business insights."
      category="ANALYTICS & INSIGHTS"
    />
  );
}
