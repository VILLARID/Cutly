import logo from "../assets/logo.png"

import { MapPin, Phone, Clock } from "lucide-react";

function Footer() {
    return (
        <>
            <footer className="bg-[#101522] text-white px-6 py-14">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">

                        <div className="flex items-center gap-3">
                            <div className="bg-[#262d3e] p-3 rounded-xl">
                                <img src={logo} alt="" className="size-7"/>
                            </div>

                            <h2 className="text-2xl font-bold">
                                Cutly
                            </h2>
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Precision cuts, timeless style, and a premium
                            grooming experience crafted for every client.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-[#d58a3b]">
                            Navigation
                        </h3>

                        <ul className="flex flex-col gap-3 text-gray-400">
                            <li className="hover:text-white cursor-pointer transition">
                                Home
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Services
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Gallery
                            </li>

                            <li className="hover:text-white cursor-pointer transition">
                                Testimonials
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-[#d58a3b]">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-4 text-gray-400">

                            <div className="flex items-center gap-3">
                                <MapPin className="size-4" />
                                <span>123 Main Street, NY</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="size-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Clock className="size-4" />
                                <span>Mon - Sat: 9AM–8PM</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
                    © 2026 BarberShop. All rights reserved.
                </div>

            </footer>
        </>
    );
}

export default Footer;