import { motion } from "framer-motion";
import { Award, Star, Users, UsersRound } from "lucide-react";

import { useReveal } from "./motion";

const stats = [
    { value: "500+", label: "Happy Clients", icon: UsersRound },
    { value: "4.9", label: "Average Rating", icon: Star },
    { value: "8+", label: "Years Experience", icon: Award },
    { value: "3", label: "Professional Barbers", icon: Users },
];

function StatsBar() {
    const reveal = useReveal(0.3);

    return (
        <section className="relative overflow-hidden bg-[#0E0E0D] py-6 lg:py-10" aria-label="Cutly in numbers">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <motion.div
                    {...reveal}
                    className="overflow-hidden rounded-[10px] border border-[rgba(217,165,46,0.22)] bg-[#131210]"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[rgba(217,165,46,0.12)]">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className="flex flex-col items-start gap-2.5 border-b border-[rgba(217,165,46,0.10)] px-5 py-6 last:border-b-0 md:flex-row md:items-center md:gap-4 md:border-b-0 md:px-8 md:py-7"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] border border-[rgba(217,165,46,0.18)] bg-[#D9A52E]/10 text-[#D9A52E]">
                                        <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="font-serif text-2xl font-medium leading-none text-[#F3EFE7]">
                                            {stat.value}
                                        </p>
                                        <p className="mt-1.5 text-[13px] text-white/60">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default StatsBar;