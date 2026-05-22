import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

import {
    contactHeader,
    contactCard
} from "../animations/contact";

function GetInTouch() {

    const mockData = [
        {
            id: 1,
            icon: MapPin,
            title: "Location",
            line1: "123 Main Street",
            line2: "Downtown, NY 10001"
        },
        {
            id: 2,
            icon: Clock,
            title: "Opening Hours",
            line1: "Mon - Fri: 9AM - 8PM",
            line2: "Sat - Sun: 10AM - 6PM"
        },
        {
            id: 3,
            icon: Phone,
            title: "Contact",
            line1: "+1 (555) 123-4567",
            line2: "contact@cutly.com"
        }
    ];

    return (
        <section
            id="contact"
            className="relative w-full py-28 px-6 bg-[#f8fafc] overflow-hidden"
        >

            {/* soft background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-120 h-120 bg-[#fe9a00]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-lg h-128 bg-slate-200/40 blur-3xl rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto">

                {/* HEADER */}
                <motion.div
                    variants={contactHeader}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
                        Contact
                    </p>

                    <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4">
                        Visit our studio,
                        <br />
                        <span className="text-[#fe9a00] font-semibold">
                            book your next cut
                        </span>
                    </h2>

                    <p className="text-slate-600 mt-6">
                        Premium grooming experience with professional barbers and personalized attention.
                    </p>

                    {/* CTA button */}
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[#fe9a00] text-white font-medium hover:shadow-[0_0_25px_rgba(254,154,0,0.4)] transition"
                    >
                        <MessageCircle size={18} />
                        Book Appointment
                    </a>
                </motion.div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

                    {mockData.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                variants={contactCard}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >

                                <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                                    {/* icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#fef3c6] flex items-center justify-center group-hover:scale-110 transition">
                                        <Icon className="text-[#fe9a00]" size={24} />
                                    </div>

                                    {/* title */}
                                    <h3 className="text-lg font-semibold text-slate-900 mt-6">
                                        {item.title}
                                    </h3>

                                    {/* info */}
                                    <div className="mt-4 text-slate-600 text-sm space-y-1">
                                        <p>{item.line1}</p>
                                        <p>{item.line2}</p>
                                    </div>

                                    {/* subtle accent */}
                                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-linear-to-r from-[#fe9a00] to-transparent opacity-0 group-hover:opacity-100 transition" />

                                </div>

                            </motion.div>
                        );

                    })}

                </div>

            </div>
        </section>
    );
}

export default GetInTouch;