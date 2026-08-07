import type { Metadata } from "next";
import CategoryPage from "@/components/category/category-page";

export const metadata: Metadata = {
  title: "UI/UX Design & Front-End Development | Lhycka Loreinne",
  description:
    "Crafting intuitive user journeys, wireframes, prototypes, and bringing designs to life through clean, responsive front-end development.",
};

export default function UiUxPage() {
  return (
    <CategoryPage
      title="UI/UX Design & Front-End Development"
      subtitle="Crafting intuitive user journeys, wireframes, prototypes, and bringing designs to life through clean, responsive front-end development."
      category="DESIGN & ENGINEERING"
    />
  );
}
