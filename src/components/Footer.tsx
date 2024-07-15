//yukaridan asagiya 1-adres 2-isim soyisim tum hakki saklidir 3-mailinizi yazin donus saglayim

"use client";
import { useState } from "react";

import { LuMailCheck } from "react-icons/lu";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { CopyToClipboard } from "react-copy-to-clipboard";
import EmailSendForm from "./Forms/EmailSendForm";

export default function Footer() {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // 2 saniye sonra başarıyı sıfırla
  };

  return (
    <div className="">
      <Drawer>
        <DrawerTrigger>
          <div className=" flex items-center justify-center w-96 bg-gradient-to-b from-lime-600 to-teal-500 mb-8 text-3xl hover:ring-4 rounded-xl text-slate-200 dark:text-slate-800">
            <p>Get in touch</p>
            <span className="text-6xl rotate-6">!</span>
          </div>
        </DrawerTrigger>
        <DrawerContent className="backdrop-blur-sm bg-transparent bg-slate-200 bg-opacity-40 dark:bg-slate-800 dark:bg-opacity-30 ">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription>
              <p className="text-3xl font-bold text-center dark:text-slate-50 text-slate-950">
                Drop me a line!
              </p>
            </DrawerDescription>
          </DrawerHeader>
          <footer className="grid sm:grid-cols-3 gap-2 p-8">
            <div className="flex flex-wrap items-center justify-around col-span-3 mb-8  * email ">
              <CopyToClipboard
                text="aliturabicaglar@gmail.com"
                onCopy={handleCopy}
              >
                <div className="cursor-pointer flex items-center hover:translate-x-[1px] hover:translate-y-1 transition m-4">
                  <div className="text-6xl text-teal-500  m-2">
                    <LuMailCheck />
                  </div>
                  {isCopied
                    ? "Email address Copied"
                    : "aliturabicaglar@gmail.com"}
                </div>
              </CopyToClipboard>

              <p className="flex items-center * phone ">
                <div className="text-6xl text-lime-500 m-1">
                  <IoLogoWhatsapp />
                </div>
                +90 538 845 69 10
              </p>
              <Link
                href="https://github.com/alitcaglar"
                className="flex items-center hover:translate-x-[1px] hover:translate-y-1 transition m-4"
              >
                <div className="text-6xl text-purple-600 m-1 ">
                  <IoLogoGithub />
                </div>
                <div>GitHub</div>
              </Link>
              <Link
                href="https://www.instagram.com/alitcaglar"
                className="flex items-center m-4 hover:translate-x-[1px] hover:translate-y-1 transition "
              >
                <div className="text-6xl m-1">
                  <FaInstagram />
                </div>
                <div>Instagram</div>
              </Link>
            </div>

            <div className="flex flex-wrap col-span-3 justify-center">
              <div className="mb-4 w-full bg-gradient-to-l from-transparent via-teal-500 to-transparent h-[2px] bg-contain z-10"></div>
              <EmailSendForm />

              <p className="p-4 w-full text-center">
                All copyrights reserved to Ali Turabi Caglar©
                <span className="opacity-20 font-semibold italic">
                  {" "}
                  beta v.0
                </span>
              </p>
              <p className="p-4">Mersin / Turkiye</p>
              <p className="p-4">2024</p>
            </div>
          </footer>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
//  <div className="w-full bg-gradient-to-l from-transparent via-lime-500 to-transparent h-[2px] bg-contain z-10"></div>
//       <footer className="h-[73px] flex justify-around z-10  my-4 w-full">
//         <div className="contact-info text-xl text-slate-500">
//           <Typewriter
//             words={["you can drop me a line."]}
//             loop={999}
//             cursor
//             cursorStyle="|"
//             typeSpeed={90}
//             deleteSpeed={90}
//             delaySpeed={1000}
//           />
//           <p>aliturabicaglar@gmail.com</p>
//           <p>+90 538 845 69 10</p>
//         </div>
//       </footer>
