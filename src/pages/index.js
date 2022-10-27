import Head from "next/head";
import dynamic from "next/dynamic";

const IpAddressTracker = dynamic(() => import("../components/IpAddressTracker/IpAddressTracker"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>IP Address Tracker | Kristian Fulkerson</title>
      </Head>
      <h1 className="text-6xl text-green-500 underline">Welcome</h1>
      <IpAddressTracker />
    </div>
  );
}
