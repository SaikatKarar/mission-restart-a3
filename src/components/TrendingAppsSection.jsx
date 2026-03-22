import { FaArrowTrendUp, FaDownload, FaStar } from "react-icons/fa6";

const appsData = [
    {
        id: 1,
        name: "Forest: Focus for Productivity",
        image: "/public/icon-005.webp",
        downloads: "7M",
        rating: "4.9",
    },
    {
        id: 2,
        name: "SmPlan: ToDo List with Reminder",
        image: "/public/icon-006.webp",
        downloads: "8M",
        rating: "4.9",
    },
    {
        id: 3,
        name: "FLIP - Focus Timer for Study",
        image: "/public/icon-007.webp",
        downloads: "3M",
        rating: "4.3",
    },
    {
        id: 4,
        name: "Pomocat - Cute Pomodoro Timer",
        image: "/public/icon-008.webp",
        downloads: "5M",
        rating: "4.0",
    },
    {
        id: 5,
        name: "Time Planner: Schedule & Tasks",
        image: "/public/icon-009.webp",
        downloads: "4M",
        rating: "4.3",
    },
    {
        id: 6,
        name: "Flip Clock: World Clock",
        image: "/public/icon-010.webp",
        downloads: "9M",
        rating: "4.0",
    },
    {
        id: 7,
        name: "Morning Habits - Daily Routine",
        image: "/public/icon-011.webp",
        downloads: "3M",
        rating: "4.2",
    },
    {
        id: 8,
        name: "Focus Plant: Pomodoro Forest",
        image: "/public/icon-012.webp",
        downloads: "7M",
        rating: "4.4",
    },
];

export default function TrendingAppsSection() {
    return (
        <section className="py-16">
            <div>
                {/* Header */}
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold flex justify-center items-center gap-3 text-purple-600">
                        Trending Apps
                        <FaArrowTrendUp className="text-pink-500" size={40} />
                    </h2>
                    <p className="text-gray-500">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Grid */}
                <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                    {appsData.map((app) => (
                        <a
                            key={app.id}
                            href={`/apps/${app.id}`}
                            className="bg-white p-4 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
                        >
                            {/* Image */}
                            <div>
                                <img
                                    src={app.image}
                                    alt={app.name}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* Name */}
                            <p className="font-semibold text-center">{app.name}</p>

                            {/* Stats */}
                            <div className="flex justify-between">
                                {/* Downloads */}
                                <div className="flex items-center gap-1 text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
                                    <FaDownload />
                                    {app.downloads}
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-purple-600 text-sm font-medium bg-purple-100 px-2 py-1 rounded-full">
                                    <FaStar />
                                    {app.rating}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center">
                    <a
                        href="/apps"
                        className="px-8 py-3 rounded-full text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:shadow-xl transition"
                    >
                        Show All
                    </a>
                </div>
            </div>
        </section>
    );
}