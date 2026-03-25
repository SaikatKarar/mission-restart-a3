import { useState } from "react";
import logo from "../assets/logo.png";
import {
    FiHome,
    FiGrid,
    FiDownload,
    FiMenu,
    FiX
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", path: "/", icon: <FiHome /> },
        { name: "Apps", path: "/apps", icon: <FiGrid /> },
        { name: "Installation", path: "/my-installations", icon: <FiDownload /> },
    ];

    return (
        <>
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-18">


                    <div className="flex items-center gap-3">
                        <button onClick={() => setOpen(true)} className="lg:hidden">
                            <FiMenu size={25} />
                        </button>

                        <Link to="/" className="flex items-center gap-2">
                            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
                            <span className="text-xl font-bold text-indigo-700 uppercase">
                                Hero.IO
                            </span>
                        </Link>
                    </div>


                    <nav className="hidden lg:flex gap-8">
                        {links.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 text-base font-semibold ${isActive
                                        ? "text-black border-b-2 border-indigo-600 pb-0.5"
                                        : "text-gray-500 hover:text-black"
                                    }`
                                }
                            >
                                {item.icon}
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>

                    <a
                        href="https://github.com/saikatkarar"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
                    >
                        <FaGithub />
                        Contribute
                    </a>
                </div>
            </header>

            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            <div
                className={`fixed top-0 left-0 w-72 h-full bg-white/90 backdrop-blur-xl z-50 shadow-2xl                    {/* GitHub Button */}
 transform transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
                        <span className="text-xl font-bold text-indigo-700 uppercase tracking-wide">
                            Hero.IO
                        </span>
                    </Link>

                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                    >
                        <FiX size={20} />
                    </button>
                </div>


                <div className="p-4 space-y-2">
                    {links.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${isActive
                                    ? "bg-indigo-50 text-indigo-600 shadow-sm"
                                    : "text-gray-500 hover:bg-gray-100"
                                }`
                            }
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="mt-auto p-4 border-t border-gray-100">
                    <a
                        href="https://github.com/SaikatKarar/mission-restart-a3"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold"
                    >
                        <FaGithub />
                        Contribute
                    </a>
                </div>
            </div>
        </>
    );
}