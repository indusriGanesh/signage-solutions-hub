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
  Recycle,
  HeartPulse,
  Wifi,
  Factory,
  Lock,
  LucideIcon
} from "lucide-react";

export interface SubCategory {
  name: string;
  slug: string;
}

export interface ProductItem {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  materials?: string[];
  applications?: string[];
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
    description: "Professional branding solutions to establish your corporate identity.",
    icon: Building2,
    image: "/reception-logo-signage-new.jpg",
    subcategories: [
      { name: "Corporate Branding", slug: "corporate-branding" },
      { name: "Interior Identification", slug: "interior-identification" },
      { name: "Technical Identification", slug: "technical-identification" }
    ],
    items: [
      { name: "Reception Logo Signage", description: "Corporate Branding", image: "/reception-logo-signage-new.jpg" },
      { name: "Company Name Boards", description: "Corporate Branding", image: "/company-name-board.jpg" },
      { name: "Building Name Boards", description: "Corporate Branding", image: "/building-name-board.jpg" },
      { name: "Project Name Boards", description: "Corporate Branding", image: "/project-name-board.jpg" },
      { name: "Department Name Boards", description: "Corporate Branding", image: "/department-name-board.jpg" },
      { name: "Reception Desk Branding", description: "Corporate Branding", image: "/reception-desk-branding.jpg" },
      { name: "Lobby Feature Wall Signage", description: "Corporate Branding", image: "/lobby-feature-wall-new.jpg" },
      { name: "3D Logo Installations", description: "Corporate Branding", image: "/3d-logo-installation.jpg" },
      { name: "Corporate Tagline Signage", description: "Corporate Branding", image: "/images/products/corporate-tagline-signage.jpg" },
      { name: "Mission/Vision Statement Walls", description: "Corporate Branding" },
      { name: "Room Name Plates", description: "Interior Identification", image: "/images/products/room-name-plate.jpg" },
      { name: "Cabin Name Plates", description: "Interior Identification" },
      { name: "Conference Room Signage", description: "Interior Identification", image: "/images/products/conference-room-signage.jpg" },
      { name: "Meeting Room Name Plates", description: "Interior Identification" },
      { name: "Desk Name Plates", description: "Interior Identification" },
      { name: "Workstation Numbering", description: "Interior Identification" },
      { name: "Locker Identification Signage", description: "Interior Identification" },
      { name: "Floor Identification Signage", description: "Interior Identification" },
      { name: "Block/Zone Signage", description: "Interior Identification" },
      { name: "Branded Workstation Dividers", description: "Interior Identification" },
      { name: "Server Room Signage", description: "Technical Identification", image: "/images/products/server-room-signage.jpg" },
      { name: "Electrical Room Signage", description: "Technical Identification" },
      { name: "Equipment Identification Boards", description: "Technical Identification" },
      { name: "Rack Numbering Signage", description: "Technical Identification" },
      { name: "Cabinet Numbering Signage", description: "Technical Identification" },
      { name: "Network Equipment Room Signage", description: "Technical Identification" },
      { name: "Data Port Identification", description: "Technical Identification" },
      { name: "IoT Device Locations", description: "Technical Identification" },
      { name: "Sensor Zone Markers", description: "Technical Identification" }
    ]
  },
  {
    id: "wayfinding",
    name: "Wayfinding & Directional Signage",
    slug: "wayfinding-signage",
    description: "Guide visitors seamlessly through your facility.",
    icon: Navigation,
    image: "/images/products/wayfinding_directional_signage.png",
    subcategories: [
      { name: "Interior Navigation", slug: "interior-navigation" },
      { name: "Campus & Outdoor", slug: "campus-outdoor" },
      { name: "Accessibility Navigation", slug: "accessibility-navigation" }
    ],
    items: [
      { name: "Floor Directory Signage", description: "Interior Navigation", image: "/images/products/wayfinding_directional_signage.png" },
      { name: "Building Directory Signage", description: "Interior Navigation", image: "/images/products/building-directory-signage.jpg" },
      { name: "You-Are-Here Maps", description: "Interior Navigation" },
      { name: "Directional Arrow Signage", description: "Interior Navigation", image: "/images/products/directional-arrow-signage.jpg" },
      { name: "Entry & Exit Signage", description: "Interior Navigation" },
      { name: "Overhead Directional Signs", description: "Interior Navigation" },
      { name: "Visitor Route Signage", description: "Interior Navigation" },
      { name: "Corridor Navigation Signage", description: "Interior Navigation" },
      { name: "Elevator Directory Boards", description: "Interior Navigation" },
      { name: "Campus Navigation Signage", description: "Campus & Outdoor" },
      { name: "Building Locator Maps", description: "Campus & Outdoor" },
      { name: "Parking Directional Signage", description: "Campus & Outdoor" },
      { name: "Delivery Entrance Signage", description: "Campus & Outdoor" },
      { name: "Loading Dock Signage", description: "Campus & Outdoor" },
      { name: "Drop-off/Pick-up Signage", description: "Campus & Outdoor" },
      { name: "Landscape Navigation Signage", description: "Campus & Outdoor" },
      { name: "Wheelchair Accessible Route Signage", description: "Accessibility Navigation" },
      { name: "Elevator Accessibility Signage", description: "Accessibility Navigation" },
      { name: "Ramp Directional Signage", description: "Accessibility Navigation" },
      { name: "Multilingual Signage", description: "Accessibility Navigation" },
      { name: "Braille Wayfinding Signage", description: "Accessibility Navigation" },
      { name: "Tactile Path Indicators", description: "Accessibility Navigation" }
    ]
  },
  {
    id: "suspended-projection",
    name: "Suspended & Projection Signage",
    slug: "suspended-projection",
    description: "High-visibility signage for corridors and aisles.",
    icon: Frame,
    image: "/images/products/suspended_projection_signage.png",
    subcategories: [
      { name: "Suspended", slug: "suspended" },
      { name: "Projection", slug: "projection" }
    ],
    items: [
      { name: "Suspended Directional Signs", description: "Suspended", image: "/images/products/suspended_projection_signage.png" },
      { name: "Hanging Aisle Signage", description: "Suspended", image: "/images/products/hanging-aisle-signage.jpg" },
      { name: "Suspended Wayfinding Boards", description: "Suspended" },
      { name: "Ceiling-Hung Department Signage", description: "Suspended" },
      { name: "Suspended Safety Signage", description: "Suspended" },
      { name: "Overhead Exit Signage", description: "Suspended" },
      { name: "Hanging Zone Identification Signage", description: "Suspended" },
      { name: "Suspended Rack/Aisle Markers", description: "Suspended" },
      { name: "Hanging Navigation Signage", description: "Suspended" },
      { name: "Double-Sided Suspended Signs", description: "Suspended" },
      { name: "Hanging Promotional Banners", description: "Suspended" },
      { name: "Projection Wayfinding Signs", description: "Projection" },
      { name: "Corridor Projection Signage", description: "Projection" },
      { name: "Exit Projection Signage", description: "Projection" },
      { name: "Restroom Projection Signage", description: "Projection" },
      { name: "Department Projection Signs", description: "Projection" },
      { name: "Safety Projection Signage", description: "Projection" },
      { name: "Illuminated Projection Signage", description: "Projection" },
      { name: "Blade Signage", description: "Projection" },
      { name: "Double-Sided Wall Projection Signs", description: "Projection" },
      { name: "Bracket-Mounted Perpendicular Signs", description: "Projection" }
    ]
  },
  {
    id: "safety",
    name: "Safety & Compliance Signage",
    slug: "safety-signage",
    description: "Ensure workplace safety and compliance with regulatory standards.",
    icon: ShieldAlert,
    image: "/images/products/safety_compliance_signage.png",
    subcategories: [
      { name: "Hazard Warning", slug: "hazard-warning" },
      { name: "PPE & Instructions", slug: "ppe-instructions" },
      { name: "Access & Prohibition", slug: "access-prohibition" }
    ],
    items: [
      { name: "Danger Signage", description: "Hazard Warning", image: "/images/products/safety_compliance_signage.png" },
      { name: "Warning Signage", description: "Hazard Warning" },
      { name: "Caution Signage", description: "Hazard Warning" },
      { name: "Hazard Warning Signage", description: "Hazard Warning" },
      { name: "ESD Warning Signage", description: "Hazard Warning" },
      { name: "High Voltage Signage", description: "Hazard Warning", image: "/images/products/high-voltage-signage.jpg" },
      { name: "Arc Flash Warning Signage", description: "Hazard Warning" },
      { name: "Radiation Warning Signage", description: "Hazard Warning" },
      { name: "Biohazard Signage", description: "Hazard Warning" },
      { name: "Chemical Hazard Signage", description: "Hazard Warning" },
      { name: "Explosive Atmosphere Signage", description: "Hazard Warning" },
      { name: "Cryogenic Hazard Signage", description: "Hazard Warning" },
      { name: "Oxygen Deficiency Warning", description: "Hazard Warning" },
      { name: "Noise Level Warning Signage", description: "Hazard Warning" },
      { name: "Hot Surface Signage", description: "Hazard Warning" },
      { name: "Overhead Hazard Signage", description: "Hazard Warning" },
      { name: "Pinch Point Signage", description: "Hazard Warning" },
      { name: "Slippery Floor Signage", description: "Hazard Warning" },
      { name: "Fall Protection Signage", description: "Hazard Warning" },
      { name: "PPE Instruction Signage", description: "PPE & Instructions", image: "/images/products/ppe-instruction-signage.jpg" },
      { name: "Mandatory Signage", description: "PPE & Instructions" },
      { name: "Safety Procedure Signage", description: "PPE & Instructions" },
      { name: "Machine Operation Signage", description: "PPE & Instructions" },
      { name: "Lockout/Tagout Signage", description: "PPE & Instructions" },
      { name: "Emergency Procedure Signage", description: "PPE & Instructions" },
      { name: "Prohibition Signage", description: "Access & Prohibition" },
      { name: "No Smoking Signage", description: "Access & Prohibition", image: "/images/products/no-smoking-signage.jpg" },
      { name: "No Mobile Signage", description: "Access & Prohibition" },
      { name: "No Photography Signage", description: "Access & Prohibition" },
      { name: "Authorized Personnel Signage", description: "Access & Prohibition" },
      { name: "Restricted Access Signage", description: "Access & Prohibition" },
      { name: "Security Clearance Level Signage", description: "Access & Prohibition" },
      { name: "Surveillance Signage", description: "Access & Prohibition" },
      { name: "Maximum Occupancy Signage", description: "Access & Prohibition" },
      { name: "Confined Space Signage", description: "Access & Prohibition" }
    ]
  },
  {
    id: "fire-emergency",
    name: "Fire & Emergency Signage",
    slug: "fire-emergency",
    description: "Critical signage for fire safety and emergency response.",
    icon: ShieldAlert,
    subcategories: [
      { name: "Fire Safety Equipment", slug: "fire-equipment" },
      { name: "Emergency Response", slug: "emergency-response" },
      { name: "Medical Emergency", slug: "medical-emergency" }
    ],
    items: [
      { name: "Fire Extinguisher Signage", description: "Fire Safety Equipment", image: "/images/products/fire-extinguisher-signage.jpg" },
      { name: "Fire Hose Reel Signage", description: "Fire Safety Equipment" },
      { name: "Fire Alarm Signage", description: "Fire Safety Equipment" },
      { name: "Fire Suppression System Signage", description: "Fire Safety Equipment" },
      { name: "Sprinkler System Signage", description: "Fire Safety Equipment" },
      { name: "Fire Blanket Location Signage", description: "Fire Safety Equipment" },
      { name: "Emergency Exit Signage", description: "Emergency Response", image: "/images/products/emergency-exit-signage.jpg" },
      { name: "Evacuation Maps", description: "Emergency Response" },
      { name: "Evacuation Route Signage", description: "Emergency Response" },
      { name: "Assembly Point Signage", description: "Emergency Response", image: "/images/products/assembly-point-signage.jpg" },
      { name: "Muster Point Signage", description: "Emergency Response" },
      { name: "Emergency Contact Boards", description: "Emergency Response" },
      { name: "Emergency Shutdown Signage", description: "Emergency Response" },
      { name: "First-Aid Signage", description: "Medical Emergency", image: "/images/products/first-aid-signage.jpg" },
      { name: "AED Signage", description: "Medical Emergency" },
      { name: "Emergency Shower Signage", description: "Medical Emergency" },
      { name: "Eye Wash Signage", description: "Medical Emergency" },
      { name: "Stretcher Location Signage", description: "Medical Emergency" },
      { name: "Medical Room Signage", description: "Medical Emergency" }
    ]
  },
  {
    id: "floor-marking",
    name: "Floor & Zone Marking Signage",
    slug: "floor-marking",
    description: "Organize your workspace with durable floor markings.",
    icon: Layers,
    subcategories: [
      { name: "Safety Markings", slug: "safety-markings" },
      { name: "Operational Markings", slug: "operational-markings" },
      { name: "Lean & 5S Markings", slug: "lean-5s" }
    ],
    items: [
      { name: "Floor Safety Markings", description: "Safety Markings", image: "/images/products/floor-safety-markings.jpg" },
      { name: "Aisle Markings", description: "Safety Markings" },
      { name: "Pedestrian Path Markings", description: "Safety Markings" },
      { name: "Forklift Movement Markings", description: "Safety Markings" },
      { name: "Vehicle Pathway Markings", description: "Safety Markings" },
      { name: "Social Distancing Markers", description: "Safety Markings" },
      { name: "Hazard Zone Markings", description: "Safety Markings" },
      { name: "Zone Identification Markings", description: "Operational Markings" },
      { name: "Loading Zone Markings", description: "Operational Markings" },
      { name: "No Parking Zone Markings", description: "Operational Markings" },
      { name: "Equipment Boundary Markings", description: "Operational Markings" },
      { name: "Hot Aisle / Cold Aisle Markings", description: "Operational Markings" },
      { name: "Cable Route Markings", description: "Operational Markings" },
      { name: "Cleanroom Demarcation Lines", description: "Operational Markings" },
      { name: "5S Floor Labels", description: "Lean & 5S Markings" },
      { name: "Kanban Markers", description: "Lean & 5S Markings" },
      { name: "Tool Shadow Boards", description: "Lean & 5S Markings" },
      { name: "Material Placement Markers", description: "Lean & 5S Markings" },
      { name: "Work-in-Progress Zone Markings", description: "Lean & 5S Markings" },
      { name: "Quality Inspection Zone Markings", description: "Lean & 5S Markings" }
    ]
  },
  {
    id: "facility",
    name: "Facility & Information Signage",
    slug: "facility-signage",
    description: "Enhance visitor experience and communication.",
    icon: Info,
    subcategories: [
      { name: "Common Area", slug: "common-area" },
      { name: "Public Information", slug: "public-information" },
      { name: "Communication Boards", slug: "communication-boards" },
      { name: "Utility Signage", slug: "utility-signage" }
    ],
    items: [
      { name: "Restroom Signage", description: "Common Area", image: "/images/products/restroom-signage.jpg" },
      { name: "Cafeteria Signage", description: "Common Area", image: "/images/products/cafeteria-signage.jpg" },
      { name: "Pantry Signage", description: "Common Area" },
      { name: "Drinking Water Signage", description: "Common Area" },
      { name: "Lift & Staircase Signage", description: "Common Area" },
      { name: "Prayer Room Signage", description: "Common Area" },
      { name: "Lactation Room Signage", description: "Common Area" },
      { name: "Wellness Room Signage", description: "Common Area" },
      { name: "Visitor Instruction Signage", description: "Public Information" },
      { name: "Security Instruction Signage", description: "Public Information" },
      { name: "Public Information Signage", description: "Public Information" },
      { name: "Accessibility Signage", description: "Public Information" },
      { name: "Lost & Found Signage", description: "Public Information" },
      { name: "Wi-Fi Signage", description: "Public Information", image: "/images/products/wifi-signage.jpg" },
      { name: "Operating Hours Signage", description: "Public Information" },
      { name: "Contact Information Boards", description: "Public Information" },
      { name: "Notice Boards", description: "Communication Boards", image: "/images/products/notice-board.jpg" },
      { name: "Announcement Boards", description: "Communication Boards" },
      { name: "Suggestion Box Signage", description: "Communication Boards" },
      { name: "Bulletin Boards", description: "Communication Boards" },
      { name: "Employee Recognition Boards", description: "Communication Boards" },
      { name: "Event Calendar Boards", description: "Communication Boards" },
      { name: "Power Distribution Signage", description: "Utility Signage" },
      { name: "Main Switch Room Signage", description: "Utility Signage" },
      { name: "Generator Room Signage", description: "Utility Signage" },
      { name: "Water Supply Room Signage", description: "Utility Signage" },
      { name: "HVAC Control Room Signage", description: "Utility Signage" }
    ]
  },
  {
    id: "labeling",
    name: "Identification & Labeling Signage",
    slug: "identification-labeling",
    description: "Streamline asset management and technical identification.",
    icon: Tag,
    subcategories: [
      { name: "IT & Network", slug: "it-network" },
      { name: "Asset Management", slug: "asset-management" },
      { name: "Equipment Labels", slug: "equipment-labels" }
    ],
    items: [
      { name: "Rack Identification Labels", description: "IT & Network" },
      { name: "Patch Panel Labels", description: "IT & Network" },
      { name: "Cable Labels", description: "IT & Network" },
      { name: "Network Port Labels", description: "IT & Network" },
      { name: "Router/Switch Labels", description: "IT & Network" },
      { name: "Fiber Optic Cable Labels", description: "IT & Network" },
      { name: "Asset Tags", description: "Asset Management", image: "/images/products/asset-tags.jpg" },
      { name: "Barcode Labels", description: "Asset Management" },
      { name: "QR Code Labels", description: "Asset Management" },
      { name: "RFID Tags", description: "Asset Management" },
      { name: "Serial Number Labels", description: "Asset Management" },
      { name: "Inventory Labels", description: "Asset Management" },
      { name: "Shelf Labels", description: "Asset Management" },
      { name: "Power Cable Labels", description: "Equipment Labels" },
      { name: "Pipe Marking Labels", description: "Equipment Labels" },
      { name: "Valve Identification Tags", description: "Equipment Labels" },
      { name: "Pressure Vessel Labels", description: "Equipment Labels" },
      { name: "Gas Cylinder Labels", description: "Equipment Labels" },
      { name: "Calibration Labels", description: "Equipment Labels" },
      { name: "Maintenance Schedule Labels", description: "Equipment Labels" },
      { name: "Inspection Due Date Labels", description: "Equipment Labels" }
    ]
  },
  {
    id: "displays",
    name: "Display & Frame Signage",
    slug: "display-frames",
    description: "Showcase content professionally with various frames and displays.",
    icon: Frame,
    subcategories: [
      { name: "Wall Display Frames", slug: "wall-frames" },
      { name: "Illuminated Displays", slug: "illuminated-displays" },
      { name: "Standalone Displays", slug: "standalone-displays" }
    ],
    items: [
      { name: "Canvas Frames", description: "Wall Display Frames" },
      { name: "Aluminum Photo Frames", description: "Wall Display Frames" },
      { name: "Wooden Photo Frames", description: "Wall Display Frames" },
      { name: "Clip-on Frames", description: "Wall Display Frames" },
      { name: "Snap Frames", description: "Wall Display Frames" },
      { name: "Poster Frames", description: "Wall Display Frames" },
      { name: "Certificate Frames", description: "Wall Display Frames" },
      { name: "Wall Display Frames", description: "Wall Display Frames" },
      { name: "Branding Display Frames", description: "Wall Display Frames" },
      { name: "Acrylic Standees", description: "Wall Display Frames" },
      { name: "LED Backlit Fabric Frames", description: "Illuminated Displays" },
      { name: "Light Box Frames", description: "Illuminated Displays", image: "/images/products/light-box-frames.jpg" },
      { name: "Backlit Poster Frames", description: "Illuminated Displays" },
      { name: "Edge-lit Acrylic Frames", description: "Illuminated Displays" },
      { name: "Floor Standing Displays", description: "Standalone Displays" },
      { name: "Tabletop Displays", description: "Standalone Displays" },
      { name: "Counter Displays", description: "Standalone Displays" },
      { name: "Pedestal Displays", description: "Standalone Displays" },
      { name: "Exhibition Stands", description: "Standalone Displays" }
    ]
  },
  {
    id: "digital",
    name: "Digital Signage",
    slug: "digital-signage",
    description: "Engage audiences with dynamic digital displays.",
    icon: Monitor,
    image: "/images/products/digital_signage_led_display.png",
    subcategories: [
      { name: "Interactive Digital", slug: "interactive-digital" },
      { name: "Functional Digital", slug: "functional-digital" }
    ],
    items: [
      { name: "LED Display Boards", description: "Interactive Digital", image: "/images/products/digital_signage_led_display.png" },
      { name: "Digital Directory Boards", description: "Interactive Digital" },
      { name: "Video Wall Signage", description: "Interactive Digital" },
      { name: "Interactive Kiosks", description: "Interactive Digital", image: "/images/products/interactive-kiosk.jpg" },
      { name: "Interactive Wayfinding Displays", description: "Interactive Digital" },
      { name: "Touchscreen Information Kiosks", description: "Interactive Digital" },
      { name: "Meeting Room Booking Displays", description: "Functional Digital" },
      { name: "Queue Management Displays", description: "Functional Digital" },
      { name: "Emergency Notification Displays", description: "Functional Digital" },
      { name: "Digital Menu Boards", description: "Functional Digital" },
      { name: "KPI Display Boards", description: "Functional Digital" },
      { name: "Production Dashboard Displays", description: "Functional Digital" },
      { name: "Corporate Announcements Displays", description: "Functional Digital" },
      { name: "Weather/News Ticker Displays", description: "Functional Digital" },
      { name: "Wayfinding Digital Displays", description: "Functional Digital" },
      { name: "Retail Pricing Displays", description: "Functional Digital" }
    ]
  },
  {
    id: "interior",
    name: "Interior Branding Signage",
    slug: "interior-branding",
    description: "Transform your space with environmental graphics.",
    icon: Palette,
    subcategories: [
      { name: "Wall Graphics & Treatments", slug: "wall-graphics" },
      { name: "Structural Branding", slug: "structural-branding" },
      { name: "Environmental Graphics", slug: "environmental-graphics" }
    ],
    items: [
      { name: "Glass Frosting", description: "Wall Graphics" },
      { name: "Vinyl Wall Graphics", description: "Wall Graphics", image: "/images/products/vinyl-wall-graphics.jpg" },
      { name: "Motivational Wall Graphics", description: "Wall Graphics" },
      { name: "Office Branding Graphics", description: "Wall Graphics" },
      { name: "Core Value Walls", description: "Wall Graphics" },
      { name: "Photo Gallery Walls", description: "Wall Graphics" },
      { name: "Custom Wallpaper Graphics", description: "Wall Graphics" },
      { name: "Acoustic Panel Branding", description: "Wall Graphics" },
      { name: "Pillar Wraps", description: "Structural Branding" },
      { name: "Ceiling Graphics", description: "Structural Branding" },
      { name: "Floor Decals", description: "Structural Branding" },
      { name: "Window Graphics", description: "Structural Branding" },
      { name: "Door Graphics", description: "Structural Branding" },
      { name: "Elevator Branding", description: "Structural Branding" },
      { name: "Staircase Branding", description: "Structural Branding" },
      { name: "Column Wraps", description: "Structural Branding" },
      { name: "Timeline Walls", description: "Environmental Graphics" },
      { name: "Heritage Walls", description: "Environmental Graphics" },
      { name: "Product Showcase Walls", description: "Environmental Graphics" },
      { name: "Achievement Walls", description: "Environmental Graphics" },
      { name: "Cultural Graphics", description: "Environmental Graphics" }
    ]
  },
  {
    id: "outdoor",
    name: "Outdoor Signage",
    slug: "outdoor-signage",
    description: "Make your mark with exterior signage solutions.",
    icon: Landmark,
    image: "/images/products/building_exterior_pylon_signage.png",
    subcategories: [
      { name: "Building Exterior", slug: "building-exterior" },
      { name: "Parking Signage", slug: "parking-signage" },
      { name: "Traffic & Safety", slug: "traffic-safety" },
      { name: "Security & Access", slug: "security-access" },
      { name: "Landscape & Campus", slug: "landscape-campus" }
    ],
    items: [
      { name: "Building Façade Signage", description: "Building Exterior", image: "/images/products/building_exterior_pylon_signage.png" },
      { name: "Monument Signage", description: "Building Exterior", image: "/images/products/monument-signage.jpg" },
      { name: "Pylon Signage", description: "Building Exterior" },
      { name: "Entrance Gate Branding", description: "Building Exterior" },
      { name: "Boundary Wall Signage", description: "Building Exterior" },
      { name: "Building Directory Boards", description: "Building Exterior" },
      { name: "Parking Directional Signage", description: "Parking" },
      { name: "Parking Lot Numbering", description: "Parking" },
      { name: "Reserved Parking Signage", description: "Parking" },
      { name: "Visitor Parking Signage", description: "Parking", image: "/images/products/parking-signage.jpg" },
      { name: "Disabled Parking Signage", description: "Parking" },
      { name: "Carpool Priority Parking", description: "Parking" },
      { name: "Motorcycle Parking Signage", description: "Parking" },
      { name: "Bicycle Parking Signage", description: "Parking" },
      { name: "EV Charging Bay Signage", description: "Parking" },
      { name: "Height Restriction Signage", description: "Traffic" },
      { name: "Speed Limit Signage", description: "Traffic" },
      { name: "Speed Breaker Markings", description: "Traffic" },
      { name: "One-Way Signage", description: "Traffic" },
      { name: "Stop Signage", description: "Traffic" },
      { name: "Pedestrian Crossing Signage", description: "Traffic" },
      { name: "Security Checkpoint Signage", description: "Security" },
      { name: "CCTV Surveillance Signage", description: "Security" },
      { name: "Perimeter Security Signage", description: "Security" },
      { name: "Boom Barrier Signage", description: "Security" },
      { name: "Landscape Signage", description: "Landscape" },
      { name: "Garden Name Boards", description: "Landscape" },
      { name: "Pathway Markers", description: "Landscape" },
      { name: "Campus Map Boards", description: "Landscape" }
    ]
  },
  {
    id: "temporary",
    name: "Temporary Signage",
    slug: "temporary-signage",
    description: "Quick-deploy solutions for events and safety.",
    icon: Calendar,
    subcategories: [
      { name: "Safety & Maintenance", slug: "safety-maintenance" },
      { name: "Event & Promotional", slug: "event-promotional" },
      { name: "Wayfinding & Information", slug: "temp-wayfinding" }
    ],
    items: [
      { name: "Construction Safety Signage", description: "Safety & Maintenance" },
      { name: "Wet Floor Signage", description: "Safety & Maintenance" },
      { name: "Maintenance Signage", description: "Safety & Maintenance" },
      { name: "Under Repair Signage", description: "Safety & Maintenance" },
      { name: "Temporary Closure Signage", description: "Safety & Maintenance" },
      { name: "Scaffolding Safety Signage", description: "Safety & Maintenance" },
      { name: "Excavation Warning Signage", description: "Safety & Maintenance" },
      { name: "Event Directional Signage", description: "Event & Promotional" },
      { name: "Retractable Banners", description: "Event & Promotional", image: "/images/products/retractable-banner.jpg" },
      { name: "Pop-up Displays", description: "Event & Promotional" },
      { name: "A-Frame Signage", description: "Event & Promotional" },
      { name: "Sandwich Boards", description: "Event & Promotional" },
      { name: "Temporary Promotional Signage", description: "Event & Promotional" },
      { name: "Sale/Offer Signage", description: "Event & Promotional" },
      { name: "Temporary Parking Signage", description: "Wayfinding & Information" },
      { name: "Detour Signage", description: "Wayfinding & Information" },
      { name: "Temporary Access Route Signage", description: "Wayfinding & Information" }
    ]
  },
  {
    id: "sustainability",
    name: "Sustainability & Environmental Signage",
    slug: "sustainability-signage",
    description: "Promote green initiatives and environmental awareness.",
    icon: Recycle,
    subcategories: [
      { name: "Waste Management", slug: "waste-management" },
      { name: "Conservation", slug: "conservation" },
      { name: "Green Building", slug: "green-building" }
    ],
    items: [
      { name: "Waste Segregation Signage", description: "Waste Management", image: "/images/products/waste-segregation-signage.jpg" },
      { name: "Composting Bin Signage", description: "Waste Management" },
      { name: "Hazardous Waste Disposal Signage", description: "Waste Management" },
      { name: "Battery Recycling Signage", description: "Waste Management" },
      { name: "Paper Recycling Signage", description: "Waste Management" },
      { name: "Plastic Recycling Signage", description: "Waste Management" },
      { name: "Glass Recycling Signage", description: "Waste Management" },
      { name: "E-Waste Collection Signage", description: "Waste Management" },
      { name: "Energy-Saving Reminders", description: "Conservation" },
      { name: "Water Conservation Signage", description: "Conservation" },
      { name: "Turn Off Lights Signage", description: "Conservation" },
      { name: "Power Saving Mode Signage", description: "Conservation" },
      { name: "Motion Sensor Notification Signage", description: "Conservation" },
      { name: "Green Building Certification Displays", description: "Green Building" },
      { name: "Carbon Footprint Information Boards", description: "Green Building" },
      { name: "LEED Certification Signage", description: "Green Building" },
      { name: "Sustainability Initiative Boards", description: "Green Building" },
      { name: "Environmental Policy Boards", description: "Green Building" }
    ]
  },
  {
    id: "wellness",
    name: "Wellness & Hygiene Signage",
    slug: "wellness-hygiene",
    description: "Ensure health, safety, and hygiene in your facility.",
    icon: HeartPulse,
    subcategories: [
      { name: "Sanitation", slug: "sanitation" },
      { name: "Health & Safety", slug: "health-safety" },
      { name: "Wellness Facilities", slug: "wellness-facilities" }
    ],
    items: [
      { name: "Sanitization Station Signage", description: "Sanitation", image: "/images/products/sanitization-station-signage.jpg" },
      { name: "Handwashing Instruction Signage", description: "Sanitation" },
      { name: "Hygiene Protocol Signage", description: "Sanitation" },
      { name: "Disinfection Schedule Boards", description: "Sanitation" },
      { name: "Occupancy Limit Signage", description: "Health & Safety" },
      { name: "Social Distancing Markers", description: "Health & Safety" },
      { name: "Temperature Screening Point Signage", description: "Health & Safety" },
      { name: "Mask Required Signage", description: "Health & Safety" },
      { name: "Air Quality Monitoring Displays", description: "Health & Safety" },
      { name: "Ventilation Status Displays", description: "Health & Safety" },
      { name: "Wellness Center Signage", description: "Wellness Facilities" },
      { name: "Meditation Room Signage", description: "Wellness Facilities" },
      { name: "Fitness Center Signage", description: "Wellness Facilities" },
      { name: "Health Screening Room Signage", description: "Wellness Facilities" }
    ]
  },
  {
    id: "technology",
    name: "Technology & Smart Building Signage",
    slug: "technology-signage",
    description: "Modern signage for smart and connected buildings.",
    icon: Wifi,
    subcategories: [
      { name: "Connectivity", slug: "connectivity" },
      { name: "Smart Controls", slug: "smart-controls" },
      { name: "Access Technology", slug: "access-technology" }
    ],
    items: [
      { name: "Charging Station Signage", description: "Connectivity" },
      { name: "USB Charging Port Signage", description: "Connectivity" },
      { name: "Wireless Charging Zone Signage", description: "Connectivity" },
      { name: "Wi-Fi Zone Signage", description: "Connectivity" },
      { name: "Network Coverage Map", description: "Connectivity" },
      { name: "Smart Building Control Panels", description: "Smart Controls" },
      { name: "Building Automation System Signage", description: "Smart Controls" },
      { name: "Climate Control Zone Signage", description: "Smart Controls" },
      { name: "Lighting Control Panel Signage", description: "Smart Controls" },
      { name: "Occupancy Sensor Notification", description: "Smart Controls" },
      { name: "RFID/Biometric Access Signage", description: "Access Technology" },
      { name: "Facial Recognition Zone Signage", description: "Access Technology" },
      { name: "Visitor Badge Return Signage", description: "Access Technology" },
      { name: "Tailgating Prevention Signage", description: "Access Technology" },
      { name: "Mantrap Instructions", description: "Access Technology" }
    ]
  },
  {
    id: "industrial",
    name: "Specialized Industrial Signage",
    slug: "industrial-signage",
    description: "Signage for heavy industry and specialized environments.",
    icon: Factory,
    subcategories: [
      { name: "Heavy Equipment", slug: "heavy-equipment" },
      { name: "Process & Storage", slug: "process-storage" },
      { name: "Quality & Control", slug: "quality-control" }
    ],
    items: [
      { name: "Crane Operation Zone Signage", description: "Heavy Equipment" },
      { name: "Forklift Operating Area Signage", description: "Heavy Equipment", image: "/images/products/forklift-signage.jpg" },
      { name: "Material Handling Equipment Signage", description: "Heavy Equipment" },
      { name: "Overhead Crane Warning Signage", description: "Heavy Equipment" },
      { name: "Load Capacity Signage", description: "Heavy Equipment" },
      { name: "Equipment Clearance Signage", description: "Heavy Equipment" },
      { name: "Chemical Storage Signage", description: "Process & Storage" },
      { name: "Flammable Storage Signage", description: "Process & Storage" },
      { name: "Pressure Vessel Identification", description: "Process & Storage" },
      { name: "Temperature-Controlled Storage Signage", description: "Process & Storage" },
      { name: "Cold Storage Signage", description: "Process & Storage" },
      { name: "Humidity-Controlled Area Signage", description: "Process & Storage" },
      { name: "Cleanroom Classification Signage", description: "Quality & Control" },
      { name: "Dust Control Area Signage", description: "Quality & Control" },
      { name: "Contamination Control Signage", description: "Quality & Control" },
      { name: "Quarantine Area Signage", description: "Quality & Control" },
      { name: "Inspection Hold Area Signage", description: "Quality & Control" }
    ]
  },
  {
    id: "security",
    name: "Security & Access Control Signage",
    slug: "security-access",
    description: "Secure your facility with clear access control signage.",
    icon: Lock,
    subcategories: [
      { name: "Access Management", slug: "access-management" },
      { name: "Monitoring", slug: "monitoring" },
      { name: "Visitor Management", slug: "visitor-management" }
    ],
    items: [
      { name: "Security Clearance Level Signage", description: "Access Management" },
      { name: "Controlled Access Area Signage", description: "Access Management" },
      { name: "Escort Required Signage", description: "Access Management" },
      { name: "Two-Person Rule Signage", description: "Access Management" },
      { name: "Man-Trap Entry Signage", description: "Access Management" },
      { name: "Camera Coverage Signage", description: "Monitoring" },
      { name: "Camera Blind Spot Indicators", description: "Monitoring" },
      { name: "24/7 Monitoring Signage", description: "Monitoring" },
      { name: "Recording in Progress Signage", description: "Monitoring" },
      { name: "Visitor Check-In Signage", description: "Visitor Management" },
      { name: "Visitor Badge Required Signage", description: "Visitor Management" },
      { name: "Visitor Parking Signage", description: "Visitor Management" },
      { name: "Visitor Waiting Area Signage", description: "Visitor Management" },
      { name: "Visitor Escort Policy Signage", description: "Visitor Management" }
    ]
  }
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
