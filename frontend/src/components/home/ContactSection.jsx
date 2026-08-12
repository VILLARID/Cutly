import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import SectionHeader from "./SectionHeader";
import { InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";
import { useReveal } from "./motion";

const contactItems = [
    {
        title: "Location",
        icon: MapPin,
        lines: ["123 Grooming St.", "New York, NY 10001"],
    },
    {
        title: "Call Us",
        icon: Phone,
        lines: ["(212) 555-0198"],
        href: "tel:+12125550198",
    },
    {
        title: "Hours",
        icon: Clock,
        lines: ["Mon – Sun: 9AM – 8PM", "We're here every day."],
    },
    {
        title: "Email Us",
        icon: Mail,
        lines: ["hello@cutly.studio"],
        href: "mailto:hello@cutly.studio",
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
        <section id="contact" className="overflow-hidden bg-[#131210] py-16 lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <SectionHeader
                    eyebrow="Contact"
                    title={
                        <>
                            Come for the cut,
                            <span className="text-[#E2AD36]"> stay for the vibe.</span>
                        </>
                    }
                    description="Open every day. Walk in or book ahead — the chair is waiting."
                />

                <motion.div
                    {...reveal}
                    className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-[rgba(217,165,46,0.18)] bg-[rgba(217,165,46,0.12)] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
                >
                    {contactItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="bg-[#151411] p-6 lg:p-7">
                                <span className="flex size-11 items-center justify-center rounded-[8px] border border-[rgba(217,165,46,0.18)] bg-[#D9A52E]/10 text-[#D9A52E]">
                                    <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                                </span>
                                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#F3EFE7]">
                                    {item.title}
                                </h3>
                                <div className="mt-2 space-y-0.5 text-[15px] text-white/60">
                                    {item.lines.map((line, index) =>
                                        item.href && index === 0 ? (
                                            <a
                                                key={line}
                                                href={item.href}
                                                className="block w-fit transition-colors duration-200 hover:text-[#E2AD36]"
                                            >
                                                {line}
                                            </a>
                                        ) : (
                                            <p key={line}>{line}</p>
                                        )
                                    )}
                                </div>
                                {item.title === "Call Us" ? (
                                    <div className="mt-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                                            Follow Us
                                        </p>
                                        <div className="mt-3 flex gap-2.5">
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
                                ) : null}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;