import { motion } from "framer-motion";
import AboutImg from "../assets/About/AboutImg.png";

import {
    aboutText,
    aboutImage,
    listContainer,
    listItem,
    imageCard,
    titleLine
} from "../animations/about";

function AboutUs() {

    const items = [
        "Expert Barbers",
        "Premium Products",
        "Modern Techniques",
        "Personalized Cuts"
    ];

    return (

        <section
            id="about"
            className="w-full overflow-hidden py-28 px-6 bg-white relative"
        >

            {/* Background glow */}
            <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] bg-[#fe9a00]/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-[#d58a3b]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}

                    <motion.div
                        variants={aboutText}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        <div className="inline-flex items-center bg-[#fef3c6] px-5 py-2 rounded-full">

                            <p className="text-[#d58a3b] font-medium tracking-wide">

                                About Us

                            </p>

                        </div>

                        <div className="mt-8">

                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">

                                <span className="text-[#101522]">

                                    Precision meets

                                </span>

                                <br />

                                <span className="text-[#d58a3b]">

                                    modern style

                                </span>

                            </h2>

                            <motion.div
                                variants={titleLine}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="h-1 bg-[#d58a3b] rounded-full mt-6"
                            />

                        </div>

                        <p className="mt-8 text-gray-600 leading-8 text-lg max-w-xl">

                            At Cutly, we merge traditional barber artistry
                            with modern techniques to create sharp, clean,
                            and confident looks tailored to every client.

                        </p>

                        <motion.div
                            variants={listContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6 mt-10"
                        >

                            {items.map((item) => (

                                <motion.div
                                    key={item}
                                    variants={listItem}
                                    className="flex items-center gap-3"
                                >

                                    <div className="bg-[#d58a3b] w-3 h-3 rounded-full" />

                                    <p className="font-medium text-[#101522]">

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
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-[#fe9a00]/20 to-transparent rounded-3xl blur-3xl" />

                        {/* Floating card */}

                        <motion.div
                            variants={imageCard}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="absolute -left-8 bottom-8 z-20 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100"
                        >

                            <p className="text-3xl font-bold text-[#d58a3b]">

                                500+

                            </p>

                            <p className="text-sm text-gray-500">

                                Satisfied Clients

                            </p>

                        </motion.div>

                        <motion.img
                            src={AboutImg}
                            alt="About"
                            whileHover={{
                                scale: 1.03
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            className="rounded-3xl shadow-2xl w-full"
                        />

                    </motion.div>

                </div>

            </div>

        </section>

    );
}

export default AboutUs;