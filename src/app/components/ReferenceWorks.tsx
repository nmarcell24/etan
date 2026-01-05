"use client";

import { motion } from 'framer-motion';
import { Home, Building2, ArrowRight } from "lucide-react";
import Image from 'next/image';

const works = [
    {
        id: 1,
        title: "Családi ház energetikai tanúsítása",
        location: "Siofok",
        description: "Teljes körű energetikai felmérés és tanúsítvány készítése ingatlan adás-vételhez.",
        category: "Energetika",
        image: "/images/siofok.jpg"
    },
    {
        id: 2,
        title: "Idősek otthona",
        location: "Ibrány",
        description: "Energetikai korszerűsítési tanácsadás és számítási dokumentációk elkészítése",
        category: "Tanácsadás",
        image: "/images/ibrany.jpg"
    },
    {
        id: 3,
        title: "KEHOP pályázat",
        location: "Veresegyháza",
        description: "Teljes körű energetikai dokumentáció készítése KEHOP pályázathoz.",
        category: "Tervezés",
        image: "/images/veresegyhaz.jpg"
    },
];

export default function ReferenceWorks() {
    return (
        <section id="referenciak" className="py-24 px-4 bg-[#3A8B5B]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-white mb-4">Referencia munkák</h2>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Tekintse meg korábbi munkáinkat, melyekre büszkék vagyunk. Szakértelem és precizitás minden projektben.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#3A8B5B] group"
                        >
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Fallback pattern since we don't have real images yet */}
                                {/* <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 group-hover:scale-105 transition-transform duration-500">
                                    <Building2 size={64} className="opacity-20" />
                                </div> */}
                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-[#3A8B5B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {work.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-2 space-x-2">
                                    <Home size={14} className="text-[#3A8B5B]" />
                                    <span>{work.location}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3A8B5B] transition-colors">
                                    {work.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {work.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
