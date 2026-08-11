import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./motion";

import alexPhoto from "../../assets/Barbers/barber-alex.svg";
import dylanPhoto from "../../assets/Barbers/barber-dylan.svg";
import ethanPhoto from "../../assets/Barbers/barber-ethan.svg";

const barbers = [
    {
        name: "Alex Morgan",
        role: "Founder & Master Barber",
        bio: "20+ years mastering classic cuts and modern fades with surgical precision.",
        photo: alexPhoto,
    },
    {
        name: "Dylan Carter",
        role: "Senior Barber",
        bio: "Precision-led specialist with a sharp eye for texture and tailored detail.",
        photo: dylanPhoto,
    },
    {
        name: "Ethan Brooks",
        role: "Barber",
        bio: "Clean and consistent, always ready to talk through the style that fits you.",
        photo: ethanPhoto,
    },
];

function BarbersPreview() {
    const reveal = useReveal();

    return (
        <section id="barbers" className="overflow-hidden bg-[#F5F2EC] py-16 lg:py-28">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Meet Our Barbers"
                    title={
                        <>
                            Experts in <span className="text-[#C97B00]">their craft.</span>
                        </>
                    }
                    link={{
                        label: "View All Barbers",
                        ariaLabel: "View all barbers",
                        href: "#barbers",
                    }}
                />

                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
                    {barbers.map((barber, index) => (
                        <motion.article
                            key={barber.name}
                            {...reveal}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: index * 0.08,
                            }}
                            className="group overflow-hidden rounded-xl border border-black/[0.06] bg-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E39100]/40 hover:shadow-[0_18px_36px_-22px_rgba(23,23,23,0.22)]"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F2EC]">
                                <img
                                    src={barber.photo}
                                    alt={`${barber.name} — ${barber.role}`}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="font-serif text-[22px] font-medium leading-none text-[#171717]">
                                    {barber.name}
                                </h3>
                                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C97B00]">
                                    {barber.role}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                    {barber.bio}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BarbersPreview;