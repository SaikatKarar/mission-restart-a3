import heroImg from "../assets/hero.png";

export default function HeroSection() {
    return (
        <section className="bg-[#E9E9E9]">
            <div className="w-11/12 mx-auto flex flex-col items-center justify-center pt-10">

                {/* Content */}
                <div className="space-y-5 text-center">

                    <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-xl mx-auto">
                        We Build <br />
                        <span className="text-indigo-600">Productive</span>
                        {" "}Apps
                    </h2>

                    <p className="italic max-w-2xl mx-auto text-gray-600">
                        At{" "}
                        <span className="text-indigo-600 font-bold">HERO.IO</span>, we craft
                        innovative apps designed to make everyday life simpler, smarter, and
                        more exciting. Our goal is to turn your ideas into digital
                        experiences that truly make an impact.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">

                        <a
                            href="https://play.google.com/store/games"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:shadow-xl transition"
                        >
                            <img
                                src="https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png"
                                alt="Google Play"
                                className="w-10"
                            />
                            <span className="text-xl font-semibold">Google Play</span>
                        </a>

                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:shadow-xl transition"
                        >
                            <img
                                src="https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png"
                                alt="App Store"
                                className="w-10"
                            />
                            <span className="text-xl font-semibold">App Store</span>

                        </a>

                    </div>
                </div>

                {/* Image */}
                <img
                    src={heroImg}
                    alt="Hero"
                    className="pt-10 max-w-full"
                />

            </div>
        </section>
    );
}