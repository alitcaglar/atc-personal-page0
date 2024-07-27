"use client";

import { DiAtom } from "react-icons/di";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import ThemeSwitcher from "./ThemeSwitcher";
import navLinks from "@/utils/navLinks";
import HeaderBottom from "./HeaderBottom";
import { CgProfile } from "react-icons/cg";

import { Separator } from "@/components/ui/separator";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  return (
    <div className={pathname === "/cv-page" ? "hidden" : ""}>
      <header className="h-[73px] flex justify-between backdrop-blur-sm fixed top-0 left-0 right-0 bg-slate-200 bg-opacity-40 dark:bg-slate-800 dark:bg-opacity-60 z-30">
        <Link
          href="/"
          className="flex items-center m-2 ml-3 text-lime-600 dark:text-lime-400 hover:text-teal-600 dark:hover:text-teal-400 hover:transition hover:duration-300"
        >
          <p className="text-6xl drop-shadow-md opacity-70 ml-4">
            <DiAtom />
          </p>
          <span className="p-3 drop-shadow-md">
            <span className="font-extrabold">Ali</span>
            <span className="opacity-70 font-bold">Turabi</span>
            <span className="opacity-40 font-semibold">Caglar</span>
          </span>

          <span className="sm:hidden font-bold opacity-10 text-teal-600">
            {pathname.replaceAll("-", " ").split("/")[1]}
          </span>
        </Link>
        <nav className="flex items-center ">
          <button
            onClick={() => setOpenNav(!openNav)}
            className={
              "sm:hidden text-3xl transition-all duration-300 active:translate-y-2 mr-12 absolute -right-2" +
              (openNav ? " text-teal-500" : " text-slate-500")
            }
          >
            <CiMenuBurger />
          </button>
          <div
            onClick={() => setOpenNav(!openNav)}
            className={
              !openNav
                ? "hidden"
                : "block absolute overflow-hidden bg-black bg-opacity-10 w-full h-screen right-0 top-[73px] bottom-0"
            }
          ></div>

          <ul
            className={
              "sm:flex items-center mr-3 overflow-hidden " +
              (openNav
                ? "left-0 fixed top-[73px] right-0 px-8 drop-shadow-lg rounded-lg w-full bg-gradient-radial bg-slate-200 dark:bg-slate-900 opacity-90 backdrop-blur-md h-56 transition-all duration-500 pt-2"
                : "sm:h-auto h-0 ")
            }
          >
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <li
                  className={
                    isActive
                      ? "p-2 font-bold bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent text-center"
                      : "p-2 font-bold text-slate-500  hover:bg-gradient-to-r hover:from-teal-500 hover:to-lime-500 hover:bg-clip-text hover:text-transparent hover:transition hover:ease-in-out hover:duration-300 text-center hover:drop-shadow-md "
                  }
                  key={index}
                >
                  <Link href={link.path} onClick={() => setOpenNav(false)}>
                    {link.title}
                  </Link>
                  {openNav && <Separator className="mt-2" />}
                </li>
              );
            })}
            <li
              className={
                pathname.startsWith("/profile")
                  ? "p-2 text-teal-500  text-3xl flex justify-center items-center"
                  : "p-2  text-slate-500  hover:text-teal-500 text-3xl hover:transition hover:ease-in-out hover:duration-300    flex justify-center items-center"
              }
            >
              <Link href="/profile" onClick={() => setOpenNav(false)}>
                <CgProfile />
              </Link>
            </li>
            {openNav && <Separator className="mt-2" />}
            <li>
              <ThemeSwitcher />
            </li>
            <li className="mx-4"></li>
          </ul>
        </nav>
      </header>
      <HeaderBottom />
    </div>
  );
}
