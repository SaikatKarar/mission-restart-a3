import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import MyInstallations from "../pages/MyInstallations";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/apps",
                element: <AllApps />,
            },
            {
                path: "/apps/:id",
                element: <AppDetails />,
            },
            {
                path: "/my-installations",
                element: <MyInstallations />,
            },
        ],
    },
]);

export default router;