"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsLampFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center">
      <button
        className="p-4 text-3xl flex items-center dark:text-slate-100 text-slate-800 transition hover:animate-pulse duration-500"
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        <BsLampFill />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
