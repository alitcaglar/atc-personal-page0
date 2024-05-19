import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
//import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ali Turabi Caglar Personal Page",
  description: "Personal Page of Ali Turabi Caglar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " w-full h-screen bg-gradient-radial from-slate-300 to-slate-200 "
        }
      >
        <Header></Header>
        {children}
        {/*<Footer></Footer>*/}
      </body>
    </html>
  );
}
