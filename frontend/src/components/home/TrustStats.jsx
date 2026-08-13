import { motion } from "framer-motion";
import { Star, Users, UsersRound, Award } from "lucide-react";

import { useReveal } from "./motion";

const stats = [
    { value: "500+", label: "Happy Clients", icon: UsersRound },
    { value: "4.9", label: "Average Rating", icon: Star },
    { value: "8+", label: "Years Experience", icon: Award },
    { value: "3", label: "Professional Barbers", icon: Users },
];

function TrustStats() {
    const reveal = useReveal();

    return (
        <div className="mt-6 mb-10 lg:mb-14">
            <motion.div
                {...reveal}
                className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_18px_40px_-30px_rgba(23,23,23,0.22)]"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-black/[0.06]">
                    {stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className="flex flex-col items-start gap-2.5 px-6 py-6 md:flex-row md:items-center md:gap-4 md:px-8 md:py-7"
                            >
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-[#E39100]/10 text-[#C97B00]">
                                    <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="font-serif text-2xl font-medium leading-none text-[#171717]">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1.5 text-sm text-neutral-500">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}

export default TrustStats;