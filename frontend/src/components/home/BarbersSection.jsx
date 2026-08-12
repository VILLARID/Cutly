import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./motion";

import alexPhoto from "../../assets/Barbers/barber-alex.svg";
import dylanPhoto from "../../assets/Barbers/barber-dylan.svg";
import ethanPhoto from "../../assets/Barbers/barber-ethan.svg";

const barbers = [
    {
        name: "Alex Morgan",
        role: "Senior Barber",
        bio: "Precision-led specialist with a sharp eye for texture and tailored detail.",
        photo: alexPhoto,
    },
    {
        name: "Daniel Cruz",
        role: "Master Barber",
        bio: "Two decades shaping classic styles with an instinct for what fits.",
        photo: dylanPhoto,
    },
    {
        name: "James Lee",
        role: "Styling Specialist",
        bio: "Modern styling and sharp finishes, always tailored to your look.",
        photo: ethanPhoto,
    },
];

function BarbersSection() {
    const reveal = useReveal();

    return (
        <section id="barbers" className="overflow-hidden bg-[#131210] py-16 lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <SectionHeader
                    eyebrow="Our Barbers"
                    title={
                        <>
                            Meet the experts
                            <span className="text-[#E2AD36]"> behind the chair.</span>
                        </>
                    }
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
                            className="group overflow-hidden rounded-[10px] border border-[rgba(217,165,46,0.16)] bg-[#161412] transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(217,165,46,0.42)]"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#131210]">
                                <img
                                    src={barber.photo}
                                    alt={`${barber.name} — ${barber.role}`}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                                {/* subtle bottom fade */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent"
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="font-serif text-[22px] font-medium leading-none text-[#F3EFE7]">
                                    {barber.name}
                                </h3>
                                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D9A52E]">
                                    {barber.role}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-white/60">
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

export default BarbersSection;