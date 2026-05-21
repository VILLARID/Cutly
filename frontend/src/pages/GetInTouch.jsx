import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

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
            className="relative overflow-hidden w-full py-30 px-6 bg-[#fffcef]"
        >

            {/* background effects */}

            <div className="absolute top-0 left-0 w-80 h-80 bg-[#fe9a00]/10 rounded-full blur-3xl"/>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d58a3b]/10 rounded-full blur-3xl"/>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}

                <motion.div
                    variants={contactHeader}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >

                    <div className="bg-[#fef3c6] rounded-full px-5 py-2">

                        <p className="text-[#d58a3b] text-sm font-medium">

                            Get In Touch

                        </p>

                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#101522] mt-6 leading-tight">

                        Visit Our Shop

                    </h2>

                    <p className="text-gray-500 mt-5 max-w-lg leading-7">

                        Ready for a fresh look? Experience premium
                        grooming with expert barbers and personalized service.

                    </p>

                </motion.div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {mockData.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.id}
                                variants={contactCard}
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

                                {/* floating square */}

                                <div className={`
                                absolute w-8 h-8 bg-[#d58a3b]
                                rotate-45 rounded-md shadow-lg
                                transition duration-500
                                group-hover:rotate-90
                                ${index % 2 === 0
                                    ? "-top-3 -right-3"
                                    : "-bottom-3 -left-3"
                                }
                                `}/>

                                {/* Card */}

                                <div
                                    className="
                                    relative
                                    bg-white
                                    rounded-[30px]
                                    p-8
                                    border border-gray-100
                                    shadow-sm
                                    hover:shadow-xl
                                    hover:-translate-y-2
                                    transition-all duration-500
                                "
                                >

                                    <div
                                        className="
                                        w-16 h-16
                                        rounded-2xl
                                        bg-[#fef3c6]
                                        flex items-center justify-center
                                        group-hover:scale-110
                                        transition
                                    "
                                    >

                                        <Icon
                                            className="text-[#d58a3b]"
                                            size={28}
                                        />

                                    </div>

                                    <h3 className="text-xl font-bold mt-7 text-[#101522]">

                                        {item.title}

                                    </h3>

                                    <div className="mt-5 flex flex-col gap-2 text-gray-500">

                                        <p>{item.line1}</p>

                                        <p>{item.line2}</p>

                                    </div>

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