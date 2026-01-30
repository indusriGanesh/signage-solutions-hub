import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { productCategories } from "@/data/products";

const Products = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Our Products
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Comprehensive signage solutions for every business need. 
              Browse our categories to find the perfect signage for your space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/products/${category.slug}`}
                    className="group block h-full rounded-xl border bg-card overflow-hidden card-hover"
                  >
                    {/* Category Header */}
                    <div className="bg-primary p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h2 className="font-heading text-xl font-bold text-primary-foreground">
                          {category.name}
                        </h2>
                      </div>
                    </div>

                    {/* Category Content */}
                    <div className="p-6">
                      <p className="mb-4 text-muted-foreground">
                        {category.description}
                      </p>

                      {/* Subcategories */}
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-foreground">Subcategories:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.map((sub) => (
                            <span
                              key={sub.slug}
                              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                            >
                              {sub.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Sample Items */}
                      <div className="mb-4 border-t pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-foreground">Includes:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {category.items.slice(0, 4).map((item) => (
                            <li key={item.name} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              {item.name}
                            </li>
                          ))}
                          {category.items.length > 4 && (
                            <li className="text-accent">+{category.items.length - 4} more</li>
                          )}
                        </ul>
                      </div>

                      <div className="flex items-center gap-1 font-medium text-accent group-hover:gap-2 transition-all">
                        <span>View Category</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
