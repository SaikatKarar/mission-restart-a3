import { useState, useEffect } from "react";
import { FaDownload, FaStar, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import appsData from "../data/apps.json";
import Loader from "../components/Loader";


export default function AllApps() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [filteredApps, setFilteredApps] = useState(appsData);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            const filtered = appsData.filter((app) =>
                `${app.title} ${app.companyName}`
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );

            setFilteredApps(filtered);
            setLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, [search]);

    return (
        <section className="py-16">
            <div className="w-11/12 mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Our All Applications
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                    <p className="text-gray-700 font-medium">
                        ({filteredApps.length}) Apps Found
                    </p>
                    <div className="relative w-full md:w-72">
                        <FaSearch className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Apps..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                </div>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">

                    {filteredApps.length > 0 ? (
                        filteredApps.map((app) => (
                            <Link
                                key={app.id}
                                to={`/apps/${app.id}`}
                                className="bg-white p-4 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
                            >
                                <div>
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-56 object-cover rounded-xl"
                                    />
                                </div>


                                <p className="font-semibold text-center">{app.title}</p>


                                <div className="flex justify-between">

                                    <div className="flex items-center gap-1 text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded-full">
                                        <FaDownload />
                                        {app.downloads}
                                    </div>

                                    <div className="flex items-center gap-1 text-purple-600 text-sm font-medium bg-purple-100 px-2 py-1 rounded-full">
                                        <FaStar />
                                        {app.ratingAvg}
                                    </div>

                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            No apps found
                        </p>
                    )}

                </div>
            )}

        </section>
    );
}