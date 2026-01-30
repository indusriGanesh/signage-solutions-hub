import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/products";

const ProductCategory = () => {
  const { slug } = useParams();
  const category = productCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <Layout>
        <div className="container-custom section-padding text-center">
          <h1 className="mb-4 text-3xl font-bold">Category Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The product category you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = category.icon;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b bg-secondary/50">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium text-foreground">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <Icon className="h-10 w-10" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              {category.name}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-2 text-2xl font-bold text-foreground">Subcategories</h2>
            <p className="text-muted-foreground">
              Explore specialized categories within {category.name.toLowerCase()}.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((sub, index) => (
              <motion.div
                key={sub.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border bg-card p-6 card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {sub.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional {sub.name.toLowerCase()} solutions for your business.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-2 text-2xl font-bold text-foreground">Available Products</h2>
            <p className="text-muted-foreground">
              Complete range of products in this category.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 rounded-lg border bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.name}</h4>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Why Choose Our {category.name}?
              </h2>
              <p className="mb-6 text-muted-foreground">
                We deliver premium quality signage solutions with attention to detail, 
                durability, and visual impact that sets your business apart.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom designs tailored to your brand",
                  "Premium materials for durability",
                  "Professional installation services",
                  "Competitive pricing with no compromise",
                  "Fast turnaround times",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-primary p-8 text-primary-foreground"
            >
              <h3 className="mb-4 text-2xl font-bold">Ready to Get Started?</h3>
              <p className="mb-6 text-primary-foreground/70">
                Contact us today for a free consultation and quote for your 
                {" "}{category.name.toLowerCase()} project.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-amber-light">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="mb-2 text-2xl font-bold text-foreground">Related Categories</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories
              .filter((c) => c.id !== category.id)
              .slice(0, 4)
              .map((cat, index) => {
                const CatIcon = cat.icon;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/products/${cat.slug}`}
                      className="group flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent-foreground/10 group-hover:text-accent-foreground">
                        <CatIcon className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{cat.name}</span>
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

export default ProductCategory;
