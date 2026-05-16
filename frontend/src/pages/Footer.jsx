import white_logo from "../assets/Home/white_logo.png";
import { MapPin, Phone, Clock } from "lucide-react";

function Footer() {

    return (

        <footer className="bg-[#0d111b] text-white px-6 pt-10 pb-6">

            <div className="max-w-7xl mx-auto flex flex-col gap-8">

                {/* Top */}
                <div className="flex flex-col items-center text-center">

                    <div className="flex items-center gap-3">

                        <img
                            src={white_logo}
                            alt="Cutly Logo"
                            className="size-10"
                        />

                        <h2 className="text-2xl font-bold">
                            Cutly
                        </h2>

                    </div>

                    <p className="text-gray-400 mt-3 text-sm max-w-sm">

                        Precision cuts and premium grooming
                        for a modern style.

                    </p>

                </div>

                {/* Navigation */}
                <div className="flex justify-center flex-wrap gap-6 text-gray-400 text-sm">

                    <a href="#home" className="hover:text-[#fe9a00] transition">
                        Home
                    </a>

                    <a href="#services" className="hover:text-[#fe9a00] transition">
                        Services
                    </a>

                    <a href="#gallery" className="hover:text-[#fe9a00] transition">
                        Gallery
                    </a>

                    <a href="#testimonials" className="hover:text-[#fe9a00] transition">
                        Reviews
                    </a>

                    <a href="#contact" className="hover:text-[#fe9a00] transition">
                        Contact
                    </a>

                </div>

                {/* Contact */}
                <div className="flex flex-col items-center gap-4 text-gray-400 text-sm">

                    <div className="flex flex-wrap justify-center gap-6">

                        <div className="flex items-center gap-2">
                            <MapPin className="size-4"/>
                            <span>123 Main Street, NY</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Phone className="size-4"/>
                            <span>+1 (555) 123-4567</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock className="size-4"/>
                            <span>Mon–Sat: 9AM–8PM</span>
                        </div>

                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-5 text-center text-gray-500 text-sm">

                    © 2026 Cutly. All rights reserved.

                </div>

            </div>

        </footer>

    );

}

export default Footer;