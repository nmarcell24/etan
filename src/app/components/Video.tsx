import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export default function SustainabilitySection() {
  return (
    <section id='tajekoztato' className="relative w-full py-16 px-6 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/1.jpg"
          alt="hero background"
          fill
          className="object-cover brightness-40"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Column */}
        <div className="md:w-1/2">
          <p className="uppercase text-sm tracking-wide mb-2">Betekintés a munkámba</p>
          <h2 className="text-3xl font-bold leading-snug mb-4">
            Tekints be a <br /> fenntarthatóság világába
          </h2>
          <p className="text-lg">
            Fedezd fel hogyan hozhatod ki a legtöbbet a fenntartható energiaforrásokból és
            hogyan járulhatsz hozzá a környezetvédelemhez. Nézd meg videómat, ahol bemutatom mit és miért csiálok.
          </p>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/video_placeholderjpg.jpg"
            alt="video placeholder"
            width={600}
            height={400}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <PlayCircle className="text-white w-16 h-16" />
          </div>
        </div>
      </div>
    </section>
  );
}
