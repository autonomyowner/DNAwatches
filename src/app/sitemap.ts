import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const now = new Date();

  const staticRoutes = ["/", "/collection", "/about", "/shipping", "/pricing", "/contact", "/privacy"];
  const productRoutes = products.map((product) => `/product/${product.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : route.startsWith("/product/") ? 0.5 : 0.7,
  }));
}


