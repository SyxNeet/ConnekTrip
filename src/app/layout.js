import { Suspense } from "react";
import "./globals.css";
import "../scss/main.scss";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "swiper/css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
