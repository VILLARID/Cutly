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
            className="relative w-full py-28 px-6 bg-[#f8fafc] overflow-hidden"
        >

            {/* soft premium background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-[#fe9a00]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-10 w-[28rem] h-[28rem] bg-slate-200/40 blur-3xl rounded-full" />
            </div>

            {/* HEADER */}
            <motion.div
                variants={galleryHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="relative text-center max-w-2xl mx-auto"
            >
                <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
                    Gallery
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-4">
                    Real cuts,
                    <br />
                    <span className="text-[#fe9a00] font-semibold">
                        real precision
                    </span>
                </h2>

                <p className="text-slate-600 mt-6">
                    Every haircut reflects detail, technique and modern barber craftsmanship.
                </p>
            </motion.div>

            {/* LAYOUT */}
            <div className="relative mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* HERO IMAGE (big impact) */}
                <motion.div
                    variants={galleryImage}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl shadow-xl"
                >
                    <img
                        src={images[0]}
                        className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />

                    <div className="absolute bottom-4 left-4 text-white text-sm bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl">
                        Signature Fade Style
                    </div>
                </motion.div>

                {/* SMALL IMAGES */}
                {images.slice(1).map((img, index) => (
                    <motion.div
                        key={index}
                        variants={galleryImage}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl"
                    >
                        <img
                            src={img}
                            className="w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-500"
                        />

                        {/* subtle overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition" />
                    </motion.div>
                ))}

            </div>
        </section>
    );
}

export default Gallery;