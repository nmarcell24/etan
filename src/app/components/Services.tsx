"use client"

import { motion } from 'framer-motion';
import { Leaf, MessageCircle, Pencil, Zap } from "lucide-react";

const services = [
  {
    icon: <Leaf size={80} className="text-[#3A8B5B]" />,
    title: "Épületenergetikai tanúsítvány készítés",
    description: "Szakértői tanúsítványok az energiahatékonyság növelésére",
  },
  {
    icon: <MessageCircle size={80} className="text-[#3A8B5B]" />,
    title: "Mérnöki tanácsadás",
    description: "Segítünk megtalálni a legjobb megoldásokat az energiahatékonyság növelésére",
  },
  {
    icon: <Zap size={80} className="text-[#3A8B5B]" />,
    title: "Épületvillamossági terv készítés",
    description:
      "Szakértői villamossági tervek az energiahatékony épületekhez",
  },
  {
    icon: <Pencil size={80} className="text-[#3A8B5B]" />,
    title: "Műszaki rajz készítés",
    description: "Részletes műszaki rajzok az építési projektekhez",
  },
];

export default function Services() {
  return (
    <section id='szolgaltatasok' className="text-center py-12 px-4 bg-white">
      <h2 className="text-4xl font-semibold text-green-600 mb-4">Szolgáltatások</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Fedezd fel a szolgáltatásainkat, amelyek segítenek otthonod
        energiahatékonyságának növelésében és a fenntartható életmód elérésében.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col items-center text-center">
            {service.icon}
            <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
