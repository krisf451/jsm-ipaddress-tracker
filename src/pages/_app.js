import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100 max-w-7xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
