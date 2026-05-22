import {
    UsersRound,
    Star,
    Sparkles,
    BadgeCheck
} from "lucide-react";

import { motion } from "framer-motion";

function StatsBar() {

    const stats = [
        {
            id: 1,
            icon: BadgeCheck,
            value: "15+",
            label: "Years Experience"
        },
        {
            id: 2,
            icon: UsersRound,
            value: "500+",
            label: "Happy Clients"
        },
        {
            id: 3,
            icon: Star,
            value: "4.9★",
            label: "Average Rating"
        },
        {
            id: 4,
            icon: Sparkles,
            value: "100%",
            label: "Satisfaction"
        }
    ];

    return (
        <section className="relative w-full py-20 px-6 overflow-hidden">

            {/* premium orange background */}
            <div className="absolute inset-0 bg-linear-to-r from-[#d96900] via-[#fe9a00] to-[#d96900]" />

            {/* soft overlays for depth */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-120 h-120 bg-white/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-md h-112 bg-black/10 blur-3xl rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -3 }}
                                className="group flex flex-col items-center text-center"
                            >

                                {/* icon */}
                                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition">
                                    <Icon size={22} className="text-white" />
                                </div>

                                {/* value */}
                                <p className="mt-4 text-3xl md:text-4xl font-light text-white tracking-wide">
                                    {item.value}
                                </p>

                                {/* label */}
                                <p className="text-sm text-white/80 mt-2">
                                    {item.label}
                                </p>

                            </motion.div>
                        );

                    })}

                </div>

            </div>
        </section>
    );
}

export default StatsBar;