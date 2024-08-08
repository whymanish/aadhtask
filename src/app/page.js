import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Process from "./components/Process";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Brands from "./components/Brands";
import Hiring from "./components/Hiring/Hiring";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
  
    <Navbar/>
    <Hero/>
    <Process/>
    <Testimonial/>
    <Blog/>
    <Brands/>
    <Hiring/>
   <Footer/>
    </>
  );
}
