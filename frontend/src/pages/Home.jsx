import background from "../assets/Home/background.jpg";
import white_logo from "../assets/Home/white_logo.png";

function Home() {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0">

                <img
                    src={background}
                    alt="Background"
                    className="w-full h-full object-cover scale-110 animate-[pulse_8s_ease-in-out_infinite]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-[#101522]/70 via-[#101522]/85 to-black"></div>

            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

                <div className="flex flex-col items-center text-center">

                    {/* Logo */}
                    <div className="mb-6 backdrop-blur-lg bg-white/5 border border-white/10 rounded-full p-4">

                        <img
                            src={white_logo}
                            alt="Cutly Logo"
                            className="w-20 h-20"
                        />

                    </div>

                    {/* Main title */}
                    <h1 className="text-white text-5xl sm:text-7xl font-light leading-tight">

                        Fresh Cuts <br />

                        <span className="font-semibold text-[#fe9a00]">
                            Clean Style
                        </span>

                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-300 mt-6 max-w-md text-base sm:text-lg leading-relaxed">

                        Premium barber experience with precision cuts,
                        modern styles and a clean finish every visit.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

                        <button className="px-8 py-3 rounded-full bg-[#fe9a00] text-white font-medium transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(254,154,0,0.5)]">

                            Book Appointment

                        </button>

                        <button className="px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg text-white transition duration-300 hover:bg-white/20 hover:scale-105">

                            View Services

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Home;