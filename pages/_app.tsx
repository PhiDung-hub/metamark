import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>MetaMarket</title>
        <link rel="icon" href="/MetaMarket.ico" />
        <link rel="shortcut icon" href="/MetaMark.icog" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
