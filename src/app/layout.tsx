
import { Inter } from "next/font/google";import "./globals.css";
import './/shared/css/custom.module.scss'

import Navbar from "@/app/shared/components/header/navbar";
import Footer from "@/app/shared/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full'>
      <body className={ inter.className }>
        <Navbar></Navbar>
        { children }
        <Footer></Footer>
      </body>
    </html>
  );
}
