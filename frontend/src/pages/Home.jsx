import background from "../assets/Home/background.jpg";
import logo from "../assets/logo.png";

function Home() {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
            {/* Background */}
            <img
                src={background}
                alt="Home Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#101522]/80" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

                <div className="flex flex-col items-center gap-6">

                    {/* Logo + Title */}
                    <div className="flex flex-col items-center">
                        <img
                            src={logo}
                            alt="Cutly Logo"
                            className="h-13 w-13 rounded-full bg-orange-300/15 p-2"
                        />

                        <h2 className="text-6xl font-light text-white mt-2">
                            Cutly
                        </h2>

                        <hr className="border-t border-[#fe9a00] w-24 my-5" />
                    </div>

                    {/* Subtitle */}
                    <p className="text-gray-200 text-lg max-w-md">
                        Fresh cuts. Clean look. Every time.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col w-full gap-4">

                        <button className="px-6 py-2 bg-[#fe9a00] text-white rounded-full hover:opacity-90 transition">
                            Book Appointment
                        </button>

                        <button className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition">
                            View Services
                        </button>

                    </div>

                </div>
            </div>

        </section>
    );
}

export default Home;