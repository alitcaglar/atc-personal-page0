"use client";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReacthookform } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Emblems() {
  return (
    <>
      <Tilt>
        <p className="text-2xl text-slate-500 text-center mb-4">
          Some of{" "}
          <span className="text-lime-600 dark:text-teal-500 text-3xl">
            software technologies
          </span>{" "}
          that I prefer to use
        </p>
        <div className="flex flex-wrap justify-center items-stretch">
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400 transition ">
              <HoverCardTrigger>
                <SiMongodb />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Flexible, scalable NoSQL database for modern applications.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <FaHtml5 />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Latest version of markup language for web content.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <IoLogoJavascript />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Dynamic programming language for web development.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <SiReacthookform />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Library for managing forms in React applications.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <SiNextdotjs />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <FaGit />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Distributed version control system for collaborative
                development.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <FaGithub />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Web-based platform for hosting Git repositories.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <FaNpm />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                JavaScript package manager for managing dependencies easily.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <FaReact />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Declarative UI library for building interactive web
                applications.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <RiTailwindCssFill />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Utility-first CSS framework for rapid web development.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <FaCss3 />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Styling language with animations and responsive design.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <SiShadcnui />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Component library for building accessible web applications.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <SiCloudinary />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Cloud-based media management service for web developers.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <SiZod />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                TypeScript-first schema declaration and validation library.
              </HoverCardContent>
            </div>
          </HoverCard>
          <HoverCard>
            <div className="m-8 text-6xl text-slate-500 hover:text-slate-400">
              <HoverCardTrigger>
                <SiTypescript />
              </HoverCardTrigger>
              <HoverCardContent className="text-3xl">
                Strongly typed programming language that builds on JavaScript.
              </HoverCardContent>
            </div>
          </HoverCard>
        </div>
      </Tilt>
    </>
  );
}
