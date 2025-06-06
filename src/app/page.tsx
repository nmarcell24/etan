import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import PriceCalculator from "./components/PriceCalculator";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <PriceCalculator />
      <FAQ />
    </>
  );
}
