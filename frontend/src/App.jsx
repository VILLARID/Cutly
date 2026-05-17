import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Testimonials from "./pages/Testimonials"
import GetInTouch from "./pages/GetInTouch"
import Footer from "./pages/Footer"
import StatsBar from "./components/StatsBar";

function App() {

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
  )
}

export default App;