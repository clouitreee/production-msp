import { useEffect } from "react";

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export function useSEO(metadata: SEOMetadata) {
  useEffect(() => {
    // Update page title
    document.title = metadata.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", metadata.description);

    // Update meta keywords
    if (metadata.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", metadata.keywords);
    }

    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", metadata.title);

    // Update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute("content", metadata.description);

    // Update Open Graph image
    if (metadata.ogImage) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement("meta");
        ogImage.setAttribute("property", "og:image");
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute("content", metadata.ogImage);
    }

    // Update Open Graph type
    if (metadata.ogType) {
      let ogType = document.querySelector('meta[property="og:type"]');
      if (ogType) {
        ogType.setAttribute("content", metadata.ogType);
      }
    }
  }, [metadata]);
}
