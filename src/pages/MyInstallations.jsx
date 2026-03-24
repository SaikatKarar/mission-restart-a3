import { useState } from "react";
import { useInstall } from "../context/InstallContext";
import { FaDownload, FaStar } from "react-icons/fa";

export default function MyInstallations() {
    const { installedApps, uninstallApp } = useInstall();
    const [sortOrder, setSortOrder] = useState("");

    const getSize = (size) => {
        if (typeof size === "number") return size;

        if (typeof size === "string") {
            return Number(size.replace(" MB", ""));
        }

        return 0;
    };

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOrder === "asc") {
            return getSize(a.size) - getSize(b.size);
        }
        if (sortOrder === "desc") {
            return getSize(b.size) - getSize(a.size);
        }
        return 0;
    });

    if (installedApps.length === 0) {
        return (
            <p className="text-center py-20 text-gray-500">
                No Apps Installed
            </p>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen py-16">
            <div className="w-11/12 mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Your Installed Apps
                    </h2>
                    <p className="text-gray-500 pt-2 text-base">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>

                {/* Sort Dropdown */}
                <div className="flex justify-between items-center mb-6">
                    <p className="font-semibold text-gray-700">
                        {installedApps.length} Apps Found
                    </p>

                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-md text-sm bg-white"
                    >
                        <option value="">Sort By Size</option>
                        <option value="asc">Low → High</option>
                        <option value="desc">High → Low</option>
                    </select>
                </div>

                {/* List */}
                <div className="space-y-4">
                    {sortedApps.map((app) => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                        >
                            <div className="flex items-center gap-4">

                                <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="object-contain w-full h-full"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {app.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                        <span className="flex items-center gap-1 text-green-600">
                                            <FaDownload /> {app.downloads}
                                        </span>

                                        <span className="flex items-center gap-1 text-orange-500">
                                            <FaStar /> {app.ratingAvg}
                                        </span>

                                        <span>{app.size}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => uninstallApp(app.id)}
                                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}