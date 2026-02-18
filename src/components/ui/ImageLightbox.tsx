"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail with hover effect */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative group cursor-zoom-in block"
        aria-label={`Zoom ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
        {/* Zoom overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
            <ZoomIn className="text-accent-indigo" size={24} />
          </div>
        </div>
      </button>

      {/* Lightbox Modal — rendered via portal directly on document.body */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ position: "fixed", inset: 0, zIndex: 99999 }}
                className="bg-black/95 backdrop-blur-md flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white shadow-lg"
                  aria-label="Close lightbox"
                >
                  <X size={28} />
                </button>

                {/* Image */}
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: "absolute", inset: "3rem" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-contain"
                      quality={100}
                      sizes="100vw"
                    />
                  </div>
                </motion.div>

                {/* Hint */}
                <p
                  style={{ position: "absolute", bottom: "1.5rem" }}
                  className="text-white/60 text-sm bg-black/40 px-4 py-2 rounded-full"
                >
                  ESC or click outside to close
                </p>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
