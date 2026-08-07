import type { Metadata } from "next";
import CategoryPage from "@/components/category/category-page";

export const metadata: Metadata = {
  title: "Digital Operations & Executive Support | Lhycka Loreinne",
  description:
    "Empowering organizational efficiency through structured digital workflows, documentation, process optimization, and executive assistance.",
};

export default function DigitalOperationsPage() {
  return (
    <CategoryPage
      title="Digital Operations & Executive Support"
      subtitle="Empowering organizational efficiency through structured digital workflows, documentation, process optimization, and executive assistance."
      category="SYSTEMS & WORKFLOWS"
    />
  );
}
