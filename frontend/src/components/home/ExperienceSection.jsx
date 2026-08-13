import { motion } from "framer-motion";
import { Check } from "lucide-react";

import AboutImg from "../../assets/About/AboutImg.png";
import { useRevealLeft, useRevealRight } from "./motion";

const benefits = [
    "Precision cuts & sharp fades",
    "Premium products only",
    "Clean, comfortable space",
    "Friendly, expert barbers",
    "Same-day booking available",
    "Satisfaction focused",
];

function ExperienceSection() {
    const revealLeft = useRevealLeft();
    const revealRight = useRevealRight();

    return (
        <section id="why" className="overflow-hidden bg-white py-16 lg:py-28">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
                    {/* IMAGE */}
                    <motion.div {...revealLeft} className="relative">
                        <div className="absolute -left-5 -top-5 grid grid-cols-3 gap-2" aria-hidden="true">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="size-1.5 rounded-full bg-[#E39100]/50"
                                />
                            ))}
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-[#F5F2EC] shadow-[0_28px_60px_-36px_rgba(23,23,23,0.4)]">
                            <img
                                src={AboutImg}
                                alt="Barber cutting hair inside the Cutly Premium Barber Studio"
                                className="aspect-[4/5] w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 right-5 rounded-xl border border-black/[0.06] bg-white px-5 py-3.5 shadow-[0_16px_34px_-20px_rgba(23,23,23,0.3)] sm:right-8">
                            <p className="font-serif text-2xl font-medium leading-none text-[#171717]">
                                8+
                            </p>
                            <p className="mt-1 text-xs text-neutral-500">
                                Years of craft
                            </p>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div {...revealRight}>
                        <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C97B00]">
                            <span
                                className="inline-block h-px w-8 bg-[#C97B00]/60"
                                aria-hidden="true"
                            />
                            Our Promise
                        </p>

                        <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-[#171717] md:text-[44px] lg:text-[52px]">
                            Every detail
                            <span className="text-[#C97B00]"> matters.</span>
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
                            We combine skill, premium products and a passion for
                            detail to deliver an experience that keeps you coming
                            back.
                        </p>

                        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#E39100]/15 text-[#C97B00]">
                                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                                    </span>
                                    <span className="text-sm text-neutral-700 md:text-[15px]">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;