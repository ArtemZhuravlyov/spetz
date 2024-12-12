
import { Inter } from "next/font/google";import "./globals.css";
import './/shared/css/custom.module.scss'
import { IBM_Plex_Mono, IBM_Plex_Sans_Condensed } from '@next/font/google';

import Navbar from "@/app/shared/components/header/navbar";
import Footer from "@/app/shared/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '700'], // Adjust weights as per your design
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  weight: ['400', '600'], // Adjust weights as per your design
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans-condensed',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${inter.className} h-full flex flex-col ${ibmPlexMono.variable} ${ibmPlexSansCondensed.variable} font-sans`}>
        <Navbar/>

        <main className="flex-grow">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
