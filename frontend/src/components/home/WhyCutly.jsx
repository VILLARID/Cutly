import { motion } from "framer-motion";
import { Check, Scissors } from "lucide-react";

import AboutImg from "../../assets/About/AboutImg.png";
import { useRevealLeft, useRevealRight } from "./motion";

const benefits = [
    "Precision & Perfection",
    "Experienced Barbers",
    "Premium Products",
    "Personalized Service",
    "Hygiene First",
    "Luxury Environment",
];

function WhyCutly() {
    const revealLeft = useRevealLeft();
    const revealRight = useRevealRight();

    return (
        <section id="why" className="overflow-hidden bg-[#0E0E0D] py-16 lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
                    {/* IMAGE */}
                    <motion.div {...revealLeft} className="relative">
                        <div className="relative overflow-hidden rounded-[10px] border border-[rgba(217,165,46,0.18)] bg-[#131210]">
                            <img
                                src={AboutImg}
                                alt="Barber working inside the Cutly Premium Barber Studio"
                                className="aspect-[4/5] w-full object-cover"
                            />
                        </div>

                        {/* decorative quote block */}
                        <div className="absolute -bottom-8 right-4 max-w-[230px] rounded-[10px] border border-[rgba(217,165,46,0.22)] bg-[#131210] px-5 py-4 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.7)] sm:right-8">
                            <span className="flex size-9 items-center justify-center rounded-[7px] bg-[#D9A52E]/12 text-[#D9A52E]">
                                <Scissors className="size-[18px]" aria-hidden="true" />
                            </span>
                            <p className="mt-3 font-serif text-[15px] font-medium italic leading-snug text-[#F3EFE7]">
                                &ldquo;It&rsquo;s not just a cut, it&rsquo;s
                                your signature.&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div {...revealRight} className="lg:pl-4">
                        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D9A52E]">
                            <span
                                className="inline-block h-px w-8 bg-[#D9A52E]/60"
                                aria-hidden="true"
                            />
                            Why Cutly
                        </p>

                        <h2 className="mt-4 font-serif text-[38px] font-medium leading-[1.08] text-[#F3EFE7] md:text-[44px] lg:text-[52px]">
                            Every Detail
                            <span className="text-[#E2AD36]"> Matters.</span>
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
                            We combine old-school techniques with modern style to
                            deliver more than a haircut — we deliver confidence.
                        </p>

                        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                            {benefits.map((benefit) => (
                                <li key={benefit} className="flex items-center gap-3">
                                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[rgba(217,165,46,0.35)] bg-[#D9A52E]/12 text-[#D9A52E]">
                                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                                    </span>
                                    <span className="text-[15px] text-white/80">
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

export default WhyCutly;