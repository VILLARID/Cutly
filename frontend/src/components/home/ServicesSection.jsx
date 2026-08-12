import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Flame, Gem, Ruler, Scissors, Sparkles } from "lucide-react";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./motion";

const services = [
    {
        name: "Classic Haircut",
        desc: "Timeless cut with scissors & clippers.",
        price: "$35",
        duration: "30 min",
        icon: Scissors,
    },
    {
        name: "Skin Fade",
        desc: "Clean, razor-blended fade with sharp edges.",
        price: "$40",
        duration: "45 min",
        icon: Ruler,
    },
    {
        name: "Haircut + Beard",
        desc: "Head and beard shaped into one cohesive look.",
        price: "$60",
        duration: "60 min",
        icon: Sparkles,
    },
    {
        name: "Beard Sculpting",
        desc: "Defined lines and shape for a sharp beard.",
        price: "$30",
        duration: "30 min",
        icon: Gem,
    },
    {
        name: "Hot Towel Shave",
        desc: "Classic straight-razor shave with hot towel.",
        price: "$40",
        duration: "40 min",
        icon: Flame,
    },
    {
        name: "Premium Grooming",
        desc: "Full ritual — cut, beard, styling & finishing.",
        price: "$75",
        duration: "75 min",
        icon: Award,
    },
];

function ServicesSection() {
    const reveal = useReveal();

    return (
        <section id="services" className="overflow-hidden bg-[#131210] py-16 lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <SectionHeader
                    eyebrow="Our Services"
                    title={
                        <>
                            Premium Services.
                            <span className="text-[#E2AD36]"> Precision Results.</span>
                        </>
                    }
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
                                    delay: (index % 3) * 0.07,
                                }}
                                className="group flex flex-col rounded-[8px] border border-[rgba(217,165,46,0.16)] bg-[#151411] p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(217,165,46,0.42)]"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[8px] border border-[rgba(217,165,46,0.16)] bg-[#D9A52E]/10 text-[#D9A52E] transition-colors duration-300 group-hover:bg-[#D9A52E] group-hover:text-[#161310]">
                                        <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                                    </span>

                                    <div className="text-right">
                                        <p className="font-serif text-xl font-medium leading-none text-[#F3EFE7]">
                                            {service.price}
                                        </p>
                                        <p className="mt-1.5 flex items-center justify-end gap-1.5 text-xs text-white/50">
                                            <Clock className="size-3.5" aria-hidden="true" />
                                            {service.duration}
                                        </p>
                                    </div>
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-[#F3EFE7]">
                                    {service.name}
                                </h3>

                                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                                    {service.desc}
                                </p>

                                <a
                                    href="#contact"
                                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#E2AD36] transition-colors duration-200 hover:text-[#F3EFE7]"
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

export default ServicesSection;