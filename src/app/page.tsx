
// Components
import Navbar from "./components/Navbar";
import Advantages from "./components/Advantages";
import Faq from "./components/FAQ";
import Video from "./components/Video";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import HeroWithVideo from "./components/HeroWithVideo";
import Services from "./components/Services";
import ReferenceWorks from "./components/ReferenceWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroWithVideo />
      <Advantages />
      <Video />
      <Services />
      <ReferenceWorks />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
