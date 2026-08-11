import { useEffect, useState } from "react";
import { ArrowUpRight, Calendar, Menu, X } from "lucide-react";

import black_logo from "../../assets/Navbar/Navbar.png";

const navLinks = [
    { label: "Home", href: "#home", section: "home" },
    { label: "Services", href: "#services", section: "services" },
    { label: "Barbers", href: "#barbers", section: "barbers" },
    { label: "Gallery", href: "#gallery", section: "gallery" },
    { label: "Reviews", href: "#reviews", section: "reviews" },
    { label: "Contact", href: "#contact", section: "contact" },
];

const sectionIds = navLinks.map((link) => link.section);

const focusRing =
    "focus-visible:outline-2 focus-visible:outline-[rgba(227,163,33,0.8)] focus-visible:outline-offset-4";

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
                fixed top-0 left-0 right-0 z-[1000]
                transition-[background-color,box-shadow] duration-300
                ${
                    isScrolled
                        ? "bg-[rgba(18,17,15,0.94)] shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-[14px]"
                        : "bg-[#141310]"
                }
            `}
        >
            {/* barely perceptible horizontal gradient sheet */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#141310_0%,#11100E_50%,#141310_100%)] opacity-50"
            />

            {/* decorative hairline under the navbar */}
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-300 ${
                    isScrolled
                        ? "bg-[linear-gradient(90deg,transparent,rgba(205,153,45,0.22)_50%,transparent)]"
                        : "bg-[linear-gradient(90deg,transparent,rgba(205,153,45,0.16)_50%,transparent)]"
                }`}
            />

            <div className="mx-auto flex h-[72px] w-full max-w-[1500px] items-center justify-between px-4 min-[1001px]:grid min-[1001px]:h-[84px] min-[1001px]:grid-cols-[1fr_auto_1fr] min-[1001px]:justify-normal min-[1001px]:px-6 min-[1440px]:px-8 min-[1600px]:px-9">
                {/* LOGO */}
                <a
                    href="#home"
                    onClick={() => handleNavClick("home")}
                    aria-label="Cutly - back to top"
                    className={`flex items-center justify-self-start rounded-md transition-opacity duration-200 hover:opacity-90 ${focusRing}`}
                >
                    <img
                        src={black_logo}
                        alt="Cutly Premium Barber Studio"
                        className="h-[60px] w-auto object-contain [filter:drop-shadow(0_2px_8px_rgba(205,153,45,0.08))] min-[1001px]:h-[75px]"
                    />
                </a>

                {/* DESKTOP LINKS */}
                <div className="hidden items-center gap-6 justify-self-center min-[1001px]:flex min-[1200px]:gap-8 min-[1440px]:gap-[42px]">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.section;
                        return (
                            <a
                                key={link.section}
                                href={link.href}
                                onClick={() => handleNavClick(link.section)}
                                aria-current={isActive ? "true" : undefined}
                                className={`
                                    group relative px-0.5 py-1 text-[15px] font-medium tracking-[0.015em]
                                    transition-colors duration-200 ${focusRing}
                                    ${
                                        isActive
                                            ? "text-[#E8AD2F]"
                                            : "text-white/[0.68] hover:text-white/95"
                                    }
                                `}
                            >
                                {link.label}
                                {/* active underline */}
                                <span
                                    aria-hidden="true"
                                    className={`
                                        absolute -bottom-[11px] left-1/2 h-[2px] w-[22px] -translate-x-1/2 rounded-full bg-[#E2A52B]
                                        shadow-[0_0_8px_rgba(226,165,43,0.18)]
                                        transition-all duration-200
                                        ${
                                            isActive
                                                ? "scale-x-100 opacity-100"
                                                : "scale-x-0 opacity-0"
                                        }
                                    `}
                                />
                                {/* hover mini-line (never competes with active) */}
                                <span
                                    aria-hidden="true"
                                    className={`
                                        absolute -bottom-[11px] left-1/2 h-[2px] w-[12px] -translate-x-1/2 rounded-full bg-[#E2A52B]/45
                                        transition-all duration-200
                                        ${
                                            isActive
                                                ? "scale-x-0 opacity-0"
                                                : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
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
                    className={`
                        hidden h-12 items-center justify-center gap-2 self-center justify-self-end
                        rounded-lg border border-white/[0.06] bg-[#E3A321] px-5 text-[15px] font-semibold text-[#16130D]
                        transition-all duration-200 hover:-translate-y-px hover:bg-[#ECB03A]
                        hover:shadow-[0_8px_24px_rgba(227,163,33,0.16)] active:translate-y-0
                        min-[1001px]:inline-flex ${focusRing}
                    `}
                >
                    <Calendar className="size-[18px] shrink-0" aria-hidden="true" />
                    Book Appointment
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </a>

                {/* HAMBURGER */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[#F5F3EE] transition-colors duration-200 hover:text-[#E8AD2F] min-[1001px]:hidden ${focusRing}`}
                >
                    {isMenuOpen ? (
                        <X className="size-6" aria-hidden="true" />
                    ) : (
                        <Menu className="size-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                id="mobile-menu"
                inert={!isMenuOpen}
                aria-hidden={!isMenuOpen}
                className={`
                    absolute top-full left-0 w-full border-t border-[rgba(205,153,45,0.12)] border-b border-[rgba(205,153,45,0.16)]
                    bg-[#141310] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.6)]
                    transition-all duration-[220ms] ease-out min-[1001px]:hidden
                    ${
                        isMenuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-2 opacity-0 pointer-events-none"
                    }
                `}
            >
                <div className="p-5">
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.section}
                                href={link.href}
                                onClick={() => handleNavClick(link.section)}
                                aria-current={
                                    activeSection === link.section ? "true" : undefined
                                }
                                className={`border-b border-white/5 py-3.5 text-[17px] font-medium transition-colors duration-200 ${focusRing} ${
                                    activeSection === link.section
                                        ? "text-[#E8AD2F]"
                                        : "text-white/75 hover:text-white/95"
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a
                        href="#contact"
                        onClick={() => handleNavClick("contact")}
                        className={`mt-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-lg border border-white/[0.06] bg-[#E3A321] text-[15px] font-semibold text-[#16130D] transition-colors duration-200 hover:bg-[#ECB03A] ${focusRing}`}
                    >
                        <Calendar className="size-[18px]" aria-hidden="true" />
                        Book Appointment
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;