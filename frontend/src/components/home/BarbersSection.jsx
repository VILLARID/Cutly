import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import { useReveal } from "./motion";

import alexPhoto from "../../assets/Barbers/alex-morgan.jpg";
import danielPhoto from "../../assets/Barbers/daniel-cruz.jpg";
import jamesPhoto from "../../assets/Barbers/james-lee.jpg";

const barbers = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "Senior Barber",
        rating: "4.9",
        specialty: "Classic cuts · Beard work",
        image: alexPhoto,
    },
    {
        id: 2,
        name: "Daniel Cruz",
        role: "Master Barber",
        rating: "4.8",
        specialty: "Fades · Precision detailing",
        image: danielPhoto,
    },
    {
        id: 3,
        name: "James Lee",
        role: "Styling Specialist",
        rating: "4.9",
        specialty: "Texture · Modern styling",
        image: jamesPhoto,
    },
];

function BarbersSection() {
    const reveal = useReveal();
    const [activeBarber, setActiveBarber] = useState(barbers[0]);

    const featuredImage = (heightClasses) => (
        <div
            className={`relative overflow-hidden rounded-[12px] border border-[rgba(217,165,46,0.18)] bg-[#0F0E0C] ${heightClasses}`}
        >
            <AnimatePresence initial={false}>
                <motion.img
                    key={activeBarber.id}
                    src={activeBarber.image}
                    alt={`${activeBarber.name} — ${activeBarber.role}`}
                    loading="eager"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
            </AnimatePresence>

            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(15,14,12,0.95),transparent)]"
                aria-hidden="true"
            />

            <div className="absolute bottom-5 left-5">
                <p className="font-serif text-2xl leading-none text-[#F4F0E8]">
                    {activeBarber.name}
                </p>
                <p className="mt-1.5 text-sm font-medium text-[#DDA52A]">{activeBarber.role}</p>
            </div>
        </div>
    );

    return (
        <section
            id="barbers"
            className="overflow-hidden bg-[#0E0E0D] py-[48px] md:py-[64px] lg:py-[84px]"
        >
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
                    <motion.div {...reveal} className="lg:order-2">
                        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#DDA52A]">
                            <span className="inline-block h-px w-8 bg-[#DDA52A]/70" aria-hidden="true" />
                            Our Barbers
                        </p>

                        <h2 className="mt-5 font-serif text-[40px] font-medium leading-[1.02] text-[#F4F0E8] sm:text-[46px] lg:text-[52px]">
                            The hands behind
                            <br />
                            <span className="text-[#DDA52A]">every great cut.</span>
                        </h2>

                        <p className="mt-5 max-w-[460px] text-base leading-relaxed text-white/60">
                            Meet the professionals who bring precision, style and personality to
                            every appointment.
                        </p>

                        <div className="mt-8 lg:hidden">{featuredImage("h-[440px] sm:h-[480px]")}</div>

                        <div className="mt-10 divide-y divide-white/10 lg:mt-12">
                            {barbers.map((barber, index) => {
                                const isActive = activeBarber.id === barber.id;
                                return (
                                    <button
                                        key={barber.id}
                                        type="button"
                                        onClick={() => setActiveBarber(barber)}
                                        onMouseEnter={() => setActiveBarber(barber)}
                                        aria-pressed={isActive}
                                        className={`w-full border-l-2 py-5 pl-4 text-left transition-all duration-300 ease-out ${
                                            isActive
                                                ? "border-[#D9A52E] bg-white/[0.02]"
                                                : "border-transparent hover:bg-white/[0.015] hover:pl-[18px]"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex items-baseline gap-4">
                                                <span
                                                    className="font-serif text-sm text-[#D9A52E]/70"
                                                    aria-hidden="true"
                                                >
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <span
                                                    className={`font-serif text-xl transition-colors duration-300 md:text-2xl ${
                                                        isActive
                                                            ? "text-[#F4F0E8]"
                                                            : "text-white/70"
                                                    }`}
                                                >
                                                    {barber.name}
                                                </span>
                                            </div>
                                            <span className="flex shrink-0 items-center gap-1.5 text-[15px] text-[#D9A52E]">
                                                <Star
                                                    className="size-3.5 fill-current"
                                                    aria-hidden="true"
                                                />
                                                {barber.rating}
                                            </span>
                                        </div>
                                        <p
                                            className={`mt-1 pl-8 text-sm transition-colors duration-300 ${
                                                isActive ? "text-white/70" : "text-white/55"
                                            }`}
                                        >
                                            {barber.role}
                                        </p>
                                        <p
                                            className={`mt-0.5 pl-8 text-sm transition-colors duration-300 ${
                                                isActive ? "text-white/70" : "text-white/55"
                                            }`}
                                        >
                                            {barber.specialty}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-9">
                            <a
                                href="#barbers"
                                className="group inline-flex h-[48px] items-center gap-2 rounded-[7px] border border-[#DDA52A]/70 px-7 text-sm font-semibold tracking-wide text-[#DDA52A] transition-colors duration-[250ms] ease-out hover:bg-[#DDA52A] hover:text-[#111]"
                            >
                                View All Barbers
                                <ArrowRight
                                    className="size-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-[3px]"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div {...reveal} className="mt-10 hidden lg:order-1 lg:mt-0 lg:block">
                        {featuredImage("h-[520px]")}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default BarbersSection;
