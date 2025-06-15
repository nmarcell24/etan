import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function _not_found() {
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
        className="z-0 blur-sm"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 max-w-4xl w-full text-center px-6 py-12">
        <h2 className="text-3xl font-fugaz-one text-white mb-8 text-center xl:text-4xl">
          404 - Oldal nem található
        </h2>
        <Link href={"/"} className="bg-white text-black px-4 py-2 rounded">
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
}
