'use client';

import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SustainabilitySection() {
  return (
    <section id="tajekoztato" className="relative w-full py-16 px-6 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/1.jpg"
          alt="hero background"
          fill
          className="object-cover brightness-40"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Column */}
        <motion.div
          className="md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm tracking-wide mb-2">Betekintés a munkámba</p>
          <h2 className="text-4xl font-bold leading-snug mb-10">
            Tekints be a <br /> fenntarthatóság világába
          </h2>
          <p className="text-lg font-fugaz-one">
            Fedezd fel hogyan hozhatod ki a legtöbbet a fenntartható energiaforrásokból és
            hogyan járulhatsz hozzá a környezetvédelemhez.
          </p>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/video_placeholderjpg.jpg"
            alt="video placeholder"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-lg"
          />
          {/* <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/30"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <PlayCircle className="text-white w-16 h-16" />
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
