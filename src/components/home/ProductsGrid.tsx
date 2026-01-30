import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";

const ProductsGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Our Products
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Complete Signage Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From corporate branding to safety compliance, we offer a comprehensive range of
            signage products to meet every business need.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/products?category=${category.id}`}
                  className="group block h-full rounded-xl border bg-card p-6 card-hover"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <span
                        key={sub.slug}
                        className="inline-block rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                      >
                        {sub.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-navy-light"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsGrid;
