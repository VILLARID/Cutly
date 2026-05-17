import { UsersRound, Star, Sparkles, BadgeCheck } from "lucide-react";

function StatsBar() {

    const stats = [
        { id: 1, icon: BadgeCheck, value: "15+", label: "Years Experience" },
        { id: 2, icon: UsersRound, value: "500+", label: "Happy Clients" },
        { id: 3, icon: Star, value: "4.9★", label: "Average Rating" },
        { id: 4, icon: Sparkles, value: "100%", label: "Satisfaction" }
    ];

    return (

        <section className="w-full bg-[#d96900] py-16 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Mobile + Desktop grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.id}
                                className="flex flex-col items-center justify-center text-white text-center gap-3 transition active:scale-105 md:hover:scale-105 duration-300"
                            >

                                {/* Icon */}
                                <Icon size={28} className="text-white/90" />

                                {/* Value */}
                                <div className="flex items-end gap-1">

                                    <p className="text-3xl font-bold">
                                        {item.value}
                                    </p>

                                </div>

                                {/* Label */}
                                <p className="text-sm text-white/80">
                                    {item.label}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default StatsBar;