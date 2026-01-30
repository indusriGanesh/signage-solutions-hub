import { 
  Building2, 
  Navigation, 
  ShieldAlert, 
  Layers, 
  Info, 
  Tag, 
  Frame, 
  Monitor, 
  Palette, 
  Landmark, 
  Calendar,
  LucideIcon
} from "lucide-react";

export interface SubCategory {
  name: string;
  slug: string;
}

export interface ProductItem {
  name: string;
  description?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  subcategories: SubCategory[];
  items: ProductItem[];
  image?: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: "branding",
    name: "Branding & Identification Signage",
    slug: "branding-signage",
    description: "Professional branding solutions to establish your corporate identity with reception logos, company name boards, and 3D logo installations.",
    icon: Building2,
    subcategories: [
      { name: "Office Branding", slug: "office-branding" },
      { name: "Name Plates", slug: "name-plates" },
      { name: "Logo Signage", slug: "logo-signage" },
    ],
    items: [
      { name: "Reception Logo Signage", description: "Make a bold first impression" },
      { name: "Company Name Boards", description: "Professional exterior identification" },
      { name: "3D Logo Installations", description: "Dimensional branding statements" },
      { name: "Lobby Branding", description: "Complete lobby transformation" },
      { name: "Department Name Plates", description: "Clear departmental identification" },
      { name: "Desk Name Plates", description: "Professional desk accessories" },
      { name: "Visitor Badge Signage", description: "Secure visitor management" },
    ],
  },
  {
    id: "wayfinding",
    name: "Wayfinding & Directional Signage",
    slug: "wayfinding-signage",
    description: "Guide visitors seamlessly through your facility with intuitive direction arrows, floor directories, and navigation systems.",
    icon: Navigation,
    subcategories: [
      { name: "Indoor Wayfinding", slug: "indoor-wayfinding" },
      { name: "Outdoor Wayfinding", slug: "outdoor-wayfinding" },
      { name: "Directories", slug: "directories" },
    ],
    items: [
      { name: "Direction Arrows", description: "Clear directional guidance" },
      { name: "Floor Directories", description: "Comprehensive floor maps" },
      { name: "Building Directories", description: "Complete building navigation" },
      { name: "Entry & Exit Signage", description: "Safe access points" },
      { name: "Parking Signage", description: "Efficient parking guidance" },
      { name: "Overhead Signs", description: "High-visibility wayfinding" },
      { name: "Campus Navigation Signs", description: "Multi-building solutions" },
    ],
  },
  {
    id: "safety",
    name: "Safety & Compliance Signage",
    slug: "safety-signage",
    description: "Ensure workplace safety and regulatory compliance with warning signs, PPE indicators, and emergency signage.",
    icon: ShieldAlert,
    subcategories: [
      { name: "Fire Safety", slug: "fire-safety" },
      { name: "Mandatory Signs", slug: "mandatory-signs" },
      { name: "Warning Signs", slug: "warning-signs" },
      { name: "Emergency Signs", slug: "emergency-signs" },
    ],
    items: [
      { name: "Warning Signage", description: "Hazard awareness alerts" },
      { name: "PPE Signage", description: "Personal protection reminders" },
      { name: "Fire Safety Signs", description: "Fire prevention & response" },
      { name: "Emergency Exit Signage", description: "Clear evacuation routes" },
      { name: "Hazard Warnings", description: "Risk identification" },
      { name: "Prohibition Signs", description: "Restricted activity notices" },
      { name: "First Aid Signage", description: "Medical assistance locators" },
    ],
  },
  {
    id: "floor-marking",
    name: "Floor & Zone Marking",
    slug: "floor-marking",
    description: "Organize your workspace with durable floor safety markings, aisle markers, and zone identification systems.",
    icon: Layers,
    subcategories: [
      { name: "Safety Markings", slug: "safety-markings" },
      { name: "Industrial Marking", slug: "industrial-marking" },
      { name: "Cleanroom Marking", slug: "cleanroom-marking" },
    ],
    items: [
      { name: "Floor Safety Markings", description: "Slip-resistant safety zones" },
      { name: "Aisle Marking", description: "Traffic flow management" },
      { name: "Zone Marking", description: "Area designation" },
      { name: "Pedestrian Paths", description: "Safe walking routes" },
      { name: "Forklift Routes", description: "Vehicle navigation" },
      { name: "Cleanroom Markings", description: "Controlled environment zones" },
    ],
  },
  {
    id: "facility",
    name: "Facility & Information Signage",
    slug: "facility-signage",
    description: "Enhance visitor experience with restroom signs, accessibility indicators, and informational displays.",
    icon: Info,
    subcategories: [
      { name: "Room Signage", slug: "room-signage" },
      { name: "Accessibility", slug: "accessibility" },
      { name: "Information Boards", slug: "information-boards" },
    ],
    items: [
      { name: "Restroom Signage", description: "Clear facility identification" },
      { name: "Cafeteria Signs", description: "Dining area guidance" },
      { name: "Help Desk Signage", description: "Support point locators" },
      { name: "Accessibility Signage", description: "ADA compliant solutions" },
      { name: "Notice Boards", description: "Communication centers" },
      { name: "QR Info Boards", description: "Digital information access" },
    ],
  },
  {
    id: "labeling",
    name: "Identification & Labeling",
    slug: "identification-labeling",
    description: "Streamline asset management with durable labels, barcodes, QR tags, and weatherproof identification solutions.",
    icon: Tag,
    subcategories: [
      { name: "Asset Labels", slug: "asset-labels" },
      { name: "Industrial Labels", slug: "industrial-labels" },
      { name: "Digital Tags", slug: "digital-tags" },
    ],
    items: [
      { name: "Asset Labels", description: "Equipment tracking" },
      { name: "Cable Labels", description: "Wire identification" },
      { name: "Rack Labels", description: "Storage organization" },
      { name: "Barcode Labels", description: "Inventory management" },
      { name: "QR Tags", description: "Smart identification" },
      { name: "Weatherproof Labels", description: "Outdoor durability" },
    ],
  },
  {
    id: "displays",
    name: "Display Systems & Frames",
    slug: "display-systems",
    description: "Showcase your content professionally with photo frames, poster displays, LED frames, and acrylic stands.",
    icon: Frame,
    subcategories: [
      { name: "Photo Frames", slug: "photo-frames" },
      { name: "Poster Displays", slug: "poster-displays" },
      { name: "Tabletop Displays", slug: "tabletop-displays" },
    ],
    items: [
      { name: "Photo Frames", description: "Elegant image display" },
      { name: "Poster Frames", description: "Promotional showcases" },
      { name: "LED Frames", description: "Illuminated displays" },
      { name: "Acrylic Stands", description: "Modern clear displays" },
      { name: "Tabletop Displays", description: "Desk-level information" },
    ],
  },
  {
    id: "digital",
    name: "Digital & Electronic Signage",
    slug: "digital-signage",
    description: "Engage audiences with LED display boards, digital directories, interactive kiosks, and video walls.",
    icon: Monitor,
    subcategories: [
      { name: "LED Displays", slug: "led-displays" },
      { name: "Interactive Kiosks", slug: "interactive-kiosks" },
      { name: "Video Walls", slug: "video-walls" },
    ],
    items: [
      { name: "LED Display Boards", description: "Dynamic content delivery" },
      { name: "Digital Directories", description: "Interactive wayfinding" },
      { name: "Kiosks", description: "Self-service stations" },
      { name: "Meeting Room Panels", description: "Room booking displays" },
      { name: "Video Walls", description: "Large-scale visual impact" },
    ],
  },
  {
    id: "interior",
    name: "Interior Branding Signage",
    slug: "interior-branding",
    description: "Transform your space with wall graphics, glass frosting, vinyl designs, and architectural branding.",
    icon: Palette,
    subcategories: [
      { name: "Wall Graphics", slug: "wall-graphics" },
      { name: "Glass Graphics", slug: "glass-graphics" },
      { name: "Architectural Branding", slug: "architectural-branding" },
    ],
    items: [
      { name: "Wall Graphics", description: "Statement wall designs" },
      { name: "Glass Frosting", description: "Privacy with style" },
      { name: "Vinyl Graphics", description: "Versatile applications" },
      { name: "Pillar Branding", description: "Structural integration" },
      { name: "Elevator Branding", description: "Vertical space utilization" },
    ],
  },
  {
    id: "outdoor",
    name: "Outdoor & Exterior Signage",
    slug: "outdoor-signage",
    description: "Make your mark with building signage, pylon signs, monument signs, and weatherproof outdoor solutions.",
    icon: Landmark,
    subcategories: [
      { name: "Building Signs", slug: "building-signs" },
      { name: "Ground Signs", slug: "ground-signs" },
      { name: "Traffic Signs", slug: "traffic-signs" },
    ],
    items: [
      { name: "Building Signage", description: "Architectural identification" },
      { name: "Pylon Signs", description: "High-visibility towers" },
      { name: "Monument Signs", description: "Prestigious ground displays" },
      { name: "Parking Signage", description: "Vehicle management" },
      { name: "Traffic Signs", description: "Road safety solutions" },
    ],
  },
  {
    id: "temporary",
    name: "Temporary & Event Signage",
    slug: "temporary-signage",
    description: "Quick-deploy solutions for construction sites, events, trade shows, and promotional campaigns.",
    icon: Calendar,
    subcategories: [
      { name: "Construction Signs", slug: "construction-signs" },
      { name: "Event Signage", slug: "event-signage" },
      { name: "Promotional Displays", slug: "promotional-displays" },
    ],
    items: [
      { name: "Construction Signs", description: "Site safety & info" },
      { name: "Event Boards", description: "Conference & event displays" },
      { name: "Pop-up Stands", description: "Portable promotions" },
      { name: "A-Frame Signs", description: "Sidewalk advertising" },
    ],
  },
];

