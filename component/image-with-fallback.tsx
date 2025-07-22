"use client"

import { useState } from "react"
import NextImage from "next/image"
import { ImageIcon } from "lucide-react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  title?: string
  description?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  aspectRatio = "aspect-[4/3]",
  title,
  description,
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {imageError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-200">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <ImageIcon className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">{title || alt}</h4>
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            {description || "Premium advertisement space available"}
          </p>
          <div className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
            SPONSORED
          </div>
        </div>
      ) : (
        <NextImage
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={`object-cover`}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}
