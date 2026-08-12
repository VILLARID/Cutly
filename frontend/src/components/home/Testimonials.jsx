import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import SectionHeader from "./SectionHeader";
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

function Testimonials() {
    const reveal = useReveal();

    return (
        <section id="reviews" className="overflow-hidden bg-[#131210] py-16 lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <SectionHeader
                    eyebrow="What Our Clients Say"
                    title={
                        <>
                            Real people.
                            <span className="text-[#E2AD36]"> Real style.</span>
                        </>
                    }
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
                            className="flex flex-col rounded-[10px] border border-[rgba(217,165,46,0.16)] bg-[#161412] p-7 transition-all duration-300 hover:-translate-y-[2px] hover:border-[rgba(217,165,46,0.42)]"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <span className="flex size-10 items-center justify-center rounded-[8px] border border-[rgba(217,165,46,0.18)] bg-[#D9A52E]/10 text-[#D9A52E]">
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
                                            className="size-4 fill-[#E2AD36] text-[#E2AD36]"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>

                            <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/75">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            <footer className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[rgba(217,165,46,0.3)] bg-[#D9A52E]/12 font-serif text-sm font-semibold text-[#E2AD36]">
                                    {testimonial.initials}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-[#F3EFE7]">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-white/50">
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