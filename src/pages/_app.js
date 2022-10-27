import "../styles/globals.css";
import { GlobalProvider } from "@context/GlobalContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </div>
  );
}

export default MyApp;
