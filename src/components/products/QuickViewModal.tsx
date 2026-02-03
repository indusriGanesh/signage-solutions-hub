import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Mail, Phone, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductItem } from "@/data/products";
import { slugify } from "@/lib/utils";

interface QuickViewModalProps {
  product: ProductItem | null;
  categorySlug: string;
  categoryName: string;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal = ({
  product,
  categorySlug,
  categoryName,
  isOpen,
  onClose,
}: QuickViewModalProps) => {
  if (!product) return null;

  const productSlug = slugify(product.name);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 max-h-[90vh] w-full md:max-w-3xl overflow-auto rounded-2xl bg-background shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-secondary/80 p-2 text-foreground hover:bg-secondary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="aspect-square bg-secondary/20 flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center text-muted-foreground">
                    <ImageIcon className="h-20 w-20 mb-4 opacity-20" />
                    <span>No image available</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <p className="text-sm text-muted-foreground mb-1">
                  {categoryName}
                </p>
                <h2 className="text-2xl font-bold font-heading mb-4">
                  {product.name}
                </h2>

                <p className="text-muted-foreground mb-4">
                  {product.description ||
                    "Premium quality signage solution tailored to your business needs."}
                </p>

                {/* Materials */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">Materials</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {(
                      product.materials || [
                        "Premium Acrylic",
                        "Stainless Steel",
                        "LED Modules",
                      ]
                    ).map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6 flex-1">
                  <h3 className="text-sm font-semibold mb-2">Applications</h3>
                  <ul className="space-y-1">
                    {(
                      product.applications || [
                        "Corporate Offices",
                        "Retail Stores",
                        "Hotels",
                      ]
                    )
                      .slice(0, 4)
                      .map((app) => (
                        <li
                          key={app}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-3.5 w-3.5 text-accent" />
                          {app}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full">
                    <Link to={`/products/${categorySlug}/${productSlug}`}>
                      View Full Details
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <Link to="/contact">
                        <Mail className="mr-2 h-4 w-4" />
                        Enquire
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <a href="tel:+917207377499">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
