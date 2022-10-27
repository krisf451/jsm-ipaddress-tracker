import Head from "next/head";
import dynamic from "next/dynamic";

const IpAddressTracker = dynamic(() => import("../components/IpAddressTracker/IpAddressTracker"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>IP Address Tracker | Kristian Fulkerson</title>
      </Head>
      <IpAddressTracker />
    </div>
  );
}
