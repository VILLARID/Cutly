import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import mapImage from "../../assets/Map/map-placeholder.svg";
import { useRevealLeft, useRevealRight } from "./motion";

const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=123+Barber+Street,+New+York,+NY+10001";

const contactItems = [
    {
        title: "Visit us",
        icon: MapPin,
        lines: ["123 Barber Street", "New York, NY 10001"],
    },
    {
        title: "Hours",
        icon: Clock,
        lines: [
            "Mon–Fri: 9:00 AM – 8:00 PM",
            "Sat: 9:00 AM – 6:00 PM",
            "Sun: 10:00 AM – 6:00 PM",
        ],
    },
    {
        title: "Call us",
        icon: Phone,
        lines: ["(212) 555-0147"],
        href: "tel:+12125550147",
    },
    {
        title: "Email",
        icon: Mail,
        lines: ["hello@cutly.studio"],
        href: "mailto:hello@cutly.studio",
    },
];

function LocationSection() {
    const reveal = useRevealLeft();
    const revealRight = useRevealRight();

    return (
        <section id="contact" className="overflow-hidden bg-[#FAF9F6] py-16 lg:py-28">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
                    {/* CONTACT INFO */}
                    <motion.div {...reveal}>
                        <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C97B00]">
                            <span
                                className="inline-block h-px w-8 bg-[#C97B00]/60"
                                aria-hidden="true"
                            />
                            Visit Us
                        </p>

                        <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-[#171717] md:text-[44px] lg:text-[52px]">
                            We&rsquo;d love to
                            <span className="text-[#C97B00]"> see you.</span>
                        </h2>

                        <ul className="mt-10 space-y-7">
                            {contactItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.title} className="flex items-start gap-4">
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E39100]/10 text-[#C97B00]">
                                            <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                                        </span>

                                        <div>
                                            <h3 className="text-sm font-semibold text-[#171717]">
                                                {item.title}
                                            </h3>

                                            <div className="mt-1.5 space-y-0.5 text-[15px] text-neutral-600">
                                                {item.lines.map((line, index) =>
                                                    item.href && index === 0 ? (
                                                        <a
                                                            key={line}
                                                            href={item.href}
                                                            className="block w-fit transition-colors duration-200 hover:text-[#C97B00]"
                                                        >
                                                            {line}
                                                        </a>
                                                    ) : (
                                                        <p key={line}>{line}</p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* MAP PLACEHOLDER */}
                    <motion.div {...revealRight} className="relative self-start">
                        <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-[#F5F2EC] shadow-[0_28px_60px_-36px_rgba(23,23,23,0.35)]">
                            <img
                                src={mapImage}
                                alt="Map showing the location of Cutly Premium Barber Studio at 123 Barber Street"
                                className="aspect-[4/3] w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 left-1/2 flex w-[calc(100%-2.5rem)] -translate-x-1/2 items-center justify-between gap-4 rounded-xl border border-black/[0.06] bg-white px-5 py-4 shadow-[0_18px_36px_-22px_rgba(23,23,23,0.3)]">
                            <div>
                                <p className="text-sm font-semibold text-[#171717]">
                                    Cutly Premium Barber Studio
                                </p>
                                <p className="mt-0.5 text-xs text-neutral-500">
                                    123 Barber Street
                                </p>
                            </div>

                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 rounded-lg bg-[#171717] px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-black"
                            >
                                Get Directions
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default LocationSection;