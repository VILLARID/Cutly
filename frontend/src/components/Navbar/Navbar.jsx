import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "Reviews", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>

                <div className={`flex items-center justify-between px-6 py-5 transition-all duration-300 ${scrolled ? "text-black" : "text-white"}`}>

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3">

                        <div className={`${scrolled ? "bg-orange-100" : "bg-white/10"} p-2 rounded-xl transition`}>
                            <img src={logo} alt="Cutly Logo" className="size-8 object-contain" />
                        </div>

                        <h1 className="text-2xl font-bold tracking-wide">
                            Cutly
                        </h1>

                    </a>

                    {/* Mobile button */}
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

            </nav>

            {/* Mobile menu */}
            <div className={`fixed top-21 left-4 right-4 z-40 rounded-2xl overflow-hidden transition-all duration-300 ${scrolled ? "bg-white shadow-xl text-black" : "bg-[#101522]/90 backdrop-blur-md text-white"} ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}>

                <div className="flex flex-col p-6 gap-6">

                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg hover:text-[#d58a3b] transition"
                        >
                            {link.name}
                        </a>
                    ))}

                </div>

            </div>
        </>
    );
}

export default Navbar;