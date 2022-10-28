import { useEffect } from "react";

import { useGlobalContext } from "@context/GlobalContext";
const IPInfo = () => {
  const { ipAddress, setIpAddress, location, setLocation, timezone, setTimezone, isp, setIsp, setPosition, position } = useGlobalContext();

  useEffect(() => {
    fetchIpInfo();
    console.log("ipAddress", ipAddress);
  }, []);

  const fetchIpInfo = async () => {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY}`);
    const data = await response.json();
    if (data) {
      setIpAddress(data.ip);
      setLocation(`${data.location.city}, ${data.location.region} ${data.location.postalCode}`);
      setTimezone(`UTC${data.location.timezone}`);
      setIsp(data.isp);
      setPosition([Number(data.location.lat), Number(data.location.lng)]);
      console.log(position);
    }
  };
  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden gap-4 w-[279px] xs:w-[327px] h-[294px] md:h-[400px] bg-white shadow-lg absolute bottom-[-180px] md:bottom-[-286px] rounded-lg py-6 flex flex-col items-center justify-between transition-all duration-200 ease-in-out">
        <div className="text-center">
          <p className="text-gray-400 text-[10px] md:text-[12px] font-[700] uppercase tracking-[.15em] mb-2">ip address</p>
          <p className="text-[20px] md:text-[26px] font-[500]">{ipAddress}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-[10px] md:text-[12px] font-[700] uppercase tracking-[.15em] mb-2">location</p>
          <p className="text-[20px] md:text-[26px] font-[500]">{location}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-[10px] md:text-[12px] font-[700] uppercase tracking-[.15em] mb-2">timezone</p>
          <p className="text-[20px] md:text-[26px] font-[500]">{timezone}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-[10px] md:text-[12px] font-[700] uppercase tracking-[.15em] mb-2">isp</p>
          <p className="text-[20px] md:text-[26px] font-[500]">{isp}</p>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex max-w-[1110px] w-[80%] h-[161px] mx-auto bg-white rounded-lg shadow-lg p-8 absolute bottom-[-80px] justify-between">
        <div className="w-full">
          <p className="text-gray-400 text-[12px] font-[700] uppercase tracking-[.15em] mb-2">ip address</p>
          <p className="text-[20px] xl:text-[26px] font-[500]">{ipAddress}</p>
        </div>
        <div className="h-[75px] border-l border-gray-200 mt-3 mr-8" />
        <div className="w-full">
          <p className="text-gray-400 text-[12px] font-[700] uppercase tracking-[.15em] mb-2">location</p>
          <p className="text-[20px] xl:text-[26px] font-[500]">{location}</p>
        </div>
        <div className="h-[75px] border-l border-gray-200 mt-3 mr-8" />
        <div className="w-full">
          <p className="text-gray-400 text-[12px] font-[700] uppercase tracking-[.15em] mb-2">timezone</p>
          <p className="text-[20px] xl:text-[26px] font-[500]">{timezone}</p>
        </div>
        <div className="h-[75px] border-l border-gray-200 mt-3 mr-8" />
        <div className="w-full">
          <p className="text-gray-400 text-[12px] font-[700] uppercase tracking-[.15em] mb-2">isp</p>
          <p className="text-[20px] xl:text-[26px] font-[500] w-24">{isp}</p>
        </div>
      </div>
    </>
  );
};

export default IPInfo;
