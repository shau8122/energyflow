import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "@/app/_components/navbar/Navbar";
import Footer from "@/app/_components/footer/Footer";
import { ToastProvider } from "@/components/providers/ToastProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enerzyflow",
  description: `Sail your Business Ship,
  With our enerZy Sip`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  `}
        // style={{ backgroundImage: 'url("/bg1.jpeg")' }}
      >
        <ToastProvider />
         
          {children}
          
       
      </body>
    </html>
  );
}
