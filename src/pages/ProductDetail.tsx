import { useNavigate, useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Mail, Phone, ImageIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { productCategories, ProductItem } from "@/data/products";
import { slugify } from "@/lib/utils";
import { useEffect, useState } from "react";
import RelatedProducts from "@/components/products/RelatedProducts";

const ProductDetail = () => {
    const { categorySlug, productSlug } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductItem | null>(null);
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        // Find the product based on slugs
        let foundProduct: ProductItem | null = null;
        let foundCatName = "";

        // 1. Try to find by category if provided
        if (categorySlug) {
            const category = productCategories.find((c) => c.slug === categorySlug);
            if (category) {
                foundCatName = category.name;
                // Search items in this category
                foundProduct = category.items.find((item) => slugify(item.name) === productSlug) || null;
            }
        } else {
            // Fallback: search all categories if for some reason categorySlug isn't standard
            for (const cat of productCategories) {
                const item = cat.items.find((i) => slugify(i.name) === productSlug);
                if (item) {
                    foundProduct = item;
                    foundCatName = cat.name;
                    break;
                }
            }
        }

        if (foundProduct) {
            setProduct(foundProduct);
            setCategoryName(foundCatName);
        }
    }, [categorySlug, productSlug, navigate]);

    if (!product) {
        return (
            <Layout>
                <div className="container-custom py-20 text-center">
                    <p>Loading product details...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <SEOHead
                title={product.name}
                description={product.description || `${product.name} - Premium quality signage solution from Brand Space. Perfect for ${categoryName.toLowerCase()}.`}
                keywords={`${product.name}, ${categoryName}, signage, corporate signs`}
                image={product.image}
                url={`/products/${categorySlug}/${productSlug}`}
                type="product"
            />
            
            <div className="bg-secondary/30 py-8">
                <div className="container-custom max-w-[1200px]">
                    <Button variant="ghost" asChild className="mb-4 pl-0 hover:bg-transparent hover:text-accent">
                        <Link to="/products" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Products
                        </Link>
                    </Button>
                    <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{product.name}</h1>
                    <p className="text-muted-foreground mt-2">{categoryName}</p>
                </div>
            </div>

            <div className="container-custom max-w-[1200px] py-8 lg:py-12">
                <div className="grid gap-12 lg:grid-cols-[350px_1fr] lg:items-start">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-2xl border bg-card p-2 shadow-sm"
                    >
                        <div className="aspect-square relative overflow-hidden rounded-xl bg-secondary/20 flex items-center justify-center">
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
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 font-heading">Product Overview</h2>
                            <p className="text-lg text-muted-foreground">
                                {product.description || "Premium quality signage solution tailored to your business needs."}
                            </p>
                        </div>

                        {/* Materials */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Materials Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.materials ? product.materials.map(m => (
                                    <span key={m} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                        {m}
                                    </span>
                                )) : (
                                    ["Premium Acrylic", "Stainless Steel", "LED Modules", "Durable Vinyl"].map(m => (
                                        <span key={m} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                            {m}
                                        </span>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Applications */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Applications</h3>
                            <ul className="grid gap-2 sm:grid-cols-2">
                                {product.applications ? product.applications.map(app => (
                                    <li key={app} className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-accent" />
                                        {app}
                                    </li>
                                )) : (
                                    ["Corporate Offices", "Retail Stores", "Hotels & Restaurants", "Hospitals", "Educational Institutions"].map(app => (
                                        <li key={app} className="flex items-center gap-2 text-muted-foreground">
                                            <CheckCircle className="h-4 w-4 text-accent" />
                                            {app}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>

                        {/* Enquiry CTA */}
                        <div className="mt-4 rounded-xl bg-primary p-6 text-primary-foreground md:p-8">
                            <h3 className="text-xl font-bold mb-2">Interested in this product?</h3>
                            <p className="mb-6 text-primary-foreground/80">
                                Get in touch with our team for a custom quote and consultation.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button asChild className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90">
                                    <Link to="/contact">
                                        <Mail className="mr-2 h-4 w-4" />
                                        Enquire Now
                                    </Link>
                                </Button>
                                <Button asChild className="bg-transparent border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 shadow-none">
                                    <a href="tel:+917207377499">
                                        <Phone className="mr-2 h-4 w-4" />
                                        Call Us
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Related Products */}
            <RelatedProducts
                currentProductName={product.name}
                categorySlug={categorySlug || ""}
                categoryName={categoryName}
            />
        </Layout>
    );
};

export default ProductDetail;
