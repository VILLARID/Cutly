function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "Michael Johnson",
            role: "Regular Client",
            review: "Best haircut experience I've had. The attention to detail is incredible.",
            rating: 5
        },
        {
            id: 2,
            name: "David Smith",
            role: "Entrepreneur",
            review: "Professional atmosphere and amazing service. Highly recommended.",
            rating: 5
        },
        {
            id: 3,
            name: "James Wilson",
            role: "Designer",
            review: "Always leave feeling confident. Great team and excellent cuts.",
            rating: 5
        }
    ];

    return (
        <section
            id="testimonials"
            className="relative w-full py-28 px-6 bg-[#f9fafb] overflow-hidden"
        >

            {/* background glow */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-[#fe9a00]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d58a3b]/10 rounded-full blur-3xl" />

            {/* Header */}
            <div className="flex flex-col items-center text-center gap-5">

                <div className="bg-[#fef3c6] px-5 py-2 rounded-full">
                    <p className="text-[#d58a3b] text-sm font-medium">
                        Testimonials
                    </p>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#101522]">
                    Client Stories
                </h2>

                <p className="text-gray-600 max-w-md">
                    Real experiences from clients who trust our craft and precision.
                </p>

            </div>

            {/* Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {testimonials.map((client) => (
                    <div
                        key={client.id}
                        className="group relative bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >

                        {/* top accent line */}
                        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#d58a3b] to-transparent opacity-0 group-hover:opacity-100 transition" />

                        {/* rating */}
                        <div className="flex gap-1 text-[#d58a3b] mb-4">
                            {"★★★★★".split("").map((star, i) => (
                                <span key={i} className="group-hover:scale-110 transition">
                                    {star}
                                </span>
                            ))}
                        </div>

                        {/* review */}
                        <p className="text-gray-600 leading-relaxed mb-8">
                            “{client.review}”
                        </p>

                        {/* user */}
                        <div className="flex items-center gap-4">

                            {/* avatar */}
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d58a3b] to-[#fe9a00] flex items-center justify-center text-white font-semibold shadow-md">
                                {client.name[0]}
                            </div>

                            <div>
                                <h4 className="font-semibold text-[#101522]">
                                    {client.name}
                                </h4>

                                <p className="text-sm text-gray-500">
                                    {client.role}
                                </p>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Testimonials;