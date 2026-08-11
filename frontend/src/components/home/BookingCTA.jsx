import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";

import { useReveal } from "./motion";

function BookingCTA() {
    const reveal = useReveal();

    return (
        <section id="booking" className="overflow-hidden bg-[#F5F2EC] py-16 lg:py-24">
            <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <motion.div
                    {...reveal}
                    className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white px-6 py-14 text-center sm:px-12 lg:py-16"
                >
                    {/* soft decorative rings */}
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E39100]/[0.08] blur-2xl" />
                    </div>

                    <div className="relative">
                        <span className="mx-auto flex size-16 items-center justify-center rounded-full border border-[#E39100]/20 bg-[#E39100]/10 text-[#C97B00]">
                            <CalendarCheck className="size-7" aria-hidden="true" />
                        </span>

                        <h2 className="mx-auto mt-6 max-w-xl font-serif text-3xl font-medium leading-tight text-[#171717] sm:text-4xl lg:text-[44px]">
                            Ready for your next cut?
                        </h2>

                        <p className="mx-auto mt-4 max-w-md text-base text-neutral-600">
                            Book online in seconds and get the look you deserve.
                        </p>

                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                href="#contact"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#E39100] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C97B00] hover:shadow-[0_10px_22px_-10px_rgba(201,123,0,0.55)] active:translate-y-0 sm:w-auto"
                            >
                                <CalendarCheck className="size-4" aria-hidden="true" />
                                Book Appointment
                            </a>

                            <a
                                href="tel:+12125550147"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-black/15 bg-white px-7 py-3.5 text-sm font-semibold text-[#171717] transition-all duration-200 hover:border-[#171717]/30 hover:bg-[#F5F2EC] sm:w-auto"
                            >
                                <Phone className="size-4" aria-hidden="true" />
                                Call Us
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default BookingCTA;