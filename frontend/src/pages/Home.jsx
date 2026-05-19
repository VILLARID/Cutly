import { motion } from "framer-motion";
import background from "../assets/Home/background.jpg";
import white_logo from "../assets/Home/white_logo.png";

import {
    fadeUp,
    scaleIn,
    staggerContainer,
} from "../animations/variants";

function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">

                <img
                    src={background}
                    alt="Background"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-b from-[#101522]/70 via-[#101522]/85 to-black"></div>

            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center"
                >

                    {/* Logo */}
                    <motion.div
                        variants={scaleIn}
                        className="mb-6 backdrop-blur-lg bg-white/5 border border-white/10 rounded-full p-4"
                    >

                        <img
                            src={white_logo}
                            alt="Cutly Logo"
                            className="w-20 h-20"
                        />

                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-white text-5xl sm:text-7xl font-light leading-tight"
                    >

                        Fresh Cuts <br />

                        <span className="font-semibold text-[#fe9a00]">
                            Clean Style
                        </span>

                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUp}
                        className="text-gray-300 mt-6 max-w-md text-base sm:text-lg leading-relaxed"
                    >

                        Premium barber experience with precision cuts,
                        modern styles and a clean finish every visit.

                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                    >

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-[#fe9a00] text-white font-medium hover:shadow-[0_0_30px_rgba(254,154,0,0.5)]"
                        >

                            Book Appointment

                        </motion.a>

                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20"
                        >

                            View Services

                        </motion.a>

                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}

export default Home;