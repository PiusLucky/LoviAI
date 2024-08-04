"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frames = [
  "/images/lady-frames/lady_frame_normal_0.jpg",
  "/images/lady-frames/lady_frame_without_cards_1.jpg",
  "/images/lady-frames/lady_frame_without_text_cards_2.jpg",
  "/images/lady-frames/lady_frame_3.jpg",
  "/images/lady-frames/lady_frame_4.jpg",
];

function AnimatedHeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="w-full  overflow-hidden">
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          {frames.map((_, index) =>
            index === currentImageIndex ? (
              <motion.img
                key={frames[currentImageIndex]}
                src={frames[currentImageIndex]}
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.8, scale: 1 }}
                transition={{ ease: "easeIn" }}
              />
            ) : null
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AnimatedHeroSection;
