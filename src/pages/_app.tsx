import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Footer, Navbar } from '~/common'
import '~/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <NextNProgress color="#880000" stopDelayMs={0} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
