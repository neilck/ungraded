import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Skeleton } from "./ui/skeleton";
import { motion } from "motion/react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithSkeleton({ src, alt, className = "" }: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && !hasError && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className={className}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </motion.div>
    </div>
  );
}
