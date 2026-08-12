import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useReveal } from "./motion";

function SectionHeader({ eyebrow, title, description, link, className = "" }) {
    const reveal = useReveal();

    return (
        <motion.div
            {...reveal}
            className={`flex flex-col gap-5 md:flex-row md:items-end md:justify-between ${className}`}
        >
            <div className="max-w-2xl">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D9A52E]">
                    <span
                        className="inline-block h-px w-8 bg-[#D9A52E]/60"
                        aria-hidden="true"
                    />
                    {eyebrow}
                </p>

                <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.08] text-[#F3EFE7] md:text-[44px] lg:text-[52px]">
                    {title}
                </h2>

                {description ? (
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
                        {description}
                    </p>
                ) : null}
            </div>

            {link ? (
                <a
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-[#D9A52E]/40 pb-1 text-sm font-semibold text-[#F3EFE7] transition-colors duration-200 hover:border-[#D9A52E] hover:text-[#D9A52E] md:self-auto"
                >
                    {link.label}
                    <ArrowRight
                        className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                    />
                </a>
            ) : null}
        </motion.div>
    );
}

export default SectionHeader;