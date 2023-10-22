import { Suspense } from "react";
import "./globals.css";
import "../scss/main.scss";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "swiper/css";
import {Poppins,Montserrat} from 'next/font/google'
const poppin = Poppins({
  variable: '--font-poppin',
  weight:['300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight:['300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap',
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppin.variable} ${montserrat.variable}`} >
      <body suppressHydrationWarning={true}>
        <Suspense>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
