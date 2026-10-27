import NextImage from "next/image";
import images from "@/data/optimized-images.json";

// Shared delivery mapping lets content keep its original, recognisable filenames.
export default function OptimizedImage({ src, quality = 78, unoptimized: _unoptimized, ...props }) {
  return <NextImage {...props} src={typeof src === "string" ? images[src] || src : src} quality={Math.min(quality, 85)} />;
}
