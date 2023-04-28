import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import NextNProgress from 'nextjs-progressbar'
import { Footer, Navbar } from '~/common'
import '~/styles/globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Navbar />
      <NextNProgress color="#880000" stopDelayMs={0} />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
