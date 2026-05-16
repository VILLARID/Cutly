import AboutImg from "../assets/About/AboutImg.png";

function AboutUs() {
    return (
        <>
            <section id="about" className="relative h-screen w-full overflow-hidden pt-24 pl-5 pr-5 pb-24">

                <div className="flex justify-center bg-[#fef3c6] rounded-full w-20 py-1">
                    <p className="text-[#d58a3b] text-sm">About Us</p>
                </div>

                {/* Content */}
                <div className="flex gap-1 text-2xl font-bold mt-5">
                    <span className="text-[#101522]">Precision meets</span>
                    <span className="text-[#d58a3b]">style</span>
                </div>

                <div className="mt-4 text-gray-700 max-w-2xl">

                    <p>
                        At Cutly, we don't just cut hair—we craft experiences. Our master barbers blend traditional techniques with modern trends to deliver sharp, clean cuts every time.
                        Whether you're looking for a classic fade, a bold new style, or a meticulous beard trim, we bring precision, expertise, and a commitment to excellence.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto">

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <div className="bg-[#d58a3b] w-2 h-2 rounded-full"></div>
                            <p className="text-gray-800 font-medium">Expert Barbers</p>
                        </div>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <div className="bg-[#d58a3b] w-2 h-2 rounded-full"></div>
                            <p className="text-gray-800 font-medium">Premium Products</p>
                        </div>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <div className="bg-[#d58a3b] w-2 h-2 rounded-full"></div>
                            <p className="text-gray-800 font-medium">Modern Techniques</p>
                        </div>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <div className="bg-[#d58a3b] w-2 h-2 rounded-full"></div>
                            <p className="text-gray-800 font-medium">Personalized Cuts</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <img src={AboutImg} className="rounded-xl" />
                    </div>
                </div>
            </section >
        </>
    )
}

export default AboutUs;