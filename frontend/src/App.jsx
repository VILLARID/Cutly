import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import GetInTouch from "./pages/GetInTouch";
import Footer from "./pages/Footer";
import StatsBar from "./components/StatsBar";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <StatsBar />
      <AboutUs />
      <Services />
      <Gallery />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;