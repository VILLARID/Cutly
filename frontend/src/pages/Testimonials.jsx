function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "Michael Johnson",
            role: "Regular Client",
            review: "Best haircut experience I've had. The attention to detail is incredible.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            id: 2,
            name: "David Smith",
            role: "Entrepreneur",
            review: "Professional atmosphere and amazing service. Highly recommended.",
            rating: "⭐⭐⭐⭐⭐"
        },
        {
            id: 3,
            name: "James Wilson",
            role: "Designer",
            review: "Always leave feeling confident. Great team and excellent cuts.",
            rating: "⭐⭐⭐⭐⭐"
        }
    ];

    return (
        <>
            <section
                id="testimonials"
                className="relative w-full min-h-screen pt-24 px-6 bg-[#f9fafb]"
            >

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4">

                    <div className="bg-[#fef3c6] rounded-full px-5 py-2">
                        <p className="text-[#d58a3b] text-sm">
                            Testimonials
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#101522]">
                        Client Stories
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        Don't just take our word for it—hear from our satisfied clients
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

                    {testimonials.map((client) => (
                        <div
                            key={client.id}
                            className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition"
                        >

                            <p className="text-xl mb-3">
                                {client.rating}
                            </p>

                            <p className="text-gray-600 mb-6">
                                "{client.review}"
                            </p>

                            <div className="flex items-center gap-4">

                                {/* Avatar */}
                                <div className="w-12 h-12 rounded-full bg-[#dc7c17] flex items-center justify-center text-white font-bold">
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
        </>
    )
}

export default Testimonials;