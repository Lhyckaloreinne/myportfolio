export interface GraphicItem {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  project: string;
  src: string;
  aspectRatio?: "portrait" | "landscape" | "square" | "catalog";
}

export const MARILAG_ITEMS: GraphicItem[] = [
  // Invitation and announcement
  {
    id: "marilag-invitation-poster",
    title: "Invitation Poster",
    category: "Client Work",
    subCategory: "Invitations & Announcements",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Invitation and announcement/Invitation Poster.png",
    aspectRatio: "portrait",
  },
  {
    id: "marilag-grand-food-tasting",
    title: "Grand Food Tasting",
    category: "Client Work",
    subCategory: "Invitations & Announcements",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Invitation and announcement/Grand Food tasting.png",
    aspectRatio: "portrait",
  },
  {
    id: "marilag-jn",
    title: "JN Announcement",
    category: "Client Work",
    subCategory: "Invitations & Announcements",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Invitation and announcement/JN.png",
    aspectRatio: "portrait",
  },

  // Promo Poster
  {
    id: "marilag-promo-jn-styling",
    title: "JN Styling",
    category: "Client Work",
    subCategory: "Promo Posters",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Promo Poster/JN Styling.png",
    aspectRatio: "portrait",
  },
  
  {
    id: "marilag-promo-route-95",
    title: "Route 95 Diner",
    category: "Client Work",
    subCategory: "Promo Posters",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Promo Poster/Route 95 Diner.png",
    aspectRatio: "portrait",
  },
 

  // Designers Solo Photos
  {
    id: "marilag-designer-group",
    title: "Bridal Designers Group",
    category: "Client Work",
    subCategory: "Designers Solo",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Designers Solo Photos/GROUP.png",
    aspectRatio: "portrait",
  },
  {
    id: "marilag-designer-atty",
    title: "Atty",
    category: "Client Work",
    subCategory: "Designers Solo",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Designers Solo Photos/Atty.png",
    aspectRatio: "portrait",
  },
  {
    id: "marilag-designer-jaziz",
    title: "Jaziz",
    category: "Client Work",
    subCategory: "Designers Solo",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Designers Solo Photos/Jaziz.png",
    aspectRatio: "portrait",
  },
  {
    id: "marilag-designer-manny",
    title: "Manny",
    category: "Client Work",
    subCategory: "Designers Solo",
    project: "Marilag Bridal Fair",
    src: "/graphics/01-Client Work/Marilag_Bridal_Fair/Designers Solo Photos/Manny.png",
    aspectRatio: "portrait",
  },
 
];

export const BULSU_ITEMS: GraphicItem[] = [
  {
    id: "bulsu-invitation-front",
    title: "Invitation — Front",
    category: "Client Work",
    project: "BulSU Sambalaran",
    src: "/graphics/01-Client Work/BulSU_Sambalaran/Invitation-front.png",
    aspectRatio: "portrait",
  },
  {
    id: "bulsu-invitation-back",
    title: "Invitation — Back",
    category: "Client Work",
    project: "BulSU Sambalaran",
    src: "/graphics/01-Client Work/BulSU_Sambalaran/invitation-back.png",
    aspectRatio: "portrait",
  },
  {
    id: "bulsu-program-flow-1",
    title: "Program Flow — Day 1",
    category: "Client Work",
    project: "BulSU Sambalaran",
    src: "/graphics/01-Client Work/BulSU_Sambalaran/program-flow1.png",
    aspectRatio: "portrait",
  },
  {
    id: "bulsu-program-flow-2",
    title: "Program Flow — Day 2",
    category: "Client Work",
    project: "BulSU Sambalaran",
    src: "/graphics/01-Client Work/BulSU_Sambalaran/program-flow2.png",
    aspectRatio: "portrait",
  },
];

export const BRANDING_ITEMS: GraphicItem[] = [
  {
    id: "branding-cnst-company",
    title: "CNST Company",
    category: "Branding",
    subCategory: "Logo Design",
    project: "CNST Company",
    src: "/graphics/02-Branding/Logo_Design/CNST_Company.png",
    aspectRatio: "square",
  },
];

export const MARKETING_ITEMS: GraphicItem[] = [
  {
    id: "product-catalog-1",
    title: "Product Catalog — 01",
    category: "Marketing Collateral",
    subCategory: "Product Catalog",
    project: "Product Catalog",
    src: "/graphics/03-Marketing_Collateral/Product_Catalog/PC 1.png",
    aspectRatio: "catalog",
  },
  {
    id: "product-catalog-2",
    title: "Product Catalog — 02",
    category: "Marketing Collateral",
    subCategory: "Product Catalog",
    project: "Product Catalog",
    src: "/graphics/03-Marketing_Collateral/Product_Catalog/PC 2.png",
    aspectRatio: "catalog",
  },
  {
    id: "product-catalog-3",
    title: "Product Catalog — 03",
    category: "Marketing Collateral",
    subCategory: "Product Catalog",
    project: "Product Catalog",
    src: "/graphics/03-Marketing_Collateral/Product_Catalog/PC 3.png",
    aspectRatio: "catalog",
  },
];

export const ORGANIZATIONAL_ITEMS: GraphicItem[] = [
  {
    id: "pubmat-grandparents-day",
    title: "Grandparents' Day",
    category: "Organizational Work",
    subCategory: "Pubmats",
    project: "BulSU Organization",
    src: "/graphics/04-Organizational_Work/Pubmats/GrandParents_Day.png",
    aspectRatio: "square",
  },
  {
    id: "pubmat-poster-1",
    title: "Poster 01",
    category: "Organizational Work",
    subCategory: "Posters",
    project: "BulSU Organization",
    src: "/graphics/04-Organizational_Work/Pubmats/POSTER 1.png",
    aspectRatio: "portrait",
  },
  {
    id: "pubmat-poster-2",
    title: "Poster 02",
    category: "Organizational Work",
    subCategory: "Posters",
    project: "BulSU Organization",
    src: "/graphics/04-Organizational_Work/Pubmats/POSTER 2.png",
    aspectRatio: "portrait",
  },
  {
    id: "pubmat-lanyard-1",
    title: "Lanyard 01",
    category: "Organizational Work",
    subCategory: "Lanyards",
    project: "BulSU Organization",
    src: "/graphics/04-Organizational_Work/Pubmats/Lanyard1.png",
    aspectRatio: "square",
  },
  {
    id: "pubmat-lanyard-2",
    title: "Lanyard 02",
    category: "Organizational Work",
    subCategory: "Lanyards",
    project: "BulSU Organization",
    src: "/graphics/04-Organizational_Work/Pubmats/Lanyard2.png",
    aspectRatio: "square",
  },
];

export const ALL_GRAPHIC_ITEMS: GraphicItem[] = [
  ...MARILAG_ITEMS,
  ...BULSU_ITEMS,
  ...BRANDING_ITEMS,
  ...MARKETING_ITEMS,
  ...ORGANIZATIONAL_ITEMS,
];
