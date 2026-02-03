import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";
import { productCategories } from "@/data/products";

// Mock gallery data - in a real app, these would be actual project images
const galleryItems = [
  {
    id: 1,
    title: "Corporate Reception Signage",
    category: "branding",
    description: "3D illuminated logo installation for a tech company headquarters.",
  },
  {
    id: 2,
    title: "Hospital Wayfinding System",
    category: "wayfinding",
    description: "Comprehensive directional signage for a multi-floor medical facility.",
  },
  {
    id: 3,
    title: "Factory Safety Signage",
    category: "safety",
    description: "Complete safety compliance package for manufacturing plant.",
  },
  {
    id: 4,
    title: "Warehouse Floor Marking",
    category: "floor-marking",
    description: "Industrial floor marking for logistics center operations.",
  },
  {
    id: 5,
    title: "Shopping Mall Directory",
    category: "facility",
    description: "Interactive directory kiosk with digital wayfinding.",
  },
  {
    id: 6,
    title: "Asset Labeling System",
    category: "labeling",
    description: "QR-enabled asset tracking labels for IT equipment.",
  },
  {
    id: 7,
    title: "Exhibition Display System",
    category: "displays",
    description: "Modular display frames for trade show booth.",
  },
  {
    id: 8,
    title: "LED Video Wall",
    category: "digital",
    description: "Large-format LED display for retail environment.",
  },
  {
    id: 9,
    title: "Office Wall Graphics",
    category: "interior",
    description: "Brand values and culture graphics for workspace.",
  },
  {
    id: 10,
    title: "Building Pylon Sign",
    category: "outdoor",
    description: "Illuminated pylon sign for business park entrance.",
  },
  {
    id: 11,
    title: "Event Branding Package",
    category: "temporary",
    description: "Complete signage for annual corporate conference.",
  },
  {
    id: 12,
    title: "Lobby Monument Sign",
    category: "branding",
    description: "Stainless steel monument sign with LED backlighting.",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const categories = [
    { id: "all", name: "All Projects" },
    ...productCategories.slice(0, 6).map((cat) => ({ id: cat.id, name: cat.name.split(" ")[0] })),
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === filter);

  return (
    <Layout>
      <SEOHead
        title="Project Gallery"
        description="Explore Brand Space's portfolio of corporate signage projects. View our work in reception logos, wayfinding systems, safety signage, and more."
        keywords="signage gallery, signage portfolio, corporate signage projects, signage examples"
        url="/gallery"
      />
      {/* Page Header */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Our Gallery
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Explore our portfolio of completed signage projects. 
              Each piece showcases our commitment to quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b bg-background sticky top-[120px] z-40">
        <div className="container-custom">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer overflow-hidden rounded-xl border bg-card"
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                          <span className="font-heading text-2xl font-bold text-primary">
                            {item.id}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">Project Image</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
                  </div>

                  <div className="p-4">
                    <h3 className="mb-1 font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl bg-card"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-colors hover:bg-foreground/20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-heading text-4xl font-bold text-primary">
                        {selectedItem.id}
                      </span>
                    </div>
                    <span className="text-muted-foreground">Full Resolution Image</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">
                  {selectedItem.title}
                </h2>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
