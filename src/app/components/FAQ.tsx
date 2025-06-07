// components/HempFaq.tsx
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Who can I refer?",
    answer: "You can refer anyone interested in hemp products or partnerships.",
  },
  {
    question: "How much commission can I earn?",
    answer: "Your commission depends on the volume of referrals and sales.",
  },
  {
    question: "What happens if my referral downgrades?",
    answer: "You’ll receive commission based on their current plan level.",
  },
  {
    question: "Is there a limit on the commission I can earn?",
    answer: "There is no upper limit; earnings scale with your referrals.",
  },
  {
    question: "How do I track my earnings?",
    answer: "Use the dashboard to monitor all earnings and referrals.",
  },
];

export default function FAQ() {
  return (
    <div id="gyakoriKerdesek" className="relative min-h-screen flex items-center justify-center bg-black/80 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/green-house.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* FAQ Content */}
      <div className="relative z-20 max-w-4xl w-full px-6 py-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((item, idx) => (
            <AccordionItem value={`item-${idx}`} key={idx}>
              <AccordionTrigger className="text-left text-lg text-white hover:text-green-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
