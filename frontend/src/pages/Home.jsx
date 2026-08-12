import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import ServicesSection from "../components/home/ServicesSection";
import WhyCutly from "../components/home/WhyCutly";
import BarbersSection from "../components/home/BarbersSection";
import GallerySection from "../components/home/GallerySection";
import Testimonials from "../components/home/Testimonials";
import BookingCTA from "../components/home/BookingCTA";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";

function Home() {
    return (
        <>
            <main>
                <Hero />
                <StatsBar />
                <ServicesSection />
                <WhyCutly />
                <BarbersSection />
                <GallerySection />
                <Testimonials />
                <BookingCTA />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}

export default Home;