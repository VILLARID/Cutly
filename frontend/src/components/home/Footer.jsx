import { useState } from "react";
import { ArrowRight } from "lucide-react";

import whiteLogo from "../../assets/Home/white_logo.png";
import { InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Barbers", href: "#barbers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
];

const serviceLinks = [
    { label: "Classic Haircut", href: "#services" },
    { label: "Skin Fade", href: "#services" },
    { label: "Haircut + Beard", href: "#services" },
    { label: "Beard Sculpting", href: "#services" },
    { label: "Hot Towel Shave", href: "#services" },
    { label: "Premium Grooming", href: "#services" },
];

const socials = [
    { label: "Instagram", icon: InstagramIcon, href: "#" },
    { label: "Facebook", icon: FacebookIcon, href: "#" },
    { label: "TikTok", icon: TikTokIcon, href: "#" },
    { label: "YouTube", icon: YouTubeIcon, href: "#" },
];

function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <footer className="border-t border-[rgba(217,165,46,0.18)] bg-[#0D0D0C]">
            <div className="mx-auto w-full max-w-[1480px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20 2xl:px-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* BRAND */}
                    <div>
                        <a
                            href="#home"
                            className="inline-flex items-center gap-3"
                            aria-label="Cutly - back to top"
                        >
                            <img
                                src={whiteLogo}
                                alt="Cutly Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </a>

                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
                            More than a cut. It&rsquo;s your image.
                            <br />
                            Premium grooming for the modern man.
                        </p>

                        <div className="mt-6 flex gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="flex size-9 items-center justify-center rounded-[7px] border border-white/[0.08] text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D9A52E]/50 hover:text-[#E2AD36]"
                                    >
                                        <Icon className="size-4" aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <nav aria-label="Footer quick links">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F3EFE7]">
                            Quick Links
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/60 transition-colors duration-200 hover:text-[#E2AD36]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* SERVICES */}
                    <nav aria-label="Footer services">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F3EFE7]">
                            Services
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/60 transition-colors duration-200 hover:text-[#E2AD36]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* NEWSLETTER */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#F3EFE7]">
                            Newsletter
                        </h3>
                        <p className="mt-5 text-sm text-white/60">
                            Join for grooming tips &amp; exclusive offers.
                        </p>

                        {subscribed ? (
                            <p className="mt-4 flex items-center gap-2 rounded-[8px] border border-[rgba(217,165,46,0.35)] bg-[#D9A52E]/10 px-4 py-3 text-sm text-[#E2AD36]">
                                Thanks for subscribing!
                            </p>
                        ) : (
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="footer-email" className="sr-only">
                                    Email address
                                </label>
                                <div className="flex overflow-hidden rounded-[8px] border border-white/[0.08] bg-[#131210] focus-within:border-[rgba(217,165,46,0.5)]">
                                    <input
                                        id="footer-email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        placeholder="Your email"
                                        className="w-full bg-transparent px-4 py-3 text-sm text-[#F3EFE7] placeholder:text-white/35 focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        aria-label="Subscribe to newsletter"
                                        className="flex shrink-0 items-center gap-1.5 bg-[#D9A52E] px-4 text-sm font-semibold text-[#161310] transition-colors duration-200 hover:bg-[#E2AD36]"
                                    >
                                        Join
                                        <ArrowRight className="size-4" aria-hidden="true" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-white/45">
                        © 2026 Cutly Premium Barber Studio. All rights reserved.
                    </p>
                    <p className="text-sm text-white/45">
                        Designed with precision. Made for you.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;