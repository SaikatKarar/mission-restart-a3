import { FaArrowTrendUp, FaDownload, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import apps from "../data/apps.json";

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
                    {apps.slice(0, 8).map((app) => (
                        <Link
                            key={app.id}
                            to={`/apps/${app.id}`}
                            className="bg-white p-4 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
                        >
                            {/* Image */}
                            <div>
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* Title */}
                            <p className="font-semibold text-center">{app.title}</p>

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
                                    {app.ratingAvg}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center">
                    <Link
                        to="/apps"
                        className="px-8 py-3 rounded-full text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:shadow-xl transition"
                    >
                        Show All
                    </Link>
                </div>
            </div>
        </section>
    );
}