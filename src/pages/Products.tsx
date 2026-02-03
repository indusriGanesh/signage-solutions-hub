import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Menu,
    ChevronRight,
    Filter,
    ImageIcon,
    Eye
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { productCategories, ProductCategory, ProductItem } from "@/data/products";
import { useState, useEffect } from "react";
import { cn, slugify } from "@/lib/utils";
import QuickViewModal from "@/components/products/QuickViewModal";

const CATEGORY_FILTERS = [
    { name: "Branding & Identification", id: "branding" },
    { name: "Wayfinding & Directional", id: "wayfinding" },
    { name: "Suspended & Projection", id: "suspended-projection" },
    { name: "Safety & Compliance", id: "safety" },
    { name: "Fire & Emergency", id: "fire-emergency" },
    { name: "Floor & Zone Marking", id: "floor-marking" },
    { name: "Facility & Information", id: "facility" },
    { name: "Identification & Labeling", id: "labeling" },
    { name: "Display & Frames", id: "displays" },
    { name: "Digital Signage", id: "digital" },
    { name: "Interior Branding", id: "interior" },
    { name: "Outdoor Signage", id: "outdoor" },
    { name: "Temporary Signage", id: "temporary" },
    { name: "Sustainability & Environmental", id: "sustainability" },
    { name: "Wellness & Hygiene", id: "wellness" },
    { name: "Technology & Smart Building", id: "technology" },
    { name: "Specialized Industrial", id: "industrial" },
    { name: "Security & Access Control", id: "security" },
];

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<{ item: ProductItem; categorySlug: string; categoryName: string } | null>(null);
    const navigate = useNavigate();

    // Sync with URL
    useEffect(() => {
        const category = searchParams.get("category");
        if (category) {
            // Check if it's a valid ID from our filters
            const exists = CATEGORY_FILTERS.find(f => f.id === category);
            if (exists) {
                setActiveCategory(category);
            }
        } else {
            setActiveCategory("all");
        }
    }, [searchParams]);

    const handleCategoryChange = (id: string | null) => {
        if (id) {
            setActiveCategory(id);
            setSearchParams({ category: id });
        } else {
            setActiveCategory("all");
            setSearchParams({});
        }
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Get items based on selection
    const getFilteredItems = () => {
        let items: { item: ProductItem; categoryName: string; categorySlug: string }[] = [];

        if (activeCategory === "all") {
            // Flatten all categories
            productCategories.forEach(cat => {
                cat.items.forEach(item => {
                    items.push({
                        item,
                        categoryName: cat.name,
                        categorySlug: cat.slug
                    });
                });
            });
        } else {
            const category = productCategories.find(c => c.id === activeCategory);
            if (category) {
                items = category.items.map(item => ({
                    item,
                    categoryName: category.name,
                    categorySlug: category.slug
                }));
            }
        }

        // Apply search filter
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            return items.filter(({ item }) =>
                item.name.toLowerCase().includes(q)
            );
        }

        return items;
    };

    const filteredItems = getFilteredItems();

    // Group items by subcategory (description field contains subcategory name)
    const getGroupedItems = () => {
        const grouped: { [key: string]: { item: ProductItem; categorySlug: string }[] } = {};
        
        filteredItems.forEach(({ item, categorySlug }) => {
            const subcategory = item.description || "Other";
            if (!grouped[subcategory]) {
                grouped[subcategory] = [];
            }
            grouped[subcategory].push({ item, categorySlug });
        });
        
        return grouped;
    };

    const groupedItems = getGroupedItems();
    const activeLabel = activeCategory === "all" ? "All Products" : (CATEGORY_FILTERS.find(c => c.id === activeCategory)?.name || "Products");

    return (
        <Layout>
            <SEOHead
                title={activeLabel}
                description={`Explore our ${activeLabel.toLowerCase()} collection. Premium signage solutions for corporate offices, data centers, and industrial facilities.`}
                keywords={`${activeLabel.toLowerCase()}, signage, corporate signs, wayfinding, safety signage`}
                url="/products"
            />
            {/* Header */}
            <section className="bg-primary text-primary-foreground py-8">
                <div className="container-custom">
                    <h1 className="text-3xl font-bold">Our Products</h1>
                </div>
            </section>

            <div className="container-custom py-12">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-4">
                        <Button
                            variant="outline"
                            className="w-full flex justify-between"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span>{activeLabel}</span>
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Sidebar */}
                    <aside className={cn(
                        "lg:w-1/5 lg:block space-y-1",
                        mobileMenuOpen ? "block" : "hidden"
                    )}>
                        <div className="sticky top-24 bg-card border rounded-xl overflow-hidden shadow-sm">
                            <div className="p-4 bg-muted/50 border-b font-semibold text-foreground">
                                Categories
                            </div>
                            <div className="p-2 space-y-0.5">
                                <button
                                    onClick={() => handleCategoryChange(null)}
                                    className={cn(
                                        "w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group",
                                        activeCategory === "all"
                                            ? "bg-accent text-accent-foreground shadow-sm"
                                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    )}
                                >
                                    All Products
                                    {activeCategory === "all" && (
                                        <ChevronRight className="h-4 w-4 opacity-50" />
                                    )}
                                </button>
                                {CATEGORY_FILTERS.map((filter) => (
                                    <button
                                        key={filter.id}
                                        onClick={() => handleCategoryChange(filter.id)}
                                        className={cn(
                                            "w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group",
                                            activeCategory === filter.id
                                                ? "bg-accent text-accent-foreground shadow-sm"
                                                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                                        )}
                                    >
                                        {filter.name}
                                        {activeCategory === filter.id && (
                                            <ChevronRight className="h-4 w-4 opacity-50" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="lg:w-4/5">
                        <div className="mb-6 max-w-md">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder={`Search in ${activeLabel}...`}
                                    className="pl-9 bg-card"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-foreground">{activeLabel}</h2>
                            <span className="text-sm text-muted-foreground">
                                {filteredItems.length} Products
                            </span>
                        </div>

                        {filteredItems.length > 0 ? (
                            <div className="space-y-8">
                                {Object.entries(groupedItems).map(([subcategory, items]) => (
                                    <div key={subcategory}>
                                        {/* Subcategory Heading */}
                                        <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                                            {subcategory}
                                        </h3>
                                        
                                        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                            <AnimatePresence mode="wait">
                                                {items.map(({ item, categorySlug }, index) => {
                                                    const itemSlug = slugify(item.name);
                                                    const categoryInfo = productCategories.find(c => c.slug === categorySlug);
                                                    return (
                                                        <motion.div
                                                            key={`${categorySlug}-${itemSlug}`}
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.2, delay: index * 0.05 }}
                                                            className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all h-full flex flex-col"
                                                        >
                                                            {/* Image */}
                                                            <div 
                                                                onClick={() => navigate(`/products/${categorySlug}/${itemSlug}`)}
                                                                className="aspect-[4/3] bg-secondary/20 relative overflow-hidden flex items-center justify-center cursor-pointer"
                                                            >
                                                                {item.image ? (
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.name}
                                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                    />
                                                                ) : (
                                                                    <div className="bg-accent/5 p-8 rounded-full">
                                                                        <ImageIcon className="h-8 w-8 text-accent/40" />
                                                                    </div>
                                                                )}

                                                                {/* Hover Overlay */}
                                                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            </div>

                                                            {/* Quick View Button */}
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setQuickViewProduct({
                                                                        item,
                                                                        categorySlug,
                                                                        categoryName: categoryInfo?.name || ""
                                                                    });
                                                                }}
                                                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-background z-10"
                                                                aria-label="Quick view"
                                                            >
                                                                <Eye className="h-4 w-4 text-foreground" />
                                                            </button>

                                                            <div 
                                                                onClick={() => navigate(`/products/${categorySlug}/${itemSlug}`)}
                                                                className="p-4 flex flex-col flex-grow items-center text-center cursor-pointer"
                                                            >
                                                                <h3 className="font-semibold text-base leading-tight group-hover:text-accent transition-colors">
                                                                    {item.name}
                                                                </h3>
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-xl">
                                <div className="bg-muted p-4 rounded-full mb-4">
                                    <Search className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-lg font-medium text-foreground">No products found</h3>
                                <p className="text-muted-foreground max-w-sm mt-2">
                                    We couldn't find any products matching your criteria.
                                </p>
                                {searchQuery && (
                                    <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2 text-accent">
                                        Clear search
                                    </Button>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>
            {/* Quick View Modal */}
            <QuickViewModal
                product={quickViewProduct?.item || null}
                categorySlug={quickViewProduct?.categorySlug || ""}
                categoryName={quickViewProduct?.categoryName || ""}
                isOpen={!!quickViewProduct}
                onClose={() => setQuickViewProduct(null)}
            />
        </Layout>
    );
};

export default Products;
