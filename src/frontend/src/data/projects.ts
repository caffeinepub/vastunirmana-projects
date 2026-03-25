export type Category =
  | "ALL"
  | "CORPORATE"
  | "RETAIL"
  | "HOSPITALITY"
  | "RESIDENTIAL"
  | "INSTITUTIONAL"
  | "HEALTHCARE";
export type ProjectCategory = Exclude<Category, "ALL">;

export interface Project {
  name: string;
  category: ProjectCategory;
  location?: string;
  image: string;
}

const officeImages = [
  "https://images.unsplash.com/photo-1497366216548-37526078e2b5?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&auto=format",
];

const retailImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop&auto=format",
];

const hospitalityImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop&auto=format",
];

const residentialImages = [
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop&auto=format",
];

const healthcareImages = [
  "https://images.unsplash.com/photo-1519494026892-476ce96bc950?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop&auto=format",
];

const institutionalImages = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&auto=format",
];

function getImage(category: ProjectCategory, index: number): string {
  switch (category) {
    case "CORPORATE":
      return officeImages[index % officeImages.length];
    case "RETAIL":
      return retailImages[index % retailImages.length];
    case "HOSPITALITY":
      return hospitalityImages[index % hospitalityImages.length];
    case "RESIDENTIAL":
      return residentialImages[index % residentialImages.length];
    case "HEALTHCARE":
      return healthcareImages[index % healthcareImages.length];
    case "INSTITUTIONAL":
      return institutionalImages[index % institutionalImages.length];
  }
}

const rawProjects: Array<{
  name: string;
  category: ProjectCategory;
  location?: string;
}> = [
  { name: "Kartikeya", category: "RETAIL", location: "Mumbai" },
  {
    name: "Oriental Consultants",
    category: "CORPORATE",
    location: "New Delhi",
  },
  { name: "Signature Global", category: "CORPORATE", location: "Gurgaon" },
  { name: "Physio Active", category: "HEALTHCARE", location: "Gurgaon" },
  { name: "Emirates Shipping", category: "CORPORATE", location: "Delhi" },
  { name: "Media Transasia", category: "CORPORATE", location: "Gurgaon" },
  { name: "Foursight", category: "RETAIL", location: "Noida" },
  { name: "Warehouse Cafe", category: "HOSPITALITY", location: "Gurgaon" },
  { name: "Dr Monga Opticians", category: "RETAIL", location: "New Delhi" },
  { name: "SC Johnson", category: "CORPORATE", location: "Gurgaon" },
  { name: "30th Feb", category: "RETAIL", location: "Gurgaon" },
  { name: "Avizva Solutions", category: "CORPORATE", location: "Gurgaon" },
  { name: "The Wishing Chair", category: "RETAIL", location: "Gurgaon" },
  { name: "Melea", category: "CORPORATE", location: "New Delhi" },
  { name: "Value Homz", category: "CORPORATE", location: "Gurgaon" },
  { name: "Cafeteria", category: "HOSPITALITY", location: "Gurgaon" },
  { name: "Vanson", category: "RETAIL", location: "Noida" },
  { name: "Depot 48", category: "HOSPITALITY", location: "New Delhi" },
  { name: "Residence CR Park", category: "RESIDENTIAL", location: "New Delhi" },
  { name: "NEC", category: "INSTITUTIONAL", location: "New Delhi" },
  { name: "Queens Cafe & Bar", category: "HOSPITALITY", location: "Gurgaon" },
  { name: "Sheraton Hotel", category: "HOSPITALITY", location: "Chandigarh" },
  { name: "AZB", category: "CORPORATE", location: "Gurgaon" },
  { name: "Japan Airlines", category: "CORPORATE", location: "New Delhi" },
  { name: "Skylark", category: "INSTITUTIONAL", location: "New Delhi" },
  { name: "Lumbini Show Flat", category: "RESIDENTIAL", location: "Gurgaon" },
  { name: "Thirty Six Toyota", category: "CORPORATE", location: "Faridabad" },
  {
    name: "Dr. Soni's Dental Clinic",
    category: "HEALTHCARE",
    location: "New Delhi",
  },
  { name: "Omech Cancer Day Care Centre", category: "HEALTHCARE" },
  { name: "Waves Reda Spa", category: "HOSPITALITY", location: "New Delhi" },
  { name: "Barcelos", category: "HOSPITALITY", location: "New Delhi" },
  { name: "Clearmedi Healthcare", category: "CORPORATE", location: "Gurgaon" },
  { name: "Orris Tapasya", category: "CORPORATE", location: "Noida" },
  { name: "Shriram City", category: "CORPORATE" },
  {
    name: "Springwel Corporate Office",
    category: "CORPORATE",
    location: "New Delhi",
  },
  { name: "Printman India", category: "CORPORATE" },
  { name: "Shubhram Hospital Solutions", category: "CORPORATE" },
];

export const PROJECTS: Project[] = rawProjects.map((p, i) => ({
  ...p,
  image: getImage(p.category, i),
}));

export const CATEGORIES: Category[] = [
  "ALL",
  "CORPORATE",
  "RETAIL",
  "HOSPITALITY",
  "RESIDENTIAL",
  "INSTITUTIONAL",
  "HEALTHCARE",
];
