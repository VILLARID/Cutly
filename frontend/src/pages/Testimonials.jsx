import { motion } from "framer-motion";

import {
    testimonialsHeader,
    testimonialCard
} from "../animations/testimonials";

function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "Michael Johnson",
            role: "Regular Client",
            review: "Best haircut experience I've had. The attention to detail is incredible and the fade is always perfect.",
        },
        {
            id: 2,
            name: "David Smith",
            role: "Entrepreneur",
            review: "Professional atmosphere and consistent quality. Every visit feels premium and well executed.",
        },
        {
            id: 3,
            name: "James Wilson",
            role: "Designer",
            review: "I always leave feeling more confident. The precision and style are unmatched.",
        },
        {
            id: 4,
            name: "Carlos Rivera",
            role: "Frequent Client",
            review: "Clean cuts every time. They understand exactly what I want without needing explanation.",
        },
        {
            id: 5,
            name: "Daniel Carter",
            role: "Business Owner",
            review: "One of the best barbershops I’ve been to. Reliable, clean and very professional service.",
        },
        {
            id: 6,
            name: "Ryan Walker",
            role: "Creative Director",
            review: "Modern style with perfect execution. It’s more than a haircut, it’s a full experience.",
        }
    ];

    return (
        <section
            id="testimonials"
            className="relative w-full py-28 px-6 bg-[#f8fafb] overflow-hidden"
        >

            {/* background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-lg h-128 bg-[#fe9a00]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-10 right-10 w-md h-112 bg-slate-200/40 blur-3xl rounded-full" />
            </div>

            {/* HEADER */}
            <motion.div
                variants={testimonialsHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="relative text-center max-w-2xl mx-auto"
            >
                <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
                    Testimonials
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4">
                    What clients say
                    <br />
                    <span className="text-[#fe9a00] font-semibold">
                        about their experience
                    </span>
                </h2>

                <p className="text-slate-600 mt-6">
                    Real feedback from clients who trust our craft and consistency.
                </p>
            </motion.div>

            {/* GRID */}
            <div className="relative mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {testimonials.map((client, index) => (
                    <motion.div
                        key={client.id}
                        variants={testimonialCard}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.08 }}
                        className="group relative"
                    >

                        {/* card glow */}
                        <div className="absolute -inset-1 bg-[#fe9a00]/0 group-hover:bg-[#fe9a00]/10 blur-xl rounded-3xl transition duration-300" />

                        <div className="relative bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                            {/* stars */}
                            <div className="flex gap-1 text-[#fe9a00] mb-5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className="group-hover:scale-110 transition"
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            {/* review */}
                            <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
                                "{client.review}"
                            </p>

                            {/* user */}
                            <div className="flex items-center gap-4">

                                <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-[#fe9a00] to-[#d58a3b] flex items-center justify-center text-white font-semibold shadow-md">
                                    {client.name[0]}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        {client.name}
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        {client.role}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}

export default Testimonials;