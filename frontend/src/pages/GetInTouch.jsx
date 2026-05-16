import { MapPin, Clock, Phone } from "lucide-react";

function GetInTouch() {

    const mockData = [
        {
            id: 1,
            icon: MapPin,
            title: "Location",
            line1: "123 Main Street",
            line2: "Downtown, NY 10001"
        },
        {
            id: 2,
            icon: Clock,
            title: "Opening Hours",
            line1: "Mon - Fri: 9AM - 8PM",
            line2: "Sat - Sun: 10AM - 6PM"
        },
        {
            id: 3,
            icon: Phone,
            title: "Contact",
            line1: "+1 (555) 123-4567",
            line2: "contact@cutly.com"
        }
    ];

    return (

        <section
            id="contact"
            className="w-full py-30 px-5 bg-[#fffcef]"
        >

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex flex-col items-center text-center">

                    <div className="bg-[#fef3c6] rounded-full px-5 py-2">

                        <p className="text-[#d58a3b] text-sm">
                            Get In Touch
                        </p>

                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold text-[#101522] mt-6">

                        Visit Our Shop

                    </h2>

                    <p className="text-gray-500 mt-4 max-w-lg">

                        Ready for a fresh look? Book your appointment
                        and experience premium barber service.

                    </p>

                </div>


                {/* ================= MOBILE ================= */}

                <div className="flex flex-col gap-5 mt-12 lg:hidden">

                    {mockData.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.id}
                                className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-5"
                            >

                                <div className="bg-[#fef3c6] min-w-14 h-14 rounded-2xl flex justify-center items-center">

                                    <Icon className="text-[#d58a3b]"/>

                                </div>

                                <div>

                                    <h3 className="font-semibold text-lg">

                                        {item.title}

                                    </h3>

                                    <p className="text-sm text-gray-500">

                                        {item.line1}

                                    </p>

                                    <p className="text-sm text-gray-500">

                                        {item.line2}

                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>


                {/* ================= DESKTOP ================= */}

                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 mt-16">

                    {mockData.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.id}
                                className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition duration-500"
                            >

                                <div className="bg-[#fef3c6] w-16 h-16 rounded-2xl flex justify-center items-center">

                                    <Icon
                                        className="text-[#d58a3b]"
                                        size={30}
                                    />

                                </div>

                                <h3 className="text-2xl font-bold mt-8">

                                    {item.title}

                                </h3>

                                <div className="mt-5 text-gray-500 flex flex-col gap-2">

                                    <p>{item.line1}</p>

                                    <p>{item.line2}</p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

export default GetInTouch;