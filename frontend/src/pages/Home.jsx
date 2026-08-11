import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import ExperienceSection from "../components/home/ExperienceSection";
import BarbersPreview from "../components/home/BarbersPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import Testimonials from "../components/home/Testimonials";
import BookingCTA from "../components/home/BookingCTA";
import LocationSection from "../components/home/LocationSection";
import Footer from "../components/home/Footer";

function Home() {
    return (
        <>
            <main>
                <Hero />
                <ServicesPreview />
                <ExperienceSection />
                <BarbersPreview />
                <GalleryPreview />
                <Testimonials />
                <BookingCTA />
                <LocationSection />
            </main>
            <Footer />
        </>
    );
}

export default Home;