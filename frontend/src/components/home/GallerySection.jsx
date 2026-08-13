import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { useReveal } from "./motion";

import lowFade from "../../assets/Gallery/low-fade.jpg";
import texturedCrop from "../../assets/Gallery/textured-crop.jpg";
import classicCut from "../../assets/Gallery/classic-cut.jpg";
import beardSculpt from "../../assets/Gallery/beard-sculpt.jpg";
import taperFade from "../../assets/Gallery/taper-fade.jpg";
import curlyCrop from "../../assets/Gallery/curly-crop.jpg";
import backFade from "../../assets/Gallery/back-fade.jpg";
import beardDetail from "../../assets/Gallery/beard-detail.jpg";

const galleryItems = [
    {
        id: 1,
        title: "Low Fade",
        subtitle: "Precision fade with natural texture.",
        category: "Fade",
        image: lowFade,
    },
    {
        id: 2,
        title: "Textured Crop",
        subtitle: "Natural movement & texture.",
        category: "Crop",
        image: texturedCrop,
    },
    {
        id: 3,
        title: "Classic Cut",
        subtitle: "Timeless & refined.",
        category: "Classic",
        image: classicCut,
    },
    {
        id: 4,
        title: "Beard Sculpt",
        subtitle: "Sharp lines. Clean finish.",
        category: "Beard",
        image: beardSculpt,
    },
    {
        id: 5,
        title: "Taper Fade",
        subtitle: "Clean taper. Balanced look.",
        category: "Fade",
        image: taperFade,
    },
    {
        id: 6,
        title: "Curly Crop",
        subtitle: "Defined shape, natural texture.",
        category: "Crop",
        image: curlyCrop,
    },
    {
        id: 7,
        title: "Back Fade",
        subtitle: "Crisp blend, clean nape.",
        category: "Fade",
        image: backFade,
    },
    {
        id: 8,
        title: "Beard Detail",
        subtitle: "Precise lines, sharp edges.",
        category: "Beard",
        image: beardDetail,
    },
];

const featuredDefault = galleryItems[0];
const smallItems = galleryItems.slice(1, 5);
const bottomItems = galleryItems.slice(5);

