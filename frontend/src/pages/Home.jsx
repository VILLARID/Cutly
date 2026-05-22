import { motion } from "framer-motion";
import background from "../assets/Home/background.jpg";
import white_logo from "../assets/Home/white_logo.png";

import { fadeUp, scaleIn, staggerContainer } from "../animations/hero";

function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <img
                    src={background}
                    alt="background"
                    className="w-full h-full object-cover scale-110"
                />

                {/* stronger cinematic overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        {/* badge */}
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-6"
                        >
                            Premium Barber Experience
                        </motion.div>

                        {/* title */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-white text-5xl md:text-7xl font-light leading-tight"
                        >
                            More than a cut,
                            <br />
                            <span className="text-[#fe9a00] font-semibold">
                                it’s your image
                            </span>
                        </motion.h1>

                        {/* subtitle */}
                        <motion.p
                            variants={fadeUp}
                            className="text-gray-300 mt-6 text-base md:text-lg max-w-md leading-relaxed"
                        >
                            Modern barber studio focused on precision, style and confidence.
                            Get a clean look that actually fits you.
                        </motion.p>

                        {/* stats */}
                        <motion.div
                            variants={fadeUp}
                            className="flex gap-6 mt-8 text-sm text-gray-400"
                        >
                            <div>
                                <span className="text-white font-semibold">500+</span>
                                <p>Clients</p>
                            </div>
                            <div>
                                <span className="text-white font-semibold">4.9★</span>
                                <p>Rating</p>
                            </div>
                            <div>
                                <span className="text-white font-semibold">Fast</span>
                                <p>Booking</p>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row gap-4 mt-10"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full bg-[#fe9a00] text-black font-semibold shadow-lg hover:shadow-[0_0_40px_rgba(254,154,0,0.4)] transition"
                            >
                                Book Now
                            </motion.a>

                            <motion.a
                                href="#services"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 transition"
                            >
                                See Services
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT VISUAL */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                        className="relative hidden md:flex justify-center"
                    >
                        <div className="relative w-95 h-125 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

                            <img
                                src={background}
                                alt="barber"
                                className="w-full h-full object-cover scale-110"
                            />

                            {/* glow effect */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                            {/* floating badge */}
                            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white text-sm">
                                Next available: Today
                            </div>
                        </div>

                        {/* glow behind card */}
                        <div className="absolute -inset-10 bg-[#fe9a00]/10 blur-3xl rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Home;