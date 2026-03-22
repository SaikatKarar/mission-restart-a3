import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Logo + About */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">YourBrand</h2>
                    <p className="text-sm">
                        We build high-quality apps that help you stay productive, focused, and organized in your daily life.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/apps" className="hover:text-white transition">Apps</a></li>
                        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-white transition">Support</a></li>
                        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex gap-3">
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
        </footer>
    );
}