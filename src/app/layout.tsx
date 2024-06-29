import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { DiAtom } from "react-icons/di";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
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
          " " +
          "bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-950 dark:to-slate-900"
        }
      >
        <Providers>
          <div className="fixed z-20 right-4 top-5"></div>
          <Header />
          <p className="flex text-teal-600 h-[70px]">
            <DiAtom />
          </p>
          {children}
          <Toaster />
          {/*<Footer></Footer>*/}
        </Providers>
      </body>
    </html>
  );
}
