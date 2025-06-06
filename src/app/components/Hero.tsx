import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-hero flex flex-col items-center justify-center px-4 text-white">
      <h1 className="text-4xl font-bold text-center text-stroke md:text-5xl lg:text-7xl lg:max-w-2xl">
        Gazdálkodj okosan az energiáddal!
      </h1>
      <p className="text-lg mt-6 mb-3 text-center max-w-2xs md:max-w-md text-gray-800 text-shadow-lg/10 md:text-xl lg:mt-10 lg:mb-8">
        Fedezd fel, hogyan csökkentheted az energiafogyasztásodat és spórolhatsz
        a villanyszámlán.
      </p>
      <section className="flex items-center gap-2">
        <Button variant="outline">Tudj meg többet</Button>
        <Button>Kalkulátor</Button>
      </section>
    </div>
  );
}
