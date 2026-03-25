import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/App-Error.png";

export default function AppNotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

            {/* Image */}
            <img
                src={notFoundImg}
                alt="Not Found"
                className="w-64 mb-6"
            />

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                OPPS!! APP NOT FOUND
            </h1>

            {/* Subtitle */}
            <p className="text-gray-500 mt-3 max-w-md">
                The app you are requesting is not found on our system. Please try another apps.
            </p>

            {/* Button */}
            <button
                onClick={() => navigate(-1)}
                className="mt-6 px-8 py-3 rounded-sm text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] hover:shadow-xl transition cursor-pointer"
            >
                Go Back!
            </button>

        </div>
    );
}