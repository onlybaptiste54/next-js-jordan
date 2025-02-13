import AnimatedBorder from "./pages/AnimatedBorder";
import CarrousselTest from "./pages/Carroussel";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import HomeSection from "./pages/HomeSection";
import ObjetsLocations from "./pages/ObjetsLocations";


export default function HomePage() {
  return (
    <>
      <Header />
      <HomeSection />

      <Events/>
      <AnimatedBorder/>
      <ObjetsLocations/>
      <AnimatedBorder/>
      <CarrousselTest/>
      <AnimatedBorder/>


      <Contact/>
      <AnimatedBorder/>

      <Footer/>
      
    </>
  );
}
