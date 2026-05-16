import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import black_logo from "../../assets/Home/black_logo.png";
import white_logo from "../../assets/Home/white_logo.png";

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
            <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4">

                <div className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-xl text-black border border-black/5"
                    : "bg-transparent text-white"
                }`}>

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3">

                        <img
                            src={scrolled ? black_logo : white_logo}
                            alt="Cutly Logo"
                            className={`object-contain transition-all duration-500 ${scrolled ? "size-9" : "size-10"}`}
                        />

                        <div>

                            <h1 className="text-2xl font-bold tracking-wide">
                                Cutly
                            </h1>

                            <p className={`text-xs transition ${scrolled ? "text-gray-500" : "text-gray-300"}`}>
                                Premium Barber
                            </p>

                        </div>

                    </a>

                    {/* Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`p-2 rounded-xl transition ${scrolled
                            ? "hover:bg-black/5"
                            : "hover:bg-white/10"
                        }`}
                    >

                        {menuOpen
                            ? <X size={28}/>
                            : <Menu size={28}/>
                        }

                    </button>

                </div>

            </nav>

            {/* Mobile menu */}
            <div className={`fixed top-24 left-4 right-4 z-40 rounded-3xl overflow-hidden transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-xl text-black shadow-xl"
                : "bg-[#101522]/90 backdrop-blur-xl text-white"
            } ${menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-6 pointer-events-none"
            }`}>

                <div className="flex flex-col p-6 gap-5">

                    {links.map((link) => (

                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg hover:text-[#fe9a00] transition"
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