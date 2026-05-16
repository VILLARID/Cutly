import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`
                flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${scrolled ? "bg-white text-black shadow-lg" : "text-white bg-transparent"}
            `}
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img
                    src={logo}
                    alt="Cutly Logo"
                    className={`h-10 w-10 object-contain rounded-full transition ${scrolled ? "bg-orange-300/20" : "bg-orange-300/20"
                        }`}
                />
                <h1 className="text-xl tracking-wide">Cutly</h1>
            </div>

            <button>
                <Menu size={26} />
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex gap-6 text-sm">
                <a href="#home" className="hover:opacity-70 transition">Home</a>
                <a href="#about" className="hover:opacity-70 transition">About</a>
                <a href="#services" className="hover:opacity-70 transition">Services</a>
                <a href="#contact" className="hover:opacity-70 transition">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;