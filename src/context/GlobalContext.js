import { createContext, useState, useContext } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // global state
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState("");
  const [position, setPosition] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        ipAddress,
        setIpAddress,
        location,
        setLocation,
        timezone,
        setTimezone,
        isp,
        setIsp,
        position,
        setPosition,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
