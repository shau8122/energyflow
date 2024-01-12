import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Navbar from "@/app/_components/navbar/Navbar";
import Footer from "@/app/_components/footer/Footer";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enerzyflow",
  description: `Sail your Business Ship,
  With our enerZy Sip`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth()
  return (
    <html lang="en">
      <body
        className={`${inter.className}  `}
        // style={{ backgroundImage: 'url("/bg1.jpeg")' }}
      >
        <SessionProvider session={session}>

        <ToastProvider />
         
          {children}
        </SessionProvider>
          
       
      </body>
    </html>
  );
}
