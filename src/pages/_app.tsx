import "@/styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from "next/app";

import Navbar from "@/components/common/navbar";
import SecondaryNavbar from "@/components/common/secondary-navbar";
import Footer from "@/components/common/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <NextNProgress color="#880000" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
