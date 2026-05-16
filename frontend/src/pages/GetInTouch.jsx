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
            line1: "Mon - Fri: 9:00 AM - 8:00 PM",
            line2: "Sat - Sun: 10:00 AM - 6:00 PM"
        },
        {
            id: 3,
            icon: Phone,
            title: "Contact",
            line1: "+1 (555) 123-4567",
            line2: "contact@barbershop.com"
        }
    ];

    return (
        <>
            <section
                id="contact"
                className="relative w-full min-h-screen pt-30 pb-30 px-6 bg-[#fffcef]"
            >

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4">

                    <div className="bg-[#fef3c6] rounded-full px-5 py-2">
                        <p className="text-[#d58a3b] text-sm">
                            Get In Touch
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#101522]">
                        Visit Our Shop
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        Ready for a fresh look? Book your appointment today
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                    {mockData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center justify-center py-8 px-6 shadow-xl rounded-2xl bg-white gap-4"
                            >

                                <div className="flex justify-center items-center bg-[#fef3c6] w-14 h-14 rounded-xl">
                                    <Icon className="text-[#d58a3b] size-8" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <div className="flex flex-col gap-1 text-gray-500 text-center">
                                    <p>{item.line1}</p>
                                    <p>{item.line2}</p>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </section>
        </>
    );
}

export default GetInTouch;