'use client';

import { CircleUserRound, Star, User } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Anna',
    text: 'Nagyon gyorsan kaptam meg az energetikai tanúsítványt, ami nagy segítség volt az ingatlaneladás során. A cég minden kérdésemre türelmesen válaszolt, és minden lépést érthetően elmagyaráztak. Teljesen meg vagyok elégedve a szolgáltatással!',
  },
  {
    name: 'Péter',
    text: 'Korrekt árakon, profi módon dolgozik. Az ügyintézés gördülékeny volt, a felmérés pontos, és a tanúsítvány is időben elkészült. Külön örültem annak, hogy valódi szakemberrel volt dolgom – látszott, hogy ért hozzá',
  },
  {
    name: 'László',
    text: 'Ajánlás alapján kerestem meg őt, és nem csalódtam. Pontos, megbízható, és rendkívül segítőkészek volt. Minden határidőt betartott, és még hasznos tanácsokat is kaptam a jövőbeni energiahatékonysági fejlesztésekhez.',
  },
];

export default function Testimonials() {
  return (
    <section id="velemenyek" className="py-30 px-6 bg-white text-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl md:text-4xl text-green-600 font-semibold mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Ügyfél vélemények
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-10 font-fugaz-one"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Az ügyfeleink elégedettsége a legfontosabb számunkra.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-xl p-6 text-left shadow-sm flex flex-col justify-between transition-transform duration-300 hover:shadow-md hover:scale-[1.02]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Stars */}
            <div className="flex gap-1 text-green-600 mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-600" />
                ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-gray-800 mb-6">&quot;{testimonial.text}&quot;</p>

            {/* Name and title */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <CircleUserRound className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
