import { businesses } from "@/data/businesses";
import { newsArticles } from "@/data/news-articles";
import { legalPolicies } from "@/data/legal-policies";
export const publicRoutes = [
  "/", "/about", "/about/leadership", "/about/governance", "/about/editorial-independence",
  "/businesses", ...businesses.map(({ slug }) => `/businesses/${slug}`),
  "/businesses/licensing/consumer-products", "/businesses/licensing/content-licensing", "/businesses/licensing/partner-with-us",
  "/investors", "/investors/financial-performance", "/investors/reports", "/investors/shareholder-information",
  "/newsroom", ...newsArticles.map(({ slug }) => `/newsroom/${slug}`), "/foundation", "/contact",
  ...Object.keys(legalPolicies).map((slug) => `/legal/${slug}`),
];
