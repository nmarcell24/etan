
// Components
import Navbar from "./components/Navbar";
import Advantages from "./components/Advantages";
import PriceCalculator from "./components/PriceCalculator";
import Faq from "./components/FAQ";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import HeroWithVideo from "./components/HeroWithVideo";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithVideo />
      <Advantages />
      <Video />
      <PriceCalculator />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
