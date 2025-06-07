import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-start justify-center px-15 text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-80 z-0"
      >
        <source src="/videos/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-stroke md:text-5xl lg:text-5xl lg:max-w-2xl xl:text-7xl">
          Gazdálkodj okosan az energiáddal!
        </h1>
        <p className="text-lg mt-6 mb-3 max-w-2xs md:max-w-md text-gray-200 text-shadow-lg/10 md:text-xl lg:mt-10 lg:mb-8 xl:text-2xl">
          Fedezd fel, hogyan csökkentheted az energiafogyasztásodat és spórolhatsz
          a villanyszámlán.
        </p>
        <section className="flex items-center gap-2">
          <Button variant="outline">Tudj meg többet</Button>
          <Button>Kalkulátor</Button>
        </section>
      </div>
    </div>
  );
}
