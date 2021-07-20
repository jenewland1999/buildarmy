import type { AppProps } from "next/app";

// Import Tailwind CSS
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
