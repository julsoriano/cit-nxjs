import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

import ScreenDimension from "@/components/screendim/ScreenDim";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default:"CIT Website Homepage",
    template:"%s | CIT Website"
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
        <ScreenDimension/>
        <div className="container">
          <Navbar/> 
          {children}
          <Footer/>
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}