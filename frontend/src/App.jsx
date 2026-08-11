import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

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
    </>
  );
}

export default App;