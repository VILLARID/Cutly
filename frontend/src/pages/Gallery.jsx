import { motion } from "framer-motion";

import Cut1 from "../assets/Gallery/Cut1.jpg";
import Cut2 from "../assets/Gallery/Cut2.jpg";
import Cut3 from "../assets/Gallery/Cut3.jpg";
import Cut4 from "../assets/Gallery/Cut4.jpg";
import Cut5 from "../assets/Gallery/Cut5.jpg";
import Cut6 from "../assets/Gallery/Cut6.jpg";

import {
    galleryHeader,
    galleryImage
} from "../animations/gallery";

function Gallery() {

    const images = [Cut1, Cut2, Cut3, Cut4, Cut5, Cut6];

    return (

        <section
            id="gallery"
            className="relative w-full py-28 px-6 bg-[#f9fafb] overflow-hidden"
        >

            {/* background glow */}

            <div className="absolute top-20 left-10 w-80 h-80 bg-[#fe9a00]/10 rounded-full blur-3xl" />

            <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d58a3b]/10 rounded-full blur-3xl" />

            {/* Header */}

            <motion.div
                variants={galleryHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-5"
            >

                <div className="bg-[#fef3c6] px-5 py-2 rounded-full">

                    <p className="text-[#d58a3b] text-sm font-medium">

                        Gallery

                    </p>

                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#101522]">

                    Our Work Speaks

                </h2>

                <p className="text-gray-600 max-w-md">

                    Every cut tells a story of precision,
                    detail, and modern style.

                </p>

            </motion.div>

            {/* GRID */}

            <div className="mt-14 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5">

                {images.map((img, index) => {

                    const isLarge = index === 0 || index === 3;

                    return (

                        <motion.div
                            key={index}
                            variants={galleryImage}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2
                            }}
                            transition={{
                                delay: index * 0.15
                            }}
                            className={`relative overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition
                            ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                        `}
                        >

                            <img
                                src={img}
                                alt={`Cut ${index + 1}`}
                                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                            <div className="absolute top-3 right-3 w-6 h-6 bg-[#d58a3b] rotate-45 opacity-80 group-hover:rotate-90 transition" />

                        </motion.div>

                    );
                })}

            </div>

        </section>

    );
}

export default Gallery;