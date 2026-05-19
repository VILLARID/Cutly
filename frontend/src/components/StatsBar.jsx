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
        <section className="w-full bg-[#d96900] py-16 px-4">

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.id}
                                initial={{
                                    opacity: 0,
                                    y: 40
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}
                                viewport={{
                                    once: true
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.15
                                }}
                                whileHover={{
                                    scale: 1.05
                                }}
                                className="flex flex-col items-center justify-center text-white text-center gap-3"
                            >

                                <Icon
                                    size={28}
                                    className="text-white/90"
                                />

                                <motion.p
                                    initial={{
                                        scale: 0
                                    }}
                                    whileInView={{
                                        scale: 1
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2
                                    }}
                                    className="text-3xl font-bold"
                                >
                                    {item.value}
                                </motion.p>

                                <p className="text-sm text-white/80">
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