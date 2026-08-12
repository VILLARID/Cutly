import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star } from "lucide-react";

import heroImage from "../../assets/Home/background.jpg";
import { useReveal } from "./motion";

const avatarInitials = ["JM", "KR", "AS", "DT"];

const avatarColors = [
    "bg-[#D9A52E]/25 text-[#E2AD36]",
    "bg-white/10 text-white/80",
    "bg-[#D9A52E]/15 text-[#F3EFE7]",
    "bg-white/5 text-white/60",
];

function Hero() {
    const reveal = useReveal(0.15);

    return (
        <section id="home" className="relative flex min-h-[640px] items-center overflow-hidden bg-[#0E0E0D] lg:min-h-[700px]">
            {/* EXISTING HERO BACKGROUND — do not replace */}
            <div className="absolute inset-0" aria-hidden="true">
                <img
                    src={heroImage}
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
            </div>

            {/* cinematic dark overlay: legible left, photography right */}
            <div
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.96)_0%,rgba(8,8,8,0.82)_38%,rgba(8,8,8,0.28)_68%,rgba(8,8,8,0.08)_100%)]"
                aria-hidden="true"
            />
            {/* extra darkness at the very top for a seamless blend under the navbar */}
            <div
                className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(8,8,8,0.95)_0%,rgba(8,8,8,0)_100%)]"
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1480px] px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-[110px] lg:pb-20 2xl:px-10">
                <div className="max-w-[560px]">
                    <motion.p
                        {...reveal}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E2AD36]"
                    >
                        <span
                            className="inline-block h-px w-8 bg-[#E2AD36]/70"
                            aria-hidden="true"
                        />
                        Premium Barber Experience
                    </motion.p>

                    <motion.h1
                        {...reveal}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                        className="mt-6 font-serif text-[clamp(44px,5vw,78px)] font-medium leading-[0.95] text-[#F3EFE7]"
                    >
                        More than a cut,
                        <br />
                        <span className="text-[#E2AD36]">it&rsquo;s your image.</span>
                    </motion.h1>

                    {/* decorative gold hairline */}
                    <motion.span
                        {...reveal}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                        className="mt-7 block h-[2px] w-16 rounded-full bg-[#D9A52E]/70"
                        aria-hidden="true"
                    />

                    <motion.p
                        {...reveal}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
                        className="mt-6 max-w-[450px] text-[17px] leading-relaxed text-white/60 md:text-lg"
                    >
                        Precision cuts. Premium grooming.
                        <br />
                        Confidence that speaks before you do.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        {...reveal}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 }}
                        className="mt-9 flex flex-col gap-3 sm:flex-row"
                    >
                        <a
                            href="#contact"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#D9A52E] px-7 py-3.5 text-sm font-semibold text-[#161310] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E2AD36] active:translate-y-0 sm:w-auto"
                        >
                            <Calendar className="size-[18px]" aria-hidden="true" />
                            Book Appointment
                        </a>

                        <a
                            href="#services"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#D9A52E]/35 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#F3EFE7] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D9A52E]/70 hover:text-[#E2AD36] active:translate-y-0 sm:w-auto"
                        >
                            See Our Services
                            <ArrowRight
                                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </a>
                    </motion.div>

                    {/* SOCIAL PROOF */}
                    {/*
                        avatar group with fictional clients (no photos available,
                        so initials-based avatars + rating)
                    */}
                    <motion.div
                        {...reveal}
                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.28 }}
                        className="mt-10 flex items-center gap-4"
                    >
                        <div className="flex -space-x-2.5" aria-hidden="true">
                            {avatarInitials.map((initials, index) => (
                                <span
                                    key={initials}
                                    className={`flex size-9 items-center justify-center rounded-full border-2 border-[#1A1917] font-serif text-[11px] font-semibold ${avatarColors[index]}`}
                                >
                                    {initials}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col gap-0.5">
                            <div
                                className="flex items-center gap-1.5"
                                role="img"
                                aria-label="Rated 4.9 out of 5 stars"
                            >
                                <span className="flex gap-0.5">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="size-3.5 fill-[#E2AD36] text-[#E2AD36]"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </span>
                                <span className="text-sm font-semibold text-[#F3EFE7]">
                                    4.9
                                </span>
                            </div>
                            <p className="text-xs text-white/60">
                                Trusted by 500+ clients
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;