export interface Material {
  id: string;
  name: string;
  description: string;
  properties: string[];
  applications: string[];
  image?: string;
}

export const materials: Material[] = [
  {
    id: "acrylic",
    name: "Acrylic",
    description: "Premium transparent or colored plastic with excellent clarity and durability. Perfect for modern, sleek signage applications.",
    properties: ["Crystal clear transparency", "Weather resistant", "UV stable", "Easy to fabricate", "Lightweight"],
    applications: ["Logo signage", "Display cases", "LED signs", "Name plates", "Desk accessories"],
  },
  {
    id: "acp",
    name: "ACP (Aluminum Composite Panel)",
    description: "Durable composite material with aluminum sheets bonded to a polyethylene core. Ideal for large-scale exterior applications.",
    properties: ["Lightweight yet rigid", "Fire resistant options", "Excellent flatness", "Weather resistant", "Easy to install"],
    applications: ["Building facades", "Large signs", "Cladding", "Outdoor branding", "Architectural signage"],
  },
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    description: "Premium metal with superior durability and a professional finish. The gold standard for high-end corporate signage.",
    properties: ["Corrosion resistant", "Elegant finish", "Extremely durable", "Low maintenance", "Recyclable"],
    applications: ["Reception logos", "Building letters", "Monument signs", "Premium name plates", "Architectural details"],
  },
  {
    id: "vinyl",
    name: "Vinyl",
    description: "Versatile adhesive material available in countless colors and finishes. Perfect for graphics, wraps, and temporary applications.",
    properties: ["Flexible application", "Wide color range", "Cut or print ready", "Removable options", "Cost effective"],
    applications: ["Wall graphics", "Vehicle wraps", "Window graphics", "Floor graphics", "Promotional signage"],
  },
  {
    id: "led",
    name: "LED",
    description: "Energy-efficient lighting technology for illuminated signage. Creates striking visual impact day and night.",
    properties: ["Energy efficient", "Long lifespan", "Bright & vibrant", "Low heat emission", "Programmable options"],
    applications: ["Channel letters", "Backlit signs", "Digital displays", "Edge-lit panels", "Neon alternatives"],
  },
  {
    id: "pvc-foam",
    name: "PVC Foam Board",
    description: "Lightweight cellular PVC with a smooth finish. Excellent for indoor signage and display applications.",
    properties: ["Lightweight", "Easy to cut", "Smooth surface", "Moisture resistant", "Budget friendly"],
    applications: ["Indoor signage", "Point of sale", "Exhibition displays", "Temporary signage", "Prototypes"],
  },
];
