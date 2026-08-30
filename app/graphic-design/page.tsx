import type { Metadata } from "next";
import CategoryPage from "@/components/category/category-page";
import GraphicGallery from "@/components/graphics/graphic-gallery";

export const metadata: Metadata = {
  title: "Graphic Design & Visual Brand | Lhycka Loreinne",
  description:
    "Developing sophisticated visual identities, high-impact marketing assets, digital graphics, and refined editorial typography.",
};

export default function GraphicDesignPage() {
  return (
    <CategoryPage
      title="Graphic Design & Visual Brand"
      subtitle="Developing sophisticated visual identities, high-impact marketing assets, digital graphics, and refined editorial typography."
      category="CREATIVE & BRANDING"
    >
      <GraphicGallery />
    </CategoryPage>
  );
}
