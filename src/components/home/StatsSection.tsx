import { motion } from "framer-motion";
import { Building2, Award, Users, Smile } from "lucide-react";

const StatsSection = () => {
    const stats = [
        {
            icon: Building2,
            value: "500+",
            label: "Projects Completed",
            description: "Across various industries",
        },
        {
            icon: Award,
            value: "15+",
            label: "Years Experience",
            description: "Industry expertise",
        },
        {
            icon: Users,
            value: "300+",
            label: "Happy Clients",
            description: "Worldwide partnerships",
        },
        {
            icon: Smile,
            value: "100%",
            label: "Satisfaction Rate",
            description: "Quality guaranteed",
        },
    ];

    return (
        <section className="section-padding hero-gradient">
            <div className="container-custom relative">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                                    <Icon className="h-8 w-8 text-accent" />
                                </div>
                                <div className="mb-2 text-4xl font-bold text-primary-foreground md:text-5xl">
                                    {stat.value}
                                </div>
                                <div className="mb-1 font-heading text-lg font-semibold text-primary-foreground">
                                    {stat.label}
                                </div>
                                <p className="text-sm text-primary-foreground/70">
                                    {stat.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
