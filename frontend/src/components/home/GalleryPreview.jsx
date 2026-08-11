import { motion } from "framer-motion";

import SectionHeader from "./SectionHeader";
import { useReveal } from "./motion";

import Cut1 from "../../assets/Gallery/Cut1.jpg";
import Cut2 from "../../assets/Gallery/Cut2.jpg";
import Cut3 from "../../assets/Gallery/Cut3.jpg";
import Cut4 from "../../assets/Gallery/Cut4.jpg";
import Cut5 from "../../assets/Gallery/Cut5.jpg";
import Cut6 from "../../assets/Gallery/Cut6.jpg";

const images = [
    { src: Cut1, label: "Signature Fade" },
    { src: Cut2, label: "Skin Fade" },
    { src: Cut3, label: "Classic Cut" },
    { src: Cut4, label: "Beard Sculpting" },
    { src: Cut5, label: "Burst Fade" },
    { src: Cut6, label: "Premium Grooming" },
];

// editorial mosaic: first image features larger on desktop
const aspectClasses = [
    "col-span-2 aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto",
    "aspect-[4/5] lg:aspect-auto",
    "aspect-[4/5] lg:aspect-auto",
    "aspect-[3/4] lg:aspect-auto",
    "aspect-[3/4] lg:aspect-auto",
    "aspect-[3/4] lg:aspect-auto",
];

function GalleryPreview() {
    const reveal = useReveal();

    return (
        <section id="gallery" className="overflow-hidden bg-white py-16 lg:py-28">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Our Gallery"
                    title={
                        <>
                            Cuts that speak
                            <span className="text-[#C97B00]"> for themselves.</span>
                        </>
                    }
                    link={{
                        label: "View Full Gallery",
                        ariaLabel: "View the full gallery",
                        href: "#gallery",
                    }}
                />

                <div className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:auto-rows-[200px] lg:grid-cols-3 lg:gap-4 2xl:auto-rows-[220px]">
                    {images.map((item, index) => (
                        <motion.figure
                            key={item.src}
                            {...reveal}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: (index % 3) * 0.06,
                            }}
                            className="group relative overflow-hidden rounded-[14px]"
                        >
                            <div className={`h-full w-full overflow-hidden ${aspectClasses[index]}`}>
                                <img
                                    src={item.src}
                                    alt={`${item.label} haircut at Cutly`}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* soft bottom label */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                aria-hidden="true"
                            />
                            <figcaption className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                {item.label}
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default GalleryPreview;