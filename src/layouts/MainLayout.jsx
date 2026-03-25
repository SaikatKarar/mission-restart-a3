import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <>
            <Header />

            {navigation.state === "loading" && (
                <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
                    <Loader />
                </div>
            )}

            <Outlet />

            <Footer />
        </>
    );
};

export default MainLayout;