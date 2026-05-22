import { motion } from "framer-motion";
import AboutImg from "../assets/About/AboutImg.png";

import {
    aboutContainer,
    aboutText,
    aboutImage,
    listItem,
    imageCard,
} from "../animations/about";

function AboutUs() {
    const items = [
        "Precision modern haircuts",
        "Experienced professional barbers",
        "Personalized styling approach",
        "Clean, sharp, consistent results",
    ];

    return (
        <section
            id="about"
            className="relative w-full py-28 px-6 bg-[#f8fafc] overflow-hidden"
        >
            {/* soft premium background */}
            <div className="absolute inset-0">
                <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-[#fe9a00]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-slate-200/40 blur-3xl rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        variants={aboutContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        {/* label */}
                        <motion.span
                            variants={aboutText}
                            className="text-xs tracking-[0.2em] text-slate-500 uppercase"
                        >
                            About Cutly Studio
                        </motion.span>

                        {/* headline */}
                        <motion.h2
                            variants={aboutText}
                            className="text-4xl md:text-5xl font-light text-slate-900 mt-4 leading-tight"
                        >
                            Sharp cuts,
                            <br />
                            <span className="text-[#fe9a00] font-semibold">
                                modern confidence
                            </span>
                        </motion.h2>

                        {/* accent line */}
                        <motion.div
                            variants={aboutText}
                            className="w-16 h-[2px] bg-[#fe9a00] mt-5 rounded-full"
                        />

                        {/* description */}
                        <motion.p
                            variants={aboutText}
                            className="mt-6 text-slate-600 leading-relaxed max-w-md text-base md:text-lg"
                        >
                            We combine modern barber techniques with attention to detail
                            to craft clean, sharp and personalized styles that elevate your image.
                        </motion.p>

                        {/* feature list */}
                        <motion.div className="mt-10 space-y-4">
                            {items.map((item) => (
                                <motion.div
                                    key={item}
                                    variants={listItem}
                                    className="flex items-center gap-3"
                                >
                                    <span className="w-2 h-2 rounded-full bg-[#fe9a00]" />
                                    <p className="text-slate-700 text-sm md:text-base">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        variants={aboutImage}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        className="relative"
                    >
                        {/* main image */}
                        <motion.img
                            src={AboutImg}
                            alt="Barber studio"
                            className="rounded-3xl w-full shadow-2xl border border-slate-200"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        />

                        {/* floating stats card */}
                        <motion.div
                            variants={imageCard}
                            className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-md border border-slate-200 px-5 py-3 rounded-xl shadow-lg"
                        >
                            <p className="text-[#fe9a00] font-semibold text-lg">
                                500+
                            </p>
                            <p className="text-slate-500 text-xs">
                                Happy clients served
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;