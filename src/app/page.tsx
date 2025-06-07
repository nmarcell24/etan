
// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import PriceCalculator from "./components/PriceCalculator";
import Faq from "./components/Faq";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

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
