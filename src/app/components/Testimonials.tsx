import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kovács Anna",
    title: "Ügyvezető, Energiaszolgáltató Kft.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Németh Péter",
    title: "Mérnök, Zöld Energia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Szabó László",
    title: "Tulajdonos, EcoHome",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

export default function Testimonials() {
  return (
    <section id="velemenyek" className="py-30 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl text-green-600 font-semibold mb-2">
        Ügyfél vélemények
      </h2>
      <p className="text-gray-600 mb-10">
        Az ügyfeleink elégedettsége a legfontosabb számunkra.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 text-left shadow-sm"
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
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
