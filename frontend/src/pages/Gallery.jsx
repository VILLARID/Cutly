import Cut1 from "../Assets/Gallery/Cut1.jpg";
import Cut2 from "../Assets/Gallery/Cut2.jpg";
import Cut3 from "../Assets/Gallery/Cut3.jpg";
import Cut4 from "../Assets/Gallery/Cut4.jpg";
import Cut5 from "../Assets/Gallery/Cut5.jpg";
import Cut6 from "../Assets/Gallery/Cut6.jpg";

function Gallery() {

    const images = [Cut1, Cut2, Cut3, Cut4, Cut5, Cut6];

    return (
        <>
            <section
                id="services"
                className="relative w-full min-h-screen pt-24 px-6 bg-[#f9fafb] pb-24"
            >

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4">

                    <div className="bg-[#fef3c6] rounded-full px-5 py-2">
                        <p className="text-[#d58a3b] text-sm">
                            Gallery
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#101522]">
                        Our Work Speaks
                    </h2>

                    <p className="text-gray-600 max-w-md">
                        Every cut tells a story of precision and style
                    </p>

                </div>

                {/* Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10 place-items-center">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Cut ${index + 1}`}
                            className="size-50 rounded-2xl object-cover"
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Gallery;