function GallerySection() {
    const reveal = useReveal();
    const [activeId, setActiveId] = useState(featuredDefault.id);

    const activeItem = galleryItems.find((item) => item.id === activeId) ?? featuredDefault;

    const prev = () =>
        setActiveId((id) => (id === 1 ? galleryItems.length : id - 1));
    const next = () =>
        setActiveId((id) => (id === galleryItems.length ? 1 : id + 1));

    const arrowButtonClasses =
        "flex size-11 items-center justify-center rounded-md border border-[rgba(217,165,46,0.25)] text-[#DDA52A] transition-colors duration-200 hover:border-[#DDA52A] hover:bg-[#DDA52A] hover:text-[#16130D]";

    return (
        <section id="gallery" className="overflow-hidden bg-[#0E0E0D] py-12 md:py-[60px] lg:py-[80px]">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <motion.div
                    {...reveal}
                    className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#DDA52A]">
                            <span className="inline-block h-px w-8 bg-[#DDA52A]/70" aria-hidden="true" />
                            Gallery
                        </p>

                        <h2 className="mt-5 font-serif text-[40px] font-medium leading-[1] text-[#F4F0E8] sm:text-[46px] lg:text-[52px]">
                            Cuts that speak
                            <br />
                            <span className="text-[#DDA52A]">for themselves.</span>
                        </h2>
                    </div>

                    <a
                        href="#gallery"
                        className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-[#DDA52A]/40 pb-1 text-sm font-semibold text-[#F4F0E8] transition-colors duration-200 hover:border-[#DDA52A] hover:text-[#DDA52A] lg:self-auto"
                    >
                        View Full Gallery
                        <ArrowRight
                            className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                            aria-hidden="true"
                        />
                    </a>
                </motion.div>

                <div className="mt-10 grid gap-4 lg:mt-[42px] lg:grid-cols-2">
                    <motion.figure {...reveal} className="group relative overflow-hidden rounded-[10px] border border-white/[0.04]">
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0F0E0C] sm:aspect-[16/9] lg:aspect-[16/10]">
                            <AnimatePresence initial={false}>
                                <motion.img
                                    key={activeItem.id}
                                    src={activeItem.image}
                                    alt={`${activeItem.title} haircut at Cutly`}
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </AnimatePresence>

                            <div
                                className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_40%,rgba(15,14,12,0.9)_100%)]"
                                aria-hidden="true"
                            />

                            <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                                <div>
                                    <p className="font-serif text-2xl text-[#F4F0E8]">
                                        {activeItem.title}
                                    </p>
                                    <p className="mt-1 text-sm text-white/60">
                                        {activeItem.subtitle}
                                    </p>
                                </div>
                                <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-[rgba(217,165,46,0.4)] text-[#DDA52A] transition-transform duration-300 group-hover:translate-x-[3px]">
                                    <ArrowUpRight className="size-4" aria-hidden="true" />
                                </span>
                            </figcaption>
                        </div>
                    </motion.figure>

                    <div className="grid grid-cols-2 gap-4">
                        {smallItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveId(item.id)}
                                {...reveal}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: (index % 2) * 0.06,
                                }}
                                aria-label={`Show ${item.title} in gallery`}
                                className={`group relative overflow-hidden rounded-[8px] border text-left transition-all duration-300 ${
                                    activeItem.id === item.id
                                        ? "border-[rgba(217,165,46,0.5)]"
                                        : "border-white/[0.04] hover:border-[rgba(217,165,46,0.3)]"
                                }`}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-[#0F0E0C]">
                                    <img
                                        src={item.image}
                                        alt={`${item.title} haircut at Cutly`}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.025]"
                                    />
                                    <div
                                        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_45%,rgba(15,14,12,0.9)_100%)]"
                                        aria-hidden="true"
                                    />
                                    <div className="absolute inset-x-3 bottom-3">
                                        <p className="font-serif text-base text-[#F4F0E8] transition-transform duration-300 ease-out group-hover:-translate-y-[2px]">
                                            {item.title}
                                        </p>
                                        <p className="mt-0.5 line-clamp-1 text-xs text-white/60">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                    <span className="absolute bottom-3 right-3 text-[#DDA52A] opacity-80 transition-transform duration-300 ease-out group-hover:translate-x-[3px]">
                                        <ArrowUpRight className="size-4" aria-hidden="true" />
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
                    {bottomItems.map((item, index) => (
                        <motion.figure
                            key={item.id}
                            {...reveal}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: (index % 3) * 0.06,
                            }}
                            className="group relative overflow-hidden rounded-[8px] border border-white/[0.04]"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-[#0F0E0C]">
                                <img
                                    src={item.image}
                                    alt={`${item.title} haircut at Cutly`}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.025]"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    aria-hidden="true"
                                />
                                <figcaption className="absolute bottom-3 left-3 translate-y-2 text-sm font-medium text-[#F4F0E8] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    {item.title}
                                </figcaption>
                            </div>
                        </motion.figure>
                    ))}
                </div>

                <motion.div
                    {...reveal}
                    className="mt-6 flex items-center justify-center gap-5 lg:mt-8"
                >
                    <button
                        type="button"
                        onClick={prev}
                        aria-label="Previous gallery image"
                        className={arrowButtonClasses}
                    >
                        <ChevronLeft className="size-5" aria-hidden="true" />
                    </button>
                    <p className="font-serif text-base tabular-nums text-white/50">
                        <span className="text-[#DDA52A]">
                            {String(activeItem.id).padStart(2, "0")}
                        </span>
                        {" / "}
                        {String(galleryItems.length).padStart(2, "0")}
                    </p>
                    <button
                        type="button"
                        onClick={next}
                        aria-label="Next gallery image"
                        className={arrowButtonClasses}
                    >
                        <ChevronRight className="size-5" aria-hidden="true" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default GallerySection;
