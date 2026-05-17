import white_logo from "../assets/Home/white_logo.png";
import { MapPin, Phone, Clock } from "lucide-react";

function Footer() {

    const links = [
        "Home",
        "Services",
        "Gallery",
        "Testimonials",
        "Contact"
    ];

    return (

        <footer className="relative overflow-hidden bg-[#0d111b] text-white px-6 pt-20 pb-8">

            {/* background effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#fe9a00]/10 rounded-full blur-3xl"/>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d58a3b]/10 rounded-full blur-3xl"/>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}

                    <div>

                        <div className="flex items-center gap-3">

                            <img
                                src={white_logo}
                                alt="Cutly Logo"
                                className="size-11"
                            />

                            <h2 className="text-2xl font-bold">
                                Cutly
                            </h2>

                        </div>

                        <p className="text-gray-400 mt-5 leading-7">

                            Precision cuts and premium grooming
                            crafted for modern style and confidence.

                        </p>

                    </div>


                    {/* Links */}

                    <div>

                        <h3 className="font-semibold text-lg mb-5">
                            Navigation
                        </h3>

                        <div className="flex flex-col gap-3">

                            {links.map((link)=>(

                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="
                                    text-gray-400
                                    hover:text-[#fe9a00]
                                    hover:translate-x-2
                                    transition
                                    w-fit
                                    "
                                >
                                    {link}
                                </a>

                            ))}

                        </div>

                    </div>


                    {/* Contact */}

                    <div>

                        <h3 className="font-semibold text-lg mb-5">
                            Contact
                        </h3>

                        <div className="flex flex-col gap-5">

                            <div className="flex items-center gap-3">

                                <div className="bg-white/5 p-3 rounded-xl">

                                    <MapPin
                                        className="text-[#d58a3b]"
                                        size={18}
                                    />

                                </div>

                                <span className="text-gray-400">
                                    123 Main Street, NY
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <div className="bg-white/5 p-3 rounded-xl">

                                    <Phone
                                        className="text-[#d58a3b]"
                                        size={18}
                                    />

                                </div>

                                <span className="text-gray-400">
                                    +1 (555) 123-4567
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <div className="bg-white/5 p-3 rounded-xl">

                                    <Clock
                                        className="text-[#d58a3b]"
                                        size={18}
                                    />

                                </div>

                                <span className="text-gray-400">
                                    Mon–Sat: 9AM–8PM
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Small card */}

                    <div className="relative">

                        <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-sm">

                            <h3 className="font-semibold text-lg">
                                Premium Grooming
                            </h3>

                            <p className="text-gray-400 mt-3 leading-7 text-sm">

                                Experience precision cuts,
                                modern techniques and a
                                personalized barber service.

                            </p>

                        </div>

                        {/* floating square */}
                        <div className="
                        absolute
                        -top-3
                        -right-3
                        w-8 h-8
                        bg-[#d58a3b]
                        rotate-45
                        rounded-md
                        "/>

                    </div>

                </div>


                {/* Bottom */}

                <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-gray-500 text-sm">
                        © 2026 Cutly. All rights reserved.
                    </p>

                    <p className="text-gray-500 text-sm">
                        Crafted with precision ✦
                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;