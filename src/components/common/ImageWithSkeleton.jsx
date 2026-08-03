import { memo, useState } from "react";

function ImageWithSkeleton({ src, alt, className = "", priority = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-smoke-100">
      {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse">
          <div className="h-full w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
        </div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
        draggable={false}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`
          ${className}
          will-change-transform
          transition-all
          duration-500
          ease-out
          ${
            loaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-md scale-105"
          }
        `}
      />
    </div>
  );
}

export default memo(ImageWithSkeleton);
