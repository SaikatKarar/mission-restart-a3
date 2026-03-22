import { FaDownload, FaStar, FaGooglePlay } from "react-icons/fa";

const statsData = [
    {
        title: "Total Downloads",
        value: "29.6M",
        desc: "21% more than last month",
    },
    {
        title: "Total Reviews",
        value: "906K",
        desc: "46% more than last month",
        hasBorder: true,
    },
    {
        title: "Active Apps",
        value: "132+",
        desc: "31 more will Launch",
    },
];

export default function StatsSection() {
    return (
        <section className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
            <div className="pt-10 flex flex-col justify-center items-center">

                {/* Heading */}
                <h2 className="text-white font-bold text-3xl md:text-4xl text-center">
                    Trusted by Millions, Built for You
                </h2>

                {/* Stats */}
                <div className="flex flex-col lg:flex-row gap-10 py-10 text-white">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center space-y-3 ${stat.hasBorder ? 'border-x border-white/30 px-6' : ''}`}
                        >


                            {/* Title */}
                            <div className="text-lg">{stat.title}</div>

                            {/* Value */}
                            <div className="text-4xl font-bold px-4">
                                {stat.value}
                            </div>

                            {/* Description */}
                            <div className="text-sm opacity-90">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}