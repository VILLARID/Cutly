import { motion } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    CalendarCheck,
    Clock,
    Star,
    UsersRound,
} from "lucide-react";

import heroImage from "../../assets/Home/background.jpg";
import { useReveal, useRevealRight } from "./motion";
import TrustStats from "./TrustStats";

const heroStats = [
    {
        value: "500+",
        label: "Clients",
        icon: UsersRound,
    },
    {
        value: "4.9",
        label: "Rating",
        icon: Star,
    },
    {
        value: "Same-Day",
        label: "Booking",
        icon: CalendarCheck,
    },
];

function Hero() {
    const reveal = useReveal();
    const revealRight = useRevealRight();

    return (
        <section id="home" className="relative overflow-hidden bg-[#FAF9F6]">
            {/* subtle transition blend under the dark navbar */}
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[90px] bg-[linear-gradient(180deg,rgba(23,21,18,0.05)_0%,transparent_80px)]"
                aria-hidden="true"
            />

            {/* soft warm background accents */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-40 top-16 size-[28rem] rounded-full bg-[#E39100]/[0.07] blur-3xl" />
                <div className="absolute -right-32 bottom-0 size-[24rem] rounded-full bg-[#C9A227]/10 blur-3xl" />
            </div>

            <div className="relative mx-auto w-full max-w-[1360px] px-4 pt-20 sm:px-6 lg:px-8 lg:pt-[84px]">
                <div className="grid w-full items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[72px]">
                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">
                        <motion.p
                            {...reveal}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C97B00]"
                        >
                            Premium Barber Experience
                        </motion.p>

                        <motion.h1
                            {...reveal}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
                            className="mt-6 font-serif text-[40px] font-medium leading-[1] text-[#171717] sm:text-[48px] lg:text-[clamp(52px,4.2vw,72px)]"
                        >
                            More than a cut,
                            <br />
                            <span className="text-[#C97B00]">it&rsquo;s your image.</span>
                        </motion.h1>

                        <motion.p
                            {...reveal}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                            className="mt-6 max-w-[530px] text-base leading-relaxed text-neutral-600 md:text-lg"
                        >
                            Modern barber studio focused on precision, style and
                            confidence. Get a clean look that actually fits you.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            {...reveal}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
                            className="mt-7 flex flex-col gap-3 sm:flex-row"
                        >
                            <a
                                href="#contact"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#E39100] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C97B00] hover:shadow-[0_10px_22px_-10px_rgba(201,123,0,0.6)] active:translate-y-0 sm:w-auto"
                            >
                                <Calendar className="size-4" aria-hidden="true" />
                                Book Appointment
                            </a>

                            <a
                                href="#services"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#171717] transition-all duration-200 hover:border-[#171717]/30 hover:bg-[#F5F2EC] sm:w-auto"
                            >
                                See Our Services
                                <ArrowRight
                                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </a>
                        </motion.div>

                        {/* hero stats */}
                        <motion.div
                            {...reveal}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
                            className="mt-[30px] grid grid-cols-3 gap-x-4 gap-y-5 border-t border-black/[0.06] pt-7 sm:flex sm:items-center sm:gap-0 sm:divide-x sm:divide-black/10 sm:border-t-0 sm:pt-0"
                        >
                            {heroStats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        className={`flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left ${
                                            index === 0 ? "sm:pr-6" : "sm:px-6"
                                        }`}
                                    >
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#E39100]/10 text-[#C97B00] sm:size-10">
                                            <Icon className="size-4 sm:size-5" strokeWidth={1.9} aria-hidden="true" />
                                        </span>
                                        <span>
                                            <span className="block text-[15px] font-semibold leading-none text-[#171717] sm:text-lg">
                                                {stat.value}
                                            </span>
                                            <span className="mt-1 block text-[11px] text-neutral-500 sm:text-xs">
                                                {stat.label}
                                            </span>
                                        </span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <motion.div {...revealRight} className="relative mx-auto w-full max-w-md lg:max-w-none">
                        {/* dots decoration */}
                        <div
                            className="absolute -right-6 -top-6 hidden grid-cols-3 gap-2 lg:grid"
                            aria-hidden="true"
                        >
                            {Array.from({ length: 9 }).map((_, i) => (
                                <span
                                    key={i}
                                    className="size-1.5 rounded-full bg-[#E39100]/60"
                                />
                            ))}
                        </div>

                        <div className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-[#F5F2EC] shadow-[0_28px_60px_-34px_rgba(23,23,23,0.45)] lg:h-[min(52vh,540px)] lg:max-h-[540px] lg:min-h-[420px]">
                            <img
                                src={heroImage}
                                alt="Barber giving a precision haircut at Cutly premium barber studio"
                                className="aspect-[4/3] w-full object-cover object-center lg:aspect-auto lg:h-full"
                            />
                        </div>

                        {/* floating availability card */}
                        <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3 shadow-[0_16px_34px_-18px_rgba(23,23,23,0.3)] sm:bottom-6 sm:left-6">
                            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#E39100]/10 text-[#C97B00]">
                                <Clock className="size-5" aria-hidden="true" />
                            </span>
                            <span>
                                <span className="block text-sm font-semibold text-[#171717]">
                                    Next available
                                </span>
                                <span className="mt-0.5 block text-xs text-neutral-500">
                                    Today · 4:30 PM
                                </span>
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* trust stats — part of the hero */}
                <TrustStats />
            </div>
        </section>
    );
}

export default Hero;