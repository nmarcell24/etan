'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Mi az az energetikai tanúsítvány, és mire van szükségem rá?',
    answer:
      'Az energetikai tanúsítvány egy hivatalos dokumentum, amely megmutatja egy ingatlan energiahatékonyságát. Eladás vagy bérbeadás esetén kötelező, és segít a vevőknek/bérlőknek az energiafogyasztás becslésében.',
  },
  {
    question: 'Mikor kötelező elkészíttetni az energetikai tanúsítványt?',
    answer:
      'Lakó- és nem lakóingatlan eladása vagy 1 évnél hosszabb bérbeadása esetén kötelező. Új építésű ingatlanok esetén is szükséges a használatbavételi engedélyhez.',
  },
  {
    question: 'Meddig érvényes az energetikai tanúsítvány?',
    answer:
      'A tanúsítvány 10 évig érvényes, kivéve, ha időközben jelentős energetikai korszerűsítés történik az épületen.',
  },
  {
    question: 'Mennyi idő alatt készül el a tanúsítvány?',
    answer:
      'A legtöbb esetben 1–3 munkanapon belül elkészül, sürgős esetben akár 24 órán belül is vállaljuk.',
  },
  {
    question: 'Hogyan zajlik az energetikai tanúsítvány elkészítése?',
    answer:
      'A folyamat egyszerű: időpont-egyeztetés után a helyszínen felmérem az ingatlant (fűtés, nyílászárók, falazat stb.). Ezután elkészítem a tanúsítványt, amit digitálisan és/vagy nyomtatva is megkapsz. Az egész folyamat gyors és zökkenőmentes.',
  },
];

export default function FAQ() {
  return (
    <div
      id="gyakoriKerdesek"
      className="relative min-h-screen flex items-center justify-center bg-black/80 text-white overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* FAQ Content */}
      <motion.div
        className="relative z-20 max-w-4xl w-full px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-fugaz-one text-white mb-8 text-center xl:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Gyakran Ismételt Kérdések
        </motion.h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-lg xl:text-xl text-white hover:text-green-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 text-base xl:text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
