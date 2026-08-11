import { useEffect, useState } from "react";
import { Calendar, Menu, X } from "lucide-react";

import black_logo from "../../assets/Home/black_logo.png";

const navLinks = [
    { label: "Home", href: "#home", section: "home" },
    { label: "Services", href: "#services", section: "services" },
    { label: "Barbers", href: "#about", section: "about" },
    { label: "Gallery", href: "#gallery", section: "gallery" },
    { label: "Reviews", href: "#testimonials", section: "testimonials" },
    { label: "Contact", href: "#contact", section: "contact" },
];

const sectionIds = navLinks.map((link) => link.section);

const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e69500]";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") setIsMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    const handleNavClick = (section) => {
        setIsMenuOpen(false);
        setActiveSection(section);
    };

    return (
        <nav
            aria-label="Main navigation"
            className={`
                fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300
                ${
                    isScrolled
                        ? "border-black/10 bg-[#FAF9F6]/90 shadow-[0_2px_24px_-8px_rgba(23,23,23,0.12)] backdrop-blur-md"
                        : "border-black/[0.06] bg-[#FAF9F6]"
                }
            `}
        >
            <div className="mx-auto flex h-[68px] w-full max-w-[1360px] items-center justify-between px-4 md:h-[76px] md:grid md:grid-cols-[1fr_auto_1fr] md:justify-normal md:px-6 lg:px-8">
                {/* LOGO */}
                <a
                    href="#home"
                    onClick={() => handleNavClick("home")}
                    className={`group inline-flex items-center gap-2.5 rounded-md justify-self-start ${focusRing}`}
                >
                    <img
                        src={black_logo}
                        alt="Cutly Logo"
                        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 md:h-10 md:w-10"
                    />
                    <span className="leading-tight">
                        <span className="block text-lg font-semibold tracking-wide text-[#171717] md:text-xl">
                            Cutly
                        </span>
                        <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                            Premium Barber Studio
                        </span>
                    </span>
                </a>

                {/* DESKTOP LINKS */}
                <div className="hidden items-center gap-7 md:flex lg:gap-6 xl:gap-9">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.section;
                        return (
                            <a
                                key={link.section}
                                href={link.href}
                                onClick={() => handleNavClick(link.section)}
                                aria-current={isActive ? "true" : undefined}
                                className={`
                                    group relative inline-block px-0.5 py-1 text-sm font-medium tracking-wide
                                    transition-colors duration-200 ${focusRing}
                                    ${
                                        isActive
                                            ? "text-[#171717]"
                                            : "text-neutral-600 hover:text-[#e69500]"
                                    }
                                `}
                            >
                                {link.label}
                                <span
                                    aria-hidden="true"
                                    className={`
                                        absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#e69500]
                                        transition-all duration-300
                                        ${
                                            isActive
                                                ? "w-5 opacity-100"
                                                : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-60"
                                        }
                                    `}
                                />
                            </a>
                        );
                    })}
                </div>

                {/* DESKTOP CTA */}
                <a
                    href="#contact"
                    onClick={() => handleNavClick("contact")}
                    className={`hidden items-center justify-center gap-2 self-center rounded-[10px] bg-[#fe9a00] px-5 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e58a00] hover:shadow-[0_8px_20px_-8px_rgba(254,154,0,0.55)] active:translate-y-0 md:inline-flex justify-self-end ${focusRing}`}
                >
                    <Calendar className="size-4" aria-hidden="true" />
                    Book Appointment
                </a>

                {/* HAMBURGER */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    className={`inline-flex items-center justify-center rounded-lg p-2 text-[#171717] transition-colors duration-200 hover:bg-black/5 md:hidden ${focusRing}`}
                >
                    {isMenuOpen ? (
                        <X className="size-6" aria-hidden="true" />
                    ) : (
                        <Menu className="size-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* MOBILE PANEL */}
            <div
                id="mobile-menu"
                className={`
                    overflow-hidden border-t border-black/5 bg-white shadow-[0_16px_30px_-12px_rgba(23,23,23,0.18)]
                    transition-all duration-300 ease-out md:hidden
                    ${
                        isMenuOpen
                            ? "max-h-[430px] translate-y-0 opacity-100"
                            : "max-h-0 translate-y-1 opacity-0"
                    }
                `}
            >
                <div className="px-4 py-5 sm:px-6">
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.section}
                                href={link.href}
                                onClick={() => handleNavClick(link.section)}
                                aria-current={
                                    activeSection === link.section ? "true" : undefined
                                }
                                className={`rounded-md px-1 py-2.5 text-left text-[15px] font-medium transition-colors duration-200 ${focusRing} ${
                                    activeSection === link.section
                                        ? "text-[#e69500]"
                                        : "text-neutral-700 hover:text-[#e69500]"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        onClick={() => handleNavClick("contact")}
                        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#fe9a00] px-5 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-[#e58a00] ${focusRing}`}
                    >
                        <Calendar className="size-4" aria-hidden="true" />
                        Book Appointment
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;