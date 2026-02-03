import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { ProductItem, productCategories } from "@/data/products";
import { slugify } from "@/lib/utils";

interface RelatedProductsProps {
  currentProductName: string;
  categorySlug: string;
  categoryName: string;
}

const RelatedProducts = ({
  currentProductName,
  categorySlug,
}: RelatedProductsProps) => {
  // Find the category and get related products
  const category = productCategories.find((c) => c.slug === categorySlug);
  if (!category) return null;

  // Get products from the same category, excluding current product
  const relatedProducts = category.items
    .filter((item) => item.name !== currentProductName)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-12 border-t">
      <div className="container-custom max-w-[1200px]">
        <h2 className="text-2xl font-bold font-heading mb-6">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map((product, index) => {
            const productSlug = slugify(product.name);
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-md transition-all"
              >
                {/* Image */}
                <Link to={`/products/${categorySlug}/${productSlug}`}>
                  <div className="aspect-square bg-secondary/20 overflow-hidden flex items-center justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="bg-accent/5 p-6 rounded-full">
                        <ImageIcon className="h-8 w-8 text-accent/40" />
                      </div>
                    )}
                  </div>
                </Link>

                {/* Title */}
                <Link to={`/products/${categorySlug}/${productSlug}`}>
                  <div className="p-3 text-center">
                    <h3 className="font-medium text-sm leading-tight group-hover:text-accent transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
