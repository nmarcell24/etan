'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="kapcsolat" className="bg-green-50 py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase text-sm font-medium">Kapcsolat</p>
          <h2 className="text-4xl font-semibold mt-2 mb-2">
            Lépj kapcsolatba velem
          </h2>
          <p className="text-gray-700">
            Kérdéseid vannak? Ne habozz, vedd fel velünk a kapcsolatot még ma!
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {[
            {
              icon: Mail,
              title: 'Email',
              text: 'Kérdésed van? Írj nekem bátran, melyre rövid időn belül válaszolok.',
              link: 'mailto:antoniuszx@gmail.com',
              linkText: 'antoniuszx@gmail.com',
            },
            {
              icon: Phone,
              title: 'Telefon',
              text: 'Elérhető vagyok munkanapokon 8:00–17:00 között. Hívj bizalommal, ha kérdésed van a tanúsítvánnyal kapcsolatban!',
              link: 'tel:+36702697555',
              linkText: '+36 70 269 7555',
            },
            {
              icon: MapPin,
              title: 'Iroda',
              text: 'Személyes ügyintézéshez előzetes időpont-egyeztetés szükséges.',
              link: 'https://maps.google.com?q=23 Korong utca, Nyíregyháza 4405',
              linkText: '4405 Nyíregyháza, Korong utca 23.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <item.icon className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-2">{item.text}</p>
              <a
                href={item.link}
                target={item.title === 'Iroda' ? '_blank' : undefined}
                rel={item.title === 'Iroda' ? 'noopener noreferrer' : undefined}
                className="underline text-sm text-black font-medium"
              >
                {item.linkText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
