import AboutImg from "../assets/About/AboutImg.png";

function AboutUs() {
    return (
        <section
            id="about"
            className="w-full overflow-hidden py-28 px-6 bg-white relative"
        >

            {/* soft background glow */}
            <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] bg-[#fe9a00]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-[#d58a3b]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">

                {/* ================= MOBILE ================= */}
                <div className="lg:hidden">

                    <div className="inline-flex items-center bg-[#fef3c6] px-4 py-1 rounded-full">
                        <p className="text-[#d58a3b] text-sm font-medium">
                            About Us
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-6 leading-snug">
                        <span className="text-[#101522]">Precision meets</span>{" "}
                        <span className="text-[#d58a3b]">style</span>
                    </h2>

                    <p className="mt-5 text-gray-600 leading-relaxed">
                        At Cutly, we don’t just cut hair—we shape identity.
                        Every detail is crafted to reflect confidence,
                        personality, and modern style.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        {[
                            "Expert Barbers",
                            "Premium Products",
                            "Modern Techniques",
                            "Personalized Cuts"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <div className="bg-[#d58a3b] w-2 h-2 rounded-full" />
                                <p className="text-sm font-medium text-[#101522]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <img
                        src={AboutImg}
                        alt="About"
                        className="mt-10 rounded-2xl shadow-xl hover:scale-[1.01] transition duration-500"
                    />
                </div>

                {/* ================= DESKTOP ================= */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-28 lg:items-center">

                    {/* LEFT */}
                    <div>

                        <div className="inline-flex items-center bg-[#fef3c6] px-5 py-2 rounded-full">
                            <p className="text-[#d58a3b] font-medium tracking-wide">
                                About Us
                            </p>
                        </div>

                        <h2 className="text-5xl font-bold mt-8 leading-tight">
                            <span className="text-[#101522]">Precision meets</span>
                            <br />
                            <span className="text-[#d58a3b]">modern style</span>
                        </h2>

                        <p className="mt-8 text-gray-600 leading-8 text-lg max-w-xl">
                            At Cutly, we merge traditional barber artistry
                            with modern techniques to create sharp, clean,
                            and confident looks tailored to every client.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            {[
                                "Expert Barbers",
                                "Premium Products",
                                "Modern Techniques",
                                "Personalized Cuts"
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="bg-[#d58a3b] w-3 h-3 rounded-full group-hover:scale-125 transition" />
                                    <p className="font-medium text-[#101522]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">

                        {/* decorative frame */}
                        <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-[#fe9a00]/10 to-transparent rounded-3xl blur-2xl" />

                        <img
                            src={AboutImg}
                            alt="About"
                            className="rounded-3xl shadow-2xl w-full hover:scale-[1.02] transition duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutUs;