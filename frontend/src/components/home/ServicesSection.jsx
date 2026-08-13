import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Clock,
    Droplets,
    Gauge,
    Package,
    Scissors,
    Sparkles,
    UserRound,
} from "lucide-react";

import { useReveal } from "./motion";

import classicHaircut from "../../assets/services/classic-haircut.jpg";
import skinFade from "../../assets/services/skin-fade.jpg";
import haircutBeard from "../../assets/services/haircut-beard.jpg";
import beardSculpting from "../../assets/services/beard-sculpting.jpg";
import hotTowelShave from "../../assets/services/hot-towel-shave.jpg";
import premiumGrooming from "../../assets/services/premium-grooming.jpg";

const services = [
    {
        name: "Classic Haircut",
        desc: "Timeless cut with scissors & clippers.",
        price: "$35",
        duration: "30 min",
        icon: Scissors,
        image: classicHaircut,
    },
    {
        name: "Skin Fade",
        desc: "Clean, sharp fade with a flawless finish.",
        price: "$40",
        duration: "35 min",
        icon: Gauge,
        image: skinFade,
    },
    {
        name: "Haircut + Beard",
        desc: "Complete grooming for a sharp look.",
        price: "$55",
        duration: "50 min",
        icon: Sparkles,
        image: haircutBeard,
    },
    {
        name: "Beard Sculpting",
        desc: "Sculpted beard shape with detail & precision.",
        price: "$30",
        duration: "25 min",
        icon: UserRound,
        image: beardSculpting,
    },
    {
        name: "Hot Towel Shave",
        desc: "Traditional shave for the ultimate smoothness.",
        price: "$45",
        duration: "40 min",
        icon: Droplets,
        image: hotTowelShave,
    },
    {
        name: "Premium Grooming",
        desc: "Full grooming experience for hair, beard & skin.",
        price: "$65",
        duration: "60 min",
        icon: Package,
        image: premiumGrooming,
    },
];

function ServicesSection() {
    const reveal = useReveal(0.15);
    const trackRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const updateArrows = useCallback(() => {
        const el = trackRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        setAtStart(el.scrollLeft <= 4);
        setAtEnd(el.scrollLeft >= maxScroll - 4);
    }, []);

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        updateArrows();
        const onResize = () => updateArrows();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [updateArrows]);

    const scrollByCard = useCallback((direction) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector("[data-card]");
        const step = card ? card.getBoundingClientRect().width : 320;
        el.scrollBy({ left: direction * (step + 20), behavior: "smooth" });
    }, []);

    return (
        <section
            id="services"
            className="overflow-hidden bg-[#0D0D0C] py-12 md:py-[60px] lg:py-[70px]"
        >
            <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <motion.div {...reveal} className="relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.26em] text-[#DDA52A]">
                            OUR SERVICES
                        </p>
                        <span
                            className="mx-auto mt-3 block h-px w-[34px] bg-[#DDA52A]"
                            aria-hidden="true"
                        />
                        <h2 className="mt-4 font-serif text-[32px] font-medium leading-[1.05] text-[#F4F0E8] sm:text-[40px] lg:text-[46px]">
                            Premium Services.{" "}
                            <span className="text-[#DDA52A]">Precision Results.</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-[650px] text-base leading-relaxed text-white/60">
                            Every service is crafted with precision, using premium products to
                            deliver a look that&rsquo;s authentic to you.
                        </p>
                    </div>

                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 gap-2 sm:flex">
                        <button
                            type="button"
                            onClick={() => scrollByCard(-1)}
                            disabled={atStart}
                            aria-label="Previous services"
                            className="flex size-11 items-center justify-center rounded-md border border-[rgba(217,165,46,0.25)] text-[#DDA52A] transition-colors duration-200 hover:border-[#DDA52A] hover:bg-[#DDA52A] hover:text-[#16130D] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#DDA52A]"
                        >
                            <ChevronLeft className="size-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollByCard(1)}
                            disabled={atEnd}
                            aria-label="Next services"
                            className="flex size-11 items-center justify-center rounded-md border border-[rgba(217,165,46,0.25)] text-[#DDA52A] transition-colors duration-200 hover:border-[#DDA52A] hover:bg-[#DDA52A] hover:text-[#16130D] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#DDA52A]"
                        >
                            <ChevronRight className="size-5" aria-hidden="true" />
                        </button>
                    </div>
                </motion.div>

                <div
                    ref={trackRef}
                    role="region"
                    aria-label="Barber services"
                    onScroll={updateArrows}
                    className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto lg:mt-10"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.name}
                                {...reveal}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: (index % 6) * 0.05,
                                }}
                                className="w-[85vw] max-w-[340px] shrink-0 snap-start sm:w-[300px] lg:w-[320px] xl:w-[330px] min-[1500px]:w-[320px]"
                            >
                                <article className="group h-full overflow-hidden rounded-[10px] border border-[rgba(217,165,46,0.16)] bg-[#151411] transition-[transform,border-color,box-shadow] duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-[rgba(217,165,46,0.4)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)]">
                                    <div className="relative h-[210px] overflow-hidden lg:h-[225px]">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition-transform duration-[250ms] ease-out group-hover:scale-[1.025]"
                                        />
                                        <div
                                            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#151411] to-transparent"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="p-5 pt-4">
                                        <div className="flex items-center gap-3">
                                            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[rgba(217,165,46,0.3)] bg-[#1B1A17] text-[#DDA52A]">
                                                <Icon
                                                    className="size-5"
                                                    strokeWidth={1.8}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            <h3 className="font-serif text-xl font-medium leading-tight text-[#F4F0E8]">
                                                {service.name}
                                            </h3>
                                        </div>

                                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/60">
                                            {service.desc}
                                        </p>

                                        <div
                                            className="my-4 h-px bg-[rgba(217,165,46,0.14)]"
                                            aria-hidden="true"
                                        />

                                        <div className="flex items-end justify-between gap-2">
                                            <span className="font-serif text-2xl leading-none text-[#DDA52A]">
                                                {service.price}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-[13px] text-white/60">
                                                <Clock className="size-3.5" aria-hidden="true" />
                                                {service.duration}
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-8 flex justify-center">
                    <a
                        href="#services"
                        className="group inline-flex h-[52px] items-center gap-2 rounded-[7px] border border-[#DDA52A]/70 px-[30px] text-sm font-semibold tracking-wide text-[#DDA52A] transition-colors duration-[250ms] ease-out hover:bg-[#DDA52A] hover:text-[#16130D]"
                    >
                        See All Services
                        <ArrowRight
                            className="size-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-[3px]"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
