import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
}

const SEOHead = ({
  title,
  description,
  keywords,
  image = "/reception-logo-signage-new.jpg",
  url,
  type = "website",
}: SEOHeadProps) => {
  const siteName = "Brand Space";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    setMetaTag("description", description);
    if (keywords) {
      setMetaTag("keywords", keywords);
    }

    // Open Graph tags
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", fullImage, true);
    setMetaTag("og:url", fullUrl, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:site_name", siteName, true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", fullImage);

    // Cleanup - restore default title on unmount
    return () => {
      document.title = siteName;
    };
  }, [fullTitle, description, keywords, fullImage, fullUrl, type]);

  return null;
};

export default SEOHead;
