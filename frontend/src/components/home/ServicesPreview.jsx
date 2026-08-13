import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    Clock,
    Flame,
    Gem,
    Ruler,
    Scissors,
    Sparkles,
} from "lucide-react";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./motion";

const services = [
    {
        name: "Classic Haircut",
        desc: "Timeless cut with precision scissors and clippers.",
        price: "$30",
        duration: "30 min",
        icon: Scissors,
    },
    {
        name: "Skin Fade",
        desc: "Clean fade blended with razor-sharp precision.",
        price: "$35",
        duration: "45 min",
        icon: Ruler,
    },
    {
        name: "Haircut + Beard",
        desc: "Head and beard shaped into one sharp, cohesive look.",
        price: "$55",
        duration: "60 min",
        icon: Sparkles,
    },
    {
        name: "Beard Sculpting",
        desc: "Defined, lined-up beard with clean edges and shape.",
        price: "$25",
        duration: "25 min",
        icon: Gem,
    },
    {
        name: "Hot Towel Shave",
        desc: "Classic straight-razor shave finished with hot towel.",
        price: "$35",
        duration: "40 min",
        icon: Flame,
    },
    {
        name: "Premium Grooming",
        desc: "The full ritual — cut, beard, styling and finishing care.",
        price: "$70",
        duration: "75 min",
        icon: Award,
    },
];

function ServicesPreview() {
    const reveal = useReveal();

    return (
        <section id="services" className="overflow-hidden bg-[#F5F2EC] py-16 lg:py-28">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Our Services"
                    title={
                        <>
                            Crafted for your
                            <span className="text-[#C97B00]"> style.</span>
                        </>
                    }
                    link={{
                        label: "View All Services",
                        ariaLabel: "View all services",
                        href: "#services",
                    }}
                />

                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.article
                                key={service.name}
                                {...reveal}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: (index % 3) * 0.06,
                                }}
                                className="group flex flex-col rounded-xl border border-black/[0.06] bg-white p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E39100]/40 hover:shadow-[0_18px_36px_-22px_rgba(23,23,23,0.22)]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E39100]/10 text-[#C97B00] transition-colors duration-300 group-hover:bg-[#E39100] group-hover:text-white">
                                        <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                                    </span>

                                    <div className="text-right">
                                        <p className="font-serif text-xl font-medium leading-none text-[#171717]">
                                            {service.price}
                                        </p>
                                        <p className="mt-1.5 flex items-center justify-end gap-1.5 text-xs text-neutral-500">
                                            <Clock className="size-3.5" aria-hidden="true" />
                                            {service.duration}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-[#171717]">
                                    {service.name}
                                </h3>

                                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                                    {service.desc}
                                </p>

                                <a
                                    href="#contact"
                                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#171717] transition-colors duration-200 group-hover:text-[#C97B00]"
                                >
                                    Book Now
                                    <ArrowRight
                                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </a>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesPreview;