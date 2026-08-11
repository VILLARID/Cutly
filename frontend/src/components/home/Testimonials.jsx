import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./motion";

const testimonials = [
    {
        quote:
            "Best barber experience I've had. Clean fades, great vibe and the team is super professional.",
        name: "James T.",
        initials: "JT",
    },
    {
        quote:
            "Alex knows exactly what works for me. Consistent, sharp and worth every penny.",
        name: "Michael R.",
        initials: "MR",
    },
    {
        quote:
            "Amazing attention to detail and a premium experience from start to finish.",
        name: "David L.",
        initials: "DL",
    },
];

function Testimonials() {
    const reveal = useReveal();

    return (
        <section id="reviews" className="overflow-hidden bg-[#F5F2EC] py-16 lg:py-28">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="What Our Clients Say"
                    title={
                        <>
                            Real people. <span className="text-[#C97B00]">Real results.</span>
                        </>
                    }
                    link={{
                        label: "View All Reviews",
                        ariaLabel: "View all reviews",
                        href: "#reviews",
                    }}
                />

                <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.name}
                            {...reveal}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: index * 0.08,
                            }}
                            className="flex flex-col rounded-2xl border border-black/[0.06] bg-white p-7 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#E39100]/40 hover:shadow-[0_18px_36px_-22px_rgba(23,23,23,0.2)]"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="flex size-10 items-center justify-center rounded-[10px] bg-[#E39100]/10 text-[#C97B00]">
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
                                            className="size-4 fill-[#E39100] text-[#E39100]"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>

                            <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-neutral-700">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            <footer className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-5">
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E39100]/10 font-serif text-sm font-semibold text-[#C97B00]">
                                    {testimonial.initials}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-[#171717]">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-neutral-500">
                                        Verified Client
                                    </p>
                                </div>
                            </footer>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;