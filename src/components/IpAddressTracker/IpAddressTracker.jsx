import { useEffect } from "react";

import { Map, Header } from "@components";
import { useGlobalContext } from "@context/GlobalContext";

const IpAddressTracker = () => {
  const { position } = useGlobalContext();
  console.log(position);
  return (
    <div className="">
      <Header />
      {position && (
        <Map
          position={position}
          zoom={13}
          scroll={true}
          styles={{ height: "65vh", width: "100vw", position: "relative", zIndex: 1 }}
          popupMessage="This is you. Hi there :)"
        />
      )}
    </div>
  );
};

export default IpAddressTracker;
