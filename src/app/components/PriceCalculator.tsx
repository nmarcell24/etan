"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    squareM: "100m",
    price: 30000,
  },
  {
    squareM: "200m",
    price: 35000,
  },
  {
    squareM: "300m",
    price: 37000,
  },
];

export default function PriceCalculator() {
  const [selected, setSelected] = useState(0);

  const selectedPlan = plans[selected];
  const annualPrice = selectedPlan.price * 12;

  return (
    <main id="arkalkulator" className="min-h-[60vh] p-5 flex flex-col items-center justify-center bg-[#3A8B5B] text-white">
      <h1 className="text-4xl font-bold text-center">
        Számítsd ki a díjat a házad mérete alapján!
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center w-full lg:max-w-2/3 md:h-36 border rounded-xl p-6 mt-6 mb-3 gap-6 bg-white shadow-md mx-auto">
        <div className="flex flex-col md:flex-row gap-4 w-full h-full md:w-2/3">
          {plans.map((plan, index) => (
            <button
              key={plan.squareM}
              onClick={() => setSelected(index)}
              className={`flex-1 border rounded-md p-4 text-left hover:outline-[#14763b] hover:outline-2 ${
                selected === index
                  ? "border-[#14763b] bg-[#14763b15]"
                  : "border-gray-300"
              }`}
            >
              <p className="font-semibold text-[#14763b] text-center">{plan.squareM}<sup>2</sup> ig</p>
            </button>
          ))}
        </div>
        <div className="w-full md:w-1/3 text-center md:pl-6 md:border-l md:border-t-0 border-t pt-4 md:pt-0">
          <p className="text-3xl font-bold text-gray-800">
            {plans[selected].price} Ft
          </p>
          <p className="text-sm text-gray-500">
            <span className="line-through">{annualPrice} Ft</span>{" "}
          </p>
        </div>
      </div>
    <p className="text-gray-200 text-center lg:text-lg">*300m<sup>2</sup> felett egyedi árazásért <Link href="#kapcsolat" className="underline">itt</Link> tudsz ajánlatot kérni</p>
    </main>
  );
}
