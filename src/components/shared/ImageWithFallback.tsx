"use client";

import Image from "next/image";
import { useState, type ComponentProps } from "react";

export function ImageWithFallback({
  fill,
  fallbackLabel,
  className,
  alt,
  ...rest
}: ComponentProps<typeof Image> & { fallbackLabel?: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-moss/10 flex items-center justify-center ${
          fill ? "absolute inset-0" : ""
        } ${className ?? ""}`}
      >
        {fallbackLabel && (
          <span className="font-body text-moss/40 text-xs font-semibold tracking-wider uppercase">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return <Image {...rest} alt={alt ?? ""} fill={fill} className={className} onError={() => setError(true)} />;
}