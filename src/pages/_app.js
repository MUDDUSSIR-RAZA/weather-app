import Bg from "@/components/Bg";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Weather App
        </title>
      </Head>
      <Bg>
      <Component {...pageProps} />
      </Bg>
    </>
  );
}
