import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { materials } from "@/data/products";

const Materials = () => {
  return (
    <Layout>
      <SEOHead
        title="Signage Materials"
        description="Discover the premium materials Brand Space uses for signage: acrylic, stainless steel, aluminum, glass, LED modules, and more."
        keywords="signage materials, acrylic signs, stainless steel signage, LED signage materials"
        url="/materials"
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
              Materials We Use
            </h1>
            <p className="text-lg text-primary-foreground/70">
              We source only premium materials to ensure durability, aesthetics, 
              and long-lasting performance for all signage solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {materials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image/Visual */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                          <span className="font-heading text-4xl font-bold">
                            {material.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-lg font-medium text-muted-foreground">
                          {material.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="mb-4 text-3xl font-bold text-foreground">
                    {material.name}
                  </h2>
                  <p className="mb-6 text-muted-foreground">
                    {material.description}
                  </p>

                  {/* Properties */}
                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold text-foreground">Key Properties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {material.properties.map((prop) => (
                        <span
                          key={prop}
                          className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
                        >
                          <CheckCircle className="h-3.5 w-3.5" />
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="mb-3 font-semibold text-foreground">Common Applications:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {material.applications.map((app) => (
                        <li key={app} className="flex items-center gap-2 text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Custom Material Solutions
            </h2>
            <p className="mb-8 text-muted-foreground">
              Need a specific material or have unique requirements? Our team can source 
              specialized materials and create custom solutions for your project.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-amber-light btn-glow">
              <Link to="/contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Materials;
