import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Footer, Navbar, SecondaryNavbar } from '~/common'
import '~/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <NextNProgress
        color="#880000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
