import { Square, MoveRight } from "lucide-react";

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
            className="relative w-full min-h-screen pt-30 px-6 bg-[#f9fafb] pb-30"
        >

            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4">

                <div className="bg-[#fef3c6] rounded-full px-5 py-2">
                    <p className="text-[#d58a3b] text-sm">
                        Our Services
                    </p>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#101522]">
                    Premium Grooming
                </h2>

                <p className="text-gray-600 max-w-md">
                    Professional services tailored to your unique style and preferences
                </p>

            </div>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-full rounded-2xl p-5 bg-white shadow flex flex-col gap-3 hover:shadow-lg transition"
                    >

                        {/* Icon */}
                        <div className="flex items-center justify-center bg-[#fef3c6] w-12 h-12 rounded-sm">
                            <Square className="text-[#d58a3b]" />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg text-[#101522]">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {service.desc}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-2">
                            <span className="text-[#d58a3b] font-semibold text-xl">
                                {service.price}
                            </span>

                            <div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                                <MoveRight className="text-gray-400 size-4" />
                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Services;