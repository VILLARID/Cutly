import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    BadgeCheck,
    CalendarCheck,
    ChevronLeft,
    ChevronRight,
    Quote,
    Star,
    ThumbsUp,
    Users,
} from "lucide-react";

import { useReveal } from "./motion";

const testimonials = [
    {
        quote:
            "Best barber experience I've ever had. The fade was perfect and the vibe is next level.",
        name: "Michael T.",
        initials: "MT",
    },
    {
        quote:
            "Cutly is the real deal. Professional, clean and my haircut always turns out amazing.",
        name: "David R.",
        initials: "DR",
    },
    {
        quote:
            "Finally found a place that understands style and quality. Highly recommend Cutly.",
        name: "James W.",
        initials: "JW",
    },
];

const reviewStats = [
    { value: "200+", label: "Happy Clients", icon: Users },
    { value: "4.9/5", label: "Average Rating", icon: Award },
    { value: "100%", label: "Recommend Cutly", icon: ThumbsUp },
];

function Testimonials() {
    const reveal = useReveal();
    const trackRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const updateArrows = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        setAtStart(el.scrollLeft <= 4);
        setAtEnd(el.scrollLeft >= maxScroll - 4);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        updateArrows();
        const onResize = () => updateArrows();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [updateArrows]);

    const scrollByCard = useCallback((direction) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const step = card ? card.getBoundingClientRect().width : 340;
        el.scrollBy({ left: direction * (step + 24), behavior: "smooth" });
    }, []);

    return (
        <section
            id="reviews"
            className="relative overflow-hidden bg-[#0E0E0D] py-12 md:py-16 lg:py-20"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(217,165,46,0.035),transparent_55%)]"
                aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <motion.div
                    {...reveal}
                    className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
                >
                    <div className="max-w-[620px]">
                        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#DDA52A]">
                            <span className="inline-block h-px w-8 bg-[#DDA52A]/70" aria-hidden="true" />
                            What Our Clients Say
                        </p>

                        <h2 className="mt-5 font-serif text-[40px] font-medium leading-[1.02] text-[#F4F0E8] sm:text-[46px] lg:text-[52px]">
                            Real people.
                            <br />
                            <span className="text-[#DDA52A]">Real style.</span>
                        </h2>

                        <p className="mt-5 max-w-[500px] text-base leading-relaxed text-white/60">
                            We take pride in every cut, every detail and every experience. But
                            don&rsquo;t just take our word for it.
                        </p>
                    </div>

                    <div className="lg:mb-1 lg:max-w-[420px]">
                        <div className="flex items-end justify-start gap-5 lg:justify-end">
                            <p className="font-serif text-[52px] font-medium leading-none text-[#DDA52A] lg:text-[58px]">
                                4.9
                            </p>
                            <div className="pb-2">
                                <div
                                    className="flex gap-1"
                                    role="img"
                                    aria-label="Rated 4.9 out of 5 stars"
                                >
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="size-[17px] fill-[#DDA52A] text-[#DDA52A]"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="mt-1.5 text-sm text-white/55">
                                    From 200+ satisfied clients
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-6 h-px w-full bg-white/[0.08]"
                            aria-hidden="true"
                        />

                        <div className="mt-5 grid grid-cols-3 gap-2">
                            {reviewStats.map(({ value, label, icon: StatIcon }) => (
                                <div key={label} className="flex flex-col gap-1.5 pr-3">
                                    <span className="flex items-center gap-1.5 text-[#DDA52A]">
                                        <StatIcon className="size-4" strokeWidth={1.8} aria-hidden="true" />
                                        <span className="font-serif text-xl leading-none text-[#F4F0E8]">
                                            {value}
                                        </span>
                                    </span>
                                    <span className="text-xs leading-tight text-white/50">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div
                    ref={trackRef}
                    role="region"
                    aria-label="Client testimonials"
                    onScroll={updateArrows}
                    className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto lg:mt-[42px]"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.name}
                            data-card
                            {...reveal}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: (index % 3) * 0.08,
                            }}
                            className="flex w-[80vw] max-w-[360px] shrink-0 snap-start flex-col rounded-[12px] border border-[rgba(217,165,46,0.18)] bg-[#151411] p-7 transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-[rgba(217,165,46,0.4)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.24)] sm:w-[calc((100%-24px)/2)] sm:max-w-none lg:w-[calc((100%-48px)/3)]"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="flex size-12 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(217,165,46,0.24)] bg-[rgba(217,165,46,0.08)] text-[#DDA52A]">
                                    <Quote className="size-5 fill-current" aria-hidden="true" />
                                </span>

                                <div
                                    className="flex gap-1"
                                    role="img"
                                    aria-label="Rated 5 out of 5 stars"
                                >
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="size-[17px] fill-[#DDA52A] text-[#DDA52A]"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>

                            <blockquote className="mt-6 flex-1 font-serif text-lg leading-[1.55] text-white/90">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            <footer className="mt-6 flex items-center gap-3.5 border-t border-white/[0.07] pt-5">
                                <span
                                    className="flex size-[52px] shrink-0 items-center justify-center rounded-full border border-[rgba(217,165,46,0.4)] bg-gradient-to-br from-[#1B1A17] to-[#131210] font-serif text-base font-semibold text-[#DDA52A]"
                                    aria-hidden="true"
                                >
                                    {testimonial.initials}
                                </span>
                                <div className="min-w-0">
                                    <p className="flex items-center gap-1.5 truncate text-base font-semibold text-[#F4F0E8]">
                                        {testimonial.name}
                                        <BadgeCheck
                                            className="size-4 shrink-0 text-[#DDA52A]"
                                            aria-label="Verified client"
                                        />
                                    </p>
                                    <p className="mt-0.5 text-[13px] text-white/50">
                                        Verified Client
                                    </p>
                                </div>
                            </footer>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    {...reveal}
                    className="mt-6 flex items-center justify-center gap-6 lg:mt-8"
                >
                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        disabled={atStart}
                        aria-label="Previous reviews"
                        className="flex size-11 items-center justify-center rounded-md border border-[rgba(217,165,46,0.25)] text-[#DDA52A] transition-colors duration-200 hover:border-[#DDA52A] hover:bg-[#DDA52A] hover:text-[#16130D] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#DDA52A]"
                    >
                        <ChevronLeft className="size-5" aria-hidden="true" />
                    </button>

                    <div className="flex items-center gap-2" aria-hidden="true">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <span
                                key={i}
                                className={`size-1.5 rounded-full ${
                                    i === 0 ? "bg-[#DDA52A]" : "bg-white/20"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        disabled={atEnd}
                        aria-label="Next reviews"
                        className="flex size-11 items-center justify-center rounded-md border border-[rgba(217,165,46,0.25)] text-[#DDA52A] transition-colors duration-200 hover:border-[#DDA52A] hover:bg-[#DDA52A] hover:text-[#16130D] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#DDA52A]"
                    >
                        <ChevronRight className="size-5" aria-hidden="true" />
                    </button>
                </motion.div>

                <motion.div
                    {...reveal}
                    className="mt-12 flex flex-col gap-6 overflow-hidden rounded-[12px] border border-[rgba(217,165,46,0.22)] bg-[#131210] px-6 py-8 sm:px-10 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12"
                >
                    <div>
                        <h3 className="font-serif text-2xl leading-tight text-[#F4F0E8] sm:text-[28px] lg:text-[32px]">
                            Experience the{" "}
                            <span className="text-[#DDA52A]">Cutly standard</span>
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                            Book your appointment today and see why our clients keep coming back.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="group inline-flex h-[48px] shrink-0 items-center justify-center gap-2 rounded-[7px] bg-[#DDA52A] px-6 text-sm font-semibold text-[#16130D] transition-colors duration-200 hover:bg-[#ECB03A]"
                    >
                        <CalendarCheck className="size-4" aria-hidden="true" />
                        Book Your Appointment
                        <ArrowRight
                            className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                            aria-hidden="true"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonials;
