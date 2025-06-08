"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const plans = [
  { squareM: "100m", price: 30000 },
  { squareM: "200m", price: 35000 },
  { squareM: "300m", price: 37000 },
];

export default function PriceCalculator() {
  const [selected, setSelected] = useState(0);
  const priceSpring = useSpring(plans[selected].price, {
    stiffness: 150,
    damping: 30,
  });

  useEffect(() => {
    priceSpring.set(plans[selected].price);
  }, [selected, priceSpring]);

  const animatedPrice = useTransform(priceSpring, (val) =>
    Math.round(val).toLocaleString("hu-HU")
  );

  const annualPrice = plans[selected].price * 1.2;

  return (
    <main
      id="arkalkulator"
      className="min-h-[60vh] p-5 flex flex-col items-center justify-center bg-[#3A8B5B] text-white"
    >
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Számítsd ki a díjat a házad mérete alapján!
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-center w-full lg:max-w-2/3 md:h-36 border rounded-xl p-6 mt-6 mb-3 gap-6 bg-white shadow-md mx-auto">
        <div className="flex flex-col md:flex-row gap-4 w-full h-full md:w-2/3">
          {plans.map((plan, index) => (
            <motion.button
              key={plan.squareM}
              onClick={() => setSelected(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              layout
              className={`flex-1 border rounded-md p-4 text-left transition-colors duration-300 cursor-pointer ${
                selected === index
                  ? "border-[#14763b] bg-[#14763b15] shadow-md"
                  : "border-gray-300 bg-white"
              }`}
            >
              <p className="font-semibold text-[#14763b] text-center">
                {plan.squareM}
                <sup>2</sup> ig
              </p>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="w-full md:w-1/3 text-center md:pl-6 md:border-l md:border-t-0 border-t pt-4 md:pt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-3xl font-bold text-gray-800">
            <motion.span layout>{animatedPrice}</motion.span> Ft
          </p>
          <p className="text-sm text-gray-500 line-through">
            {annualPrice.toLocaleString("hu-HU")} Ft
          </p>
        </motion.div>
      </div>

      <p className="text-gray-200 text-center lg:text-lg">
        *300m<sup>2</sup> felett egyedi árazásért{" "}
        <Link href="#kapcsolat" className="underline">
          itt
        </Link>{" "}
        tudsz ajánlatot kérni
      </p>
    </main>
  );
}
