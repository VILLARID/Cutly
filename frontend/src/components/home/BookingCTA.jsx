import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";

import { useReveal } from "./motion";

function BookingCTA() {
    const reveal = useReveal();

    return (
        <section id="booking" className="overflow-hidden bg-[#0E0E0D] py-16 lg:py-20">
            <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8 2xl:px-10">
                <motion.div
                    {...reveal}
                    className="relative overflow-hidden rounded-[10px] border border-[rgba(217,165,46,0.22)] bg-[#131210] px-6 py-14 text-center sm:px-12 lg:py-16"
                >
                    {/* soft gold wash */}
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A52E]/[0.1] blur-3xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,14,13,0)_0%,rgba(217,165,46,0.05)_50%,rgba(14,14,13,0)_100%)]" />
                    </div>

                    <div className="relative">
                        <span className="mx-auto flex size-14 items-center justify-center rounded-[8px] border border-[rgba(217,165,46,0.3)] bg-[#D9A52E]/12 text-[#D9A52E]">
                            <CalendarCheck className="size-6" aria-hidden="true" />
                        </span>

                        <h2 className="mx-auto mt-6 max-w-xl font-serif text-3xl font-medium leading-tight text-[#F3EFE7] sm:text-4xl lg:text-[44px]">
                            Ready for your
                            <span className="text-[#E2AD36]"> next upgrade?</span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-md text-base text-white/60">
                            Book your appointment today and leave the rest to us.
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href="#contact"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-[8px] border border-[rgba(217,165,46,0.45)] bg-[#131210] px-8 py-3.5 text-sm font-semibold text-[#E2AD36] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D9A52E] hover:bg-[#D9A52E] hover:text-[#161310] active:translate-y-0 sm:w-auto"
                            >
                                Book Your Appointment
                                <ArrowRight
                                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default BookingCTA;