import { Search, IPInfo } from "@components";

const Header = () => {
  console.log("test");
  return (
    <div className="h-[35vh] bg-[url('/pattern-bg.png')] bg-cover flex flex-col items-center relative z-10">
      <h1 className="text-white text-center pt-[33px] font-[500] text-[32px]">IP Address Tracker</h1>
      <Search />
      <IPInfo />
    </div>
  );
};

export default Header;
