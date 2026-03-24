import { useParams } from "react-router-dom";
import apps from "../data/apps.json";
import { useNavigate } from "react-router-dom";
import { useInstall } from "../context/InstallContext";

import { FaDownload, FaStar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import toast from "react-hot-toast";

export default function AppDetails() {
  const { id } = useParams();
  const app = apps.find((item) => item.id === Number(id));

  if (!app) {
    return <p className="text-center py-20">App Not Found</p>;
  }
  const navigate = useNavigate();
  const { installApp } = useInstall();

  const handleInstall = () => {
    installApp(app);
    toast.success("App Installed Successfully");
    navigate("/my-installations");
  };

  const { installedApps } = useInstall();

  const isInstalled = installedApps.find(i => i.id === app.id);

  return (
    <main className="min-h-screen w-11/12 mx-auto py-20 space-y-12">

      <div className="flex flex-col lg:flex-row gap-12 items-center">

        <div className="flex-1 flex justify-center">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-sm">
            <img
              src={app.image}
              alt={app.title}
              className="rounded-xl w-full object-contain"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">

          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              {app.title}
            </h2>
            <p className="mt-2 text-gray-500">
              Developed by{" "}
              <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                {app.companyName}
              </span>
            </p>
          </div>
          <hr className="text-gray-300" />
          <div className="flex flex-wrap gap-10 items-center">

            <div className="flex flex-col  gap-3">
              <FaDownload className="text-green-500 text-2xl" />
              <div>
                <p className="text-gray-500 text-sm">Downloads</p>
                <p className="text-xl font-bold">{app.downloads}</p>
              </div>
            </div>

            <div className="flex flex-col  gap-3">
              <FaStar className="text-orange-400 text-2xl" />
              <div>
                <p className="text-gray-500 text-sm">Average Ratings</p>
                <p className="text-xl font-bold">{app.ratingAvg}</p>
              </div>
            </div>

            <div className="flex flex-col  gap-3">
              <MdReviews className="text-purple-500 text-2xl" />
              <div>
                <p className="text-gray-500 text-sm">Total Reviews</p>
                <p className="text-xl font-bold">{app.reviews}</p>
              </div>
            </div>

          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-8 py-3 rounded-lg shadow-md font-semibold ${isInstalled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
              }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>

        </div>
      </div>

      <hr className="text-gray-300" />
      <div>
        <h2 className="text-3xl font-bold mb-6">Ratings</h2>

        <div className="space-y-4">

          {app.ratings.map((item, index) => {
            const max = Math.max(...app.ratings.map(r => r.count));
            const percentage = (item.count / max) * 100;

            return (
              <div key={index} className="flex items-center gap-4">

                <p className="w-12 text-gray-600 text-sm">
                  {item.name}
                </p>

                <div className="flex-1 h-4 overflow-hidden">
                  <div
                    className="h-full bg-orange-500 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

              </div>
            );
          })}

        </div>

        <div className="mt-6 flex justify-between text-xs text-gray-500 px-12">
          <span>0</span>
          <span>3000</span>
          <span>6000</span>
          <span>9000</span>
          <span>12000</span>
        </div>
      </div>

      <hr className="text-gray-300" />

      <div>
        <h2 className="text-3xl font-bold mb-5">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {app.description}
        </p>
      </div>

    </main>
  );
}