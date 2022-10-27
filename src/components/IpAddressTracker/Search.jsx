import { useState } from "react";

import { useGlobalContext } from "@context/GlobalContext";

const Search = () => {
  const { setIpAddress, setLocation, setTimezone, setIsp, setPosition } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");

  const searchIP = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY}&ipAddress=${searchTerm}`);
    const data = await response.json();
    if (data) {
      setIpAddress(data.ip);
      setLocation(`${data.location.city}, ${data.location.region} ${data.location.postalCode}`);
      setTimezone(`UTC${data.location.timezone}`);
      setIsp(data.isp);
      setPosition([Number(data.location.lat), Number(data.location.lng)]);
    }
  };
  console.log("search");
  return (
    <form onSubmit={searchIP} className="flex mt-6 items-center w-full px-6 md:mx-0 md:w-[555px]">
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        placeholder="Search for any IP address or domain"
        className="rounded-l-xl pl-[18px] font-[400] text-[12px] xs:text-[14px] sm:text-[18px] text-[#2C2C2C] text-md h-[58px] w-full focus:outline-none"
      />
      <button type="submit" className="flex justify-center items-center bg-black w-[58px] h-[59px] rounded-r-xl">
        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L8 8L2 14" stroke="white" stroke-width="3" />
        </svg>
      </button>
    </form>
  );
};

export default Search;
