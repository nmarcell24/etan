
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import PriceCalculator from "./components/PriceCalculator";
import Faq from "./components/FAQ";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Video />
      <PriceCalculator />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
