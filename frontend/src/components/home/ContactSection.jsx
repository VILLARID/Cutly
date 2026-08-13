import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Mail, MapPin, Navigation, Phone, Scissors } from "lucide-react";

import { InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";
import { useReveal } from "./motion";

import storefrontImage from "../../assets/contact/cutly-storefront.jpg";

const mapsUrl = "https://maps.google.com/?q=123+Grooming+St,+New+York,+NY+10001";

const contactInfo = [
    {
        label: "Location",
        icon: MapPin,
        lines: ["123 Grooming St.", "New York, NY 10001"],
        link: { label: "View on Google Maps", href: mapsUrl, external: true },
    },
    {
        label: "Call Us",
        icon: Phone,
        lines: ["(212) 555-0198"],
        href: "tel:+12125550198",
        socials: true,
    },
    {
        label: "Hours",
        icon: Clock,
        lines: ["Mon – Sun: 9AM – 8PM", "We're here every day."],
        link: { label: "View Hours", href: "#contact" },
    },
    {
        label: "Email Us",
        icon: Mail,
        lines: ["hello@cutly.studio"],
        href: "mailto:hello@cutly.studio",
        link: { label: "Send an Email", href: "mailto:hello@cutly.studio" },
    },
];

const socials = [
    { label: "Instagram", icon: InstagramIcon, href: "#" },
    { label: "Facebook", icon: FacebookIcon, href: "#" },
    { label: "TikTok", icon: TikTokIcon, href: "#" },
    { label: "YouTube", icon: YouTubeIcon, href: "#" },
];

function ContactSection() {
    const reveal = useReveal();

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#0E0E0D] py-12 md:py-16 lg:py-[84px]"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,165,46,0.035),transparent_50%)]"
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[48px]">
                    <motion.div {...reveal}>
                        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#DDA52A]">
                            <span className="inline-block h-px w-8 bg-[#DDA52A]/70" aria-hidden="true" />
                            Contact
                        </p>

                        <h2 className="mt-5 font-serif text-[38px] font-medium leading-[1.02] text-[#F4F0E8] sm:text-[46px] lg:text-[56px]">
                            Come for the cut,
                            <br />
                            <span className="text-[#DDA52A]">stay for the vibe.</span>
                        </h2>

                        <p className="mt-5 max-w-[500px] text-[17px] leading-relaxed text-white/60">
                            Open every day. Walk in or book ahead — the chair is waiting.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#booking"
                                className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-[7px] bg-[#DDA52A] px-6 text-sm font-semibold text-[#16130D] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#ECB03A]"
                            >
                                <Calendar className="size-4" aria-hidden="true" />
                                Book Appointment
                                <ArrowRight
                                    className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                                    aria-hidden="true"
                                />
                            </a>
                            <a
                                href={mapsUrl}
                                className="inline-flex h-[54px] items-center justify-center gap-2 rounded-[7px] border border-[#DDA52A]/70 px-6 text-sm font-semibold text-[#DDA52A] transition-all duration-200 hover:-translate-y-[1px] hover:border-[#DDA52A] hover:bg-[#DDA52A]/10"
                            >
                                <Navigation className="size-4" aria-hidden="true" />
                                Get Directions
                            </a>
                        </div>
                    </motion.div>

                    <motion.figure
                        {...reveal}
                        className="group relative overflow-hidden rounded-[12px] border border-[rgba(217,165,46,0.18)]"
                    >
                        <img
                            src={storefrontImage}
                            alt="Cutly barbershop entrance at night"
                            loading="lazy"
                            className="h-[420px] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.01] lg:h-[480px]"
                        />
                        <div
                            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,14,13,0.25),transparent_30%,transparent_60%,rgba(14,14,13,0.55)_100%)]"
                            aria-hidden="true"
                        />
                    </motion.figure>
                </div>

                <motion.div
                    {...reveal}
                    className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-[rgba(217,165,46,0.18)] bg-[rgba(217,165,46,0.12)] md:grid-cols-2 lg:mt-14 lg:grid-cols-4"
                >
                    {contactInfo.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.label} className="bg-[#151411] p-6 lg:p-7">
                                <div className="flex items-center gap-3">
                                    <span className="flex size-10 items-center justify-center rounded-[8px] border border-[rgba(217,165,46,0.2)] bg-[rgba(217,165,46,0.08)] text-[#DDA52A]">
                                        <Icon className="size-4.5" strokeWidth={1.8} aria-hidden="true" />
                                    </span>
                                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#F4F0E8]">
                                        {item.label}
                                    </h3>
                                </div>

                                <div className="mt-4 space-y-0.5 text-[15px] text-white/60">
                                    {item.lines.map((line, index) =>
                                        item.href && index === 0 ? (
                                            <a
                                                key={line}
                                                href={item.href}
                                                className="block w-fit transition-colors duration-200 hover:text-[#DDA52A]"
                                            >
                                                {line}
                                            </a>
                                        ) : (
                                            <p key={line}>{line}</p>
                                        )
                                    )}
                                </div>

                                {item.link ? (
                                    <a
                                        href={item.link.href}
                                        target={item.link.external ? "_blank" : undefined}
                                        rel={item.link.external ? "noopener noreferrer" : undefined}
                                        className="group mt-4 inline-flex items-center gap-1.5 border-b border-[#DDA52A]/30 pb-0.5 text-[13px] font-medium text-[#DDA52A] transition-colors duration-200 hover:border-[#DDA52A]"
                                    >
                                        {item.link.label}
                                        <ArrowRight
                                            className="size-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
                                            aria-hidden="true"
                                        />
                                    </a>
                                ) : null}

                                {item.socials ? (
                                    <div className="mt-5">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                                            Follow Us
                                        </p>
                                        <div className="mt-3 flex gap-2.5">
                                            {socials.map((social) => {
                                                const SocialIcon = social.icon;
                                                return (
                                                    <a
                                                        key={social.label}
                                                        href={social.href}
                                                        aria-label={social.label}
                                                        className="flex size-9 items-center justify-center rounded-[7px] border border-[rgba(217,165,46,0.3)] text-[#DDA52A] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#DDA52A] hover:bg-[#DDA52A] hover:text-[#16130D]"
                                                    >
                                                        <SocialIcon className="size-4" aria-hidden="true" />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div
                    {...reveal}
                    className="mt-10 grid overflow-hidden rounded-[12px] border border-[rgba(217,165,46,0.18)] bg-[#131210] lg:mt-12 lg:grid-cols-[1.05fr_1fr]"
                >
                    <div className="relative min-h-[150px] overflow-hidden bg-[#0B0B0A] lg:min-h-[150px]">
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(0deg, rgba(217,165,46,0.07) 0 1px, transparent 1px 46px), repeating-linear-gradient(90deg, rgba(217,165,46,0.07) 0 1px, transparent 1px 64px)",
                            }}
                            aria-hidden="true"
                        />
                        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                            <MapPin className="size-8 text-[#DDA52A]" aria-hidden="true" />
                            <span className="mt-1.5 h-px w-10 bg-[#DDA52A]/50" aria-hidden="true" />
                        </div>
                        <span className="absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                            Soho
                        </span>
                        <span className="absolute right-5 top-1/3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                            Bowery
                        </span>
                        <span className="absolute bottom-4 left-1/3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                            Little Italy
                        </span>
                    </div>

                    <div className="flex flex-col gap-5 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:gap-7 lg:justify-between">
                        <div className="flex items-center gap-4">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] border border-[rgba(217,165,46,0.3)] bg-[rgba(217,165,46,0.1)] text-[#DDA52A]">
                                <Scissors className="size-5" strokeWidth={1.8} aria-hidden="true" />
                            </span>
                            <div>
                                <h3 className="font-serif text-xl leading-tight text-[#F4F0E8] sm:text-2xl">
                                    Ready for your{" "}
                                    <span className="text-[#DDA52A]">next cut?</span>
                                </h3>
                                <p className="mt-1 text-sm text-white/60">
                                    Book your appointment in seconds and skip the wait.
                                </p>
                            </div>
                        </div>

                        <a
                            href="#booking"
                            className="group inline-flex h-[48px] shrink-0 items-center justify-center gap-2 rounded-[7px] bg-[#DDA52A] px-6 text-sm font-semibold text-[#16130D] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#ECB03A]"
                        >
                            Book Now
                            <ArrowRight
                                className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;
