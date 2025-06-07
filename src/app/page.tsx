import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import PriceCalculator from "./components/PriceCalculator";
import FAQ from "./components/FAQ";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Video />
      <PriceCalculator />
      <FAQ />
    </>
  );
}
