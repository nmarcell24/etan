"use client"

import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Költségek csökkentése okos energiafelhasználással és tervezéssel.",
    description:
      "Az energiahatékony megoldások nemcsak pénzt takarítanak meg, hanem a környezetet is védik.",
  },
  {
    title: "Válaszd a fenntartható megoldásokat a környezetvédelem érdekében!",
    description:
      "A zöld energiaforrások használata csökkenti a szénlábnyomot és védi bolygónkat.",
  },
  {
    title: "Maximalizáld az energiahatékonyságot a legújabb technológiákkal!",
    description:
      "Innovatív megoldásaink segítenek optimalizálni az energiafelhasználást és csökkenteni a költségeket.",
  },
];

export default function Advantages() {
  return (
    <section
      id="elonyok"
      className="bg-[#FDF9F6] py-28 px-4 text-center text-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-semibold text-green-600 mb-4">
        Fedezd fel az energiahatékonyság előnyeit a mindennapi életben!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <Leaf className="text-green-600 w-10 h-10 mb-4" />
            <h3 className="font-semibold text-lg mb-2 max-w-xs">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
