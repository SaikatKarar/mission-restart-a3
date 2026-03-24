import { createContext, useContext, useState } from "react";

const InstallContext = createContext();

export const InstallProvider = ({ children }) => {
    const [installedApps, setInstalledApps] = useState([]);

    const installApp = (app) => {
        const exists = installedApps.find((item) => item.id === app.id);
        if (!exists) {
            setInstalledApps([...installedApps, app]);
        }
    };

    const uninstallApp = (id) => {
        const updated = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updated);
    };

    return (
        <InstallContext.Provider
            value={{ installedApps, installApp, uninstallApp }}
        >
            {children}
        </InstallContext.Provider>
    );
};

// custom hook
export const useInstall = () => useContext(InstallContext);