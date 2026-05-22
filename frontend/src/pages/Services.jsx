import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import {
    servicesHeader,
    serviceCard
} from "../animations/services";

function Services() {

    const services = [
        {
            title: "Skin Fade",
            desc: "Ultra clean fade with razor precision blend.",
            price: "$35"
        },
        {
            title: "Low Fade",
            desc: "Subtle fade for a natural clean transition.",
            price: "$30"
        },
        {
            title: "Mid Fade",
            desc: "Balanced fade with modern sharp finish.",
            price: "$32"
        },
        {
            title: "Burst Fade",
            desc: "Stylish curved fade for bold looks.",
            price: "$38"
        },
        {
            title: "Beard Trim",
            desc: "Defined beard shaping with clean edges.",
            price: "$20"
        },
        {
            title: "Classic Cut",
            desc: "Timeless haircut with modern refinement.",
            price: "$25"
        },
        {
            title: "Full Service",
            desc: "Haircut + beard + styling complete package.",
            price: "$55"
        },
        {
            title: "Premium Style",
            desc: "Full transformation with personalized styling.",
            price: "$65"
        }
    ];

    return (
        <section
            id="services"
            className="relative w-full py-28 px-6 bg-[#f8fafc] overflow-hidden"
        >

            {/* background */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 left-10 w-136 h-120 bg-[#fe9a00]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-10 w-136 h-120 bg-slate-200/40 blur-3xl rounded-full" />
            </div>

            {/* HEADER */}
            <motion.div
                variants={servicesHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="relative text-center max-w-2xl mx-auto"
            >
                <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
                    Services
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4">
                    Precision cuts,
                    <br />
                    <span className="text-[#fe9a00] font-semibold">
                        modern barber experience
                    </span>
                </h2>

                <p className="text-slate-600 mt-6 text-base md:text-lg">
                    Every cut is designed to match your style, face shape and personality.
                </p>
            </motion.div>

            {/* GRID */}
            <div className="relative mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={serviceCard}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.05 }}
                        className="group"
                    >
                        {/* CARD */}
                        <div className="relative bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                            {/* top */}
                            <div className="flex justify-between items-start">
                                <h3 className="text-lg md:text-xl font-medium text-slate-900">
                                    {service.title}
                                </h3>

                                <span className="text-[#fe9a00] font-semibold">
                                    {service.price}
                                </span>
                            </div>

                            {/* desc */}
                            <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                {service.desc}
                            </p>

                            {/* footer */}
                            <div className="mt-6 flex items-center justify-between">

                                <span className="text-xs tracking-widest text-slate-400 uppercase group-hover:text-[#fe9a00] transition">
                                    Book
                                </span>

                                <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#fe9a00] transition">
                                    <MoveRight className="w-4 h-4 text-slate-500 group-hover:text-[#fe9a00] transition" />
                                </div>

                            </div>

                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}

export default Services;