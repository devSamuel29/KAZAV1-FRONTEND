import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/default/Navbar'
import SecondaryNavbar from '../components/default/SecondaryNavbar'
import Footer from '../components/default/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <SecondaryNavbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
