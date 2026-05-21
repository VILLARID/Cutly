import { motion } from "framer-motion";
import { Square, MoveRight } from "lucide-react";

import {
    servicesHeader,
    serviceCard
} from "../animations/services";

function Services() {

    const services = [
        {
            title: "Fade Cut",
            desc: "Precision fade with seamless blending",
            price: "$35"
        },
        {
            title: "Beard Trim",
            desc: "Clean and sharp beard styling",
            price: "$20"
        },
        {
            title: "Classic Cut",
            desc: "Traditional haircut with modern finish",
            price: "$25"
        },
        {
            title: "Full Service",
            desc: "Haircut + beard + styling combo",
            price: "$50"
        }
    ];

    return (

        <section
            id="services"
            className="relative w-full py-28 px-6 bg-[#f9fafb] overflow-hidden"
        >

            {/* background blobs */}

            <div className="absolute top-20 left-10 w-80 h-80 bg-[#fe9a00]/10 rounded-full blur-3xl" />

            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d58a3b]/10 rounded-full blur-3xl" />

            {/* Header */}

            <motion.div
                variants={servicesHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-5"
            >

                <div className="bg-[#fef3c6] px-5 py-2 rounded-full">

                    <p className="text-[#d58a3b] text-sm font-medium">

                        Our Services

                    </p>

                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#101522]">

                    Premium Grooming

                </h2>

                <p className="text-gray-600 max-w-xl">

                    Professional grooming services designed
                    for your style and confidence.

                </p>

            </motion.div>

            {/* Cards */}

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                {services.map((service, index) => (

                    <motion.div
                        key={index}
                        variants={serviceCard}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.3
                        }}
                        transition={{
                            delay: index * 0.2
                        }}
                        className="relative group"
                    >

                        {/* floating shape */}

                        <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#d58a3b] rotate-45 rounded-md shadow-lg group-hover:rotate-90 transition duration-500" />

                        {/* Card */}

                        <div className="relative bg-white rounded-[28px] p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">

                            {/* Decorative corner */}

                            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#fe9a00]/30 rounded-md rotate-45 blur-[1px]" />

                            {/* Icon */}

                            <div className="w-12 h-12 flex items-center justify-center bg-[#fef3c6] rounded-2xl mb-5 group-hover:scale-110 transition">

                                <Square className="text-[#d58a3b]" />

                            </div>

                            {/* Title */}

                            <h3 className="text-xl font-semibold text-[#101522]">

                                {service.title}

                            </h3>

                            {/* Description */}

                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">

                                {service.desc}

                            </p>

                            {/* Footer */}

                            <div className="flex justify-between items-center mt-6">

                                <span className="text-[#d58a3b] font-bold text-xl">

                                    {service.price}

                                </span>

                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-[#fef3c6] transition">

                                    <MoveRight className="text-gray-500 group-hover:text-[#d58a3b] transition size-4" />

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