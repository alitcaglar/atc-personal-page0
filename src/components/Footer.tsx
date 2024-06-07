"use client";
import { useState } from "react";

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

import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Footer() {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // 2 saniye sonra başarıyı sıfırla
  };

  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <Button className="w-96 h-16 bg-gradient-to-b from-lime-600 to-teal-500 my-8 text-3xl hover:ring-4">
            Get in touch
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription>
              <p className="text-3xl font-bold text-center">Drop me a line!</p>
            </DrawerDescription>
          </DrawerHeader>
          <footer className="grid sm:grid-cols-3 gap-2 p-8">
            <div
              className="grid grid-rows-2 justify-center
            "
            >
              <CopyToClipboard
                text="aliturabicaglar@gmail.com"
                onCopy={handleCopy}
              >
                <button className="">
                  <span className="text-slate-500">email</span>
                  {isCopied ? "Copied" : "aliturabicaglar@gmail.com"}
                </button>
              </CopyToClipboard>

              <CopyToClipboard text="+905388456910" onCopy={handleCopy}>
                <p className="p-4">
                  <span className="text-slate-500">phone</span>+90 538 845 69 10
                </p>
              </CopyToClipboard>
            </div>
            <div className="flex flex-wrap flex-around">
              <p className="p-4">TESTTESTTEST</p>
              <p className="p-4">TESTTESTTEST</p>
              <p className="p-4">TESTTESTTEST</p>
              <p className="p-4">TESTTESTTEST</p>
            </div>
            <div className="flex flex-wrap">
              <p className="p-4">TESTTESTTEST</p>
              <p className="p-4">TESTTESTTEST</p>
              <p className="p-4">TESTTESTTEST</p>
              <p className="p-4">TESTTESTTEST</p>
            </div>
          </footer>
        </DrawerContent>
      </Drawer>
    </>
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
