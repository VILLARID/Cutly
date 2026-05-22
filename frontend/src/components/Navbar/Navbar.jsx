import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

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
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4">

                <div
                    className={`
                        flex items-center justify-between px-6 py-4 rounded-2xl
                        transition-all duration-500 border
                        ${scrolled
                            ? "bg-white/80 backdrop-blur-xl shadow-lg border-slate-200"
                            : "bg-transparent border-transparent"
                        }
                    `}
                >

                    {/* LOGO */}
                    <a href="#home" className="flex items-center gap-3 group">

                        <img
                            src={scrolled ? black_logo : white_logo}
                            alt="Cutly Logo"
                            className="size-9 transition-all duration-500 group-hover:scale-105"
                        />

                        <div className="leading-tight">
                            <h1 className={`text-xl font-semibold tracking-wide transition ${scrolled ? "text-slate-900" : "text-white"}`}>
                                Cutly
                            </h1>

                            <p className={`text-xs flex items-center gap-1 transition ${scrolled ? "text-slate-500" : "text-white/70"}`}>
                                <Sparkles size={12} />
                                Premium Barber Studio
                            </p>
                        </div>

                    </a>

                    {/* MENU BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`
        p-2 rounded-xl transition
        ${scrolled
                                ? "text-slate-900 hover:bg-slate-100"
                                : "text-white hover:bg-white/10"
                            }
    `}
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>

                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`
                    fixed inset-0 z-40 transition-all duration-500
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            >
                {/* blur background */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                />

                {/* panel */}
                <div
                    className={`
                        absolute top-24 left-4 right-4 rounded-3xl
                        bg-white shadow-2xl border border-slate-200
                        transition-all duration-500 p-6
                        ${menuOpen ? "translate-y-0" : "-translate-y-6"}
                    `}
                >

                    <div className="flex flex-col gap-4">

                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="
                                    text-lg text-slate-700
                                    hover:text-[#fe9a00]
                                    transition
                                    py-2
                                "
                            >
                                {link.name}
                            </a>
                        ))}

                    </div>

                    {/* CTA inside menu */}
                    <div className="mt-6 pt-4 border-t border-slate-100">
                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="block text-center bg-[#fe9a00] text-white py-3 rounded-xl font-medium hover:shadow-lg transition"
                        >
                            Book Appointment
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;