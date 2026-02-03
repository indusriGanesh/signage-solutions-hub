import { motion } from "framer-motion";
import { Award, Clock, Users, Shield, Zap, Headphones } from "lucide-react";

const FeaturesSection = () => {
    const features = [
        {
            icon: Award,
            title: "Premium Quality",
            description: "Industry-leading materials and craftsmanship guarantee long-lasting, vibrant signage.",
        },
        {
            icon: Clock,
            title: "Fast Turnaround",
            description: "Efficient production processes ensure your signage is delivered on time, every time.",
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "15+ years of combined experience in design, manufacturing, and installation.",
        },
        {
            icon: Shield,
            title: "Quality Guaranteed",
            description: "Comprehensive warranty and quality assurance on all our signage solutions.",
        },
        {
            icon: Zap,
            title: "Custom Solutions",
            description: "Tailored designs that perfectly match your brand identity and requirements.",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Dedicated customer support team ready to assist you at every step.",
        },
    ];

    return (
        <section className="section-padding bg-secondary/30">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="mb-2 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                        Why Choose Us
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        Excellence in Every Detail
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        We combine cutting-edge technology with traditional craftsmanship to deliver
                        signage solutions that exceed expectations.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group rounded-xl border bg-card p-6 card-hover"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
