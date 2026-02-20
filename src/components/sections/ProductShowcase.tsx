"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryItems = [
  {
    label: "Home Screen",
    src: "/images/home.png",
    alt: "Artigo Dashboard Overview",
  },
  {
    label: "Ratio Screen",
    src: "/images/ratio-management.png",
    alt: "Ratio Configuration screen",
  },
  {
    label: "Grid Screen",
    src: "/images/grid-composition.png",
    alt: "Grid Layout editor",
  },
  {
    label: "Processing",
    src: "/images/processing.png",
    alt: "Batch Processing status",
  },
  {
    label: "Results",
    src: "/images/results.png",
    alt: "Exported Results folder",
  },
  {
    label: "Settings",
    src: "/images/global-settings.png",
    alt: "Application Settings",
  },
];

export function ProductShowcase() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  return (
    <section id="showcase" className="section-padding overflow-hidden relative">
      <div className="max-container">
        <SectionHeading
          accent="action"
          subtitle="Watch how Artigo transforms your production workflow."
        >
          See it in <span className="gradient-text">action.</span>
        </SectionHeading>

        {/* Ratio Engine Video */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-16"
        >
          <div className="glass-strong rounded-2xl p-3 shadow-xl max-w-4xl mx-auto overflow-hidden">
            <div className="rounded-xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/63N93wpFv9A"
                title="Artigo | Batch Convert Artwork to Multiple Aspect Ratios at Once"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Screenshot Gallery */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 py-4 -mx-4 items-stretch">
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                layoutId={`card-${item.label}`}
                onClick={() => setSelectedImage(item)}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-shrink-0 snap-center cursor-pointer group"
              >
                <div className="glass-strong hover:bg-white/80 transition-colors rounded-xl p-3 shadow-sm hover:shadow-lg w-72 md:w-80 border border-white/40">
                  <div className="rounded-lg overflow-hidden aspect-[16/10] bg-gray-100 relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                        View
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary text-center mt-3 font-medium">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div
              layoutId={`card-${selectedImage.label}`}
              className="relative w-full max-w-[90vw] md:max-w-7xl bg-transparent rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-gray-900 rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl font-semibold">
                  {selectedImage.label}
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
