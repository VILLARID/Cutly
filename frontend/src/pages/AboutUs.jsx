import AboutImg from "../assets/About/AboutImg.png";

function AboutUs() {

    return (

        <section id="about" className="w-full overflow-hidden py-30 px-5">

            <div className="max-w-7xl mx-auto">

                {/* ================= MOBILE ================= */}

                <div className="lg:hidden">

                    <div className="flex justify-center bg-[#fef3c6] rounded-full w-20 py-1">

                        <p className="text-[#d58a3b] text-sm">
                            About Us
                        </p>

                    </div>

                    <div className="flex gap-1 text-2xl font-bold mt-5">

                        <span className="text-[#101522]">
                            Precision meets
                        </span>

                        <span className="text-[#d58a3b]">
                            style
                        </span>

                    </div>

                    <div className="mt-4 text-gray-700">

                        <p>

                            At Cutly, we don't just cut hair—we craft experiences.
                            Our master barbers blend traditional techniques
                            with modern trends to deliver sharp, clean cuts every time.

                        </p>

                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4">

                        {[
                            "Expert Barbers",
                            "Premium Products",
                            "Modern Techniques",
                            "Personalized Cuts"
                        ].map((item) => (

                            <div
                                key={item}
                                className="flex items-center gap-2"
                            >

                                <div className="bg-[#d58a3b] w-2 h-2 rounded-full"/>

                                <p className="text-sm font-medium">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                    <img
                        src={AboutImg}
                        alt="About"
                        className="mt-10 rounded-2xl"
                    />

                </div>


                {/* ================= DESKTOP ================= */}

                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

                    {/* Left */}
                    <div>

                        <div className="flex justify-center bg-[#fef3c6] rounded-full w-24 py-2">

                            <p className="text-[#d58a3b]">
                                About Us
                            </p>

                        </div>

                        <h2 className="text-5xl font-bold mt-6 leading-tight">

                            <span className="text-[#101522]">
                                Precision meets
                            </span>

                            <br/>

                            <span className="text-[#d58a3b]">
                                modern style
                            </span>

                        </h2>

                        <p className="mt-8 text-gray-600 leading-8 text-lg">

                            At Cutly, we don't just cut hair—we create
                            premium experiences. Our barbers combine
                            classic craftsmanship with modern techniques
                            to deliver sharp looks and confidence.

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
                                    className="flex items-center gap-3"
                                >

                                    <div className="bg-[#d58a3b] w-3 h-3 rounded-full"/>

                                    <p className="font-medium text-[#101522]">
                                        {item}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* Right */}

                    <div className="relative">

                        <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-[#fe9a00]/10 rounded-full blur-3xl"/>

                        <img
                            src={AboutImg}
                            alt="About"
                            className="rounded-3xl shadow-2xl w-full"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutUs;