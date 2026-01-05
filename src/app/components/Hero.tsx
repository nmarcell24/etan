"use client";

import { Button } from "@/components/ui/button";
import { scrollToWithOffset } from "@/hooks/scrollToWithOffset";
import { motion } from "framer-motion";
import React from "react";

export default function Hero({ videoUrl }: { videoUrl: string }) {
  return (
    <div
      id="kezdolap"
      className="relative min-h-screen flex flex-col items-start justify-center px-15 text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-80 z-0"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className={`text-4xl font-fugaz-one md:text-5xl lg:text-5xl lg:max-w-2xl xl:text-7xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Gazdálkodj okosan az energiáddal!
        </motion.h1>

        <motion.p
          className={`text-lg mt-6 mb-3 max-w-2xs md:max-w-md text-gray-200 text-shadow-lg/10 md:text-xl lg:mt-10 lg:mb-8 xl:text-2xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Fedezd fel, hogyan csökkentheted az energiafogyasztásodat és
          spórolhatsz a közüzemi számlákon.
        </motion.p>

        <motion.section
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button asChild>
            <a
              onClick={() => scrollToWithOffset("tajekoztato", 100)}
              className="hover:cursor-pointer"
            >
              Tudj meg többet
            </a>
          </Button>
        </motion.section>
      </motion.div>
    </div>
  );
}
