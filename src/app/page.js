import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import HeroCard1 from "./components/Hero/HeroCard1";
import HeroCard3 from "./components/Hero/HeroCard3";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
  
    <Navbar/>
    <Hero/>
    <Process/>
    <Testimonial/>
    </>
  );
}
