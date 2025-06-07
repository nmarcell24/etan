import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="kapcsolat" className="bg-green-50 py-20 px-6 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm font-medium">Kapcsolat</p>
          <h2 className="text-4xl font-semibold mt-2 mb-2">
            Lépj kapcsolatba velem
          </h2>
          <p className="text-gray-700">
            Kérdéseid vannak? Ne habozz, vedd fel velünk a kapcsolatot még ma!
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {/* Email */}
          <div>
            <Mail className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <a
              href="mailto:info@energiatanusito.hu"
              className="underline text-sm text-black font-medium"
            >
              info@energiatanusito.hu
            </a>
          </div>

          {/* Phone */}
          <div>
            <Phone className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <a
              href="tel:+3612345678"
              className="underline text-sm text-black font-medium"
            >
              +36 1 234 5678
            </a>
          </div>

          {/* Office */}
          <div>
            <MapPin className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Iroda</h3>
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
            <a
              href="https://maps.google.com?q=123 Példa utca, Budapest 1051"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm text-black font-medium"
            >
              123 Példa utca, Budapest 1051 HU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
