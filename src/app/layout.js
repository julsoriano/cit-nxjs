import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"

import ScreenDimension from "@/components/screendim/ScreenDim";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CIT Website - NxJS14',
  description: 'CIT Website - NxJS14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScreenDimension/>
        <div className="container">
          <Navbar/> 
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}