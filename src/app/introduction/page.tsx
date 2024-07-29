import { SiReacthookform } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { FaReact } from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { TbBrandVercel } from "react-icons/tb";
import { SiMailgun } from "react-icons/si";

import Image from "next/image";

export default function Introduction() {
  return (
    <main className="flex flex-col items-center">
      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">0</span>
        Welcome to my personal page! I am a full-stack React developer living in
        Turkiye, with a background in nuclear energy engineering. I am fluent in
        English and Russian, and Turkish is my native language. I am open to
        freelance projects and relocation opportunities and am excited to
        showcase my work and capabilities here. Explore my projects, learn more
        about me, and feel free to get in touch!
      </p>
      <Image
        src="https://free-images.com/lg/37f0/computer_computers_1245714.jpg"
        alt="developer desk"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>
      <div className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <p className="mt-4">
          <span className="opacity-0">0</span> Ali Turabi Caglar Personal Page
          meticulously crafted with{" "}
          <span className="font-semibold">TypeScript</span> to ensure robustness
          and clarity in every line of code.
        </p>
        <p className="m-8 text-6xl text-slate-500 hover:text-slate-400 transition flex justify-around items-center">
          <SiTypescript />
        </p>

        <p className="mt-4">
          <span className="opacity-0">0</span> Built with{" "}
          <span className="font-semibold">Next.js</span>, this site leverages
          server-side rendering and static site generation for optimal
          performance and SEO benefits.
        </p>
        <p className="m-8 text-6xl text-slate-500 hover:text-slate-400 transition flex justify-around items-center">
          <SiNextdotjs />
        </p>

        <p className="mt-4">
          <span className="opacity-0">0</span> Styled with{" "}
          <span className="font-semibold">TailwindCSS</span> and enhanced by{" "}
          <span className="font-semibold">Shadcn.UI</span> for a sleek user
          interface, it features dynamic elements powered by{" "}
          <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">React Hook Form</span> for seamless
          interactivity.
        </p>
        <div className="m-8 text-6xl text-slate-500 hover:text-slate-400 transition flex justify-around items-center">
          <RiTailwindCssFill />

          <SiShadcnui />

          <FaReact />

          <SiReacthookform />
        </div>

        <p className="mt-4">
          <span className="opacity-0">0</span> The site integrates{" "}
          <span className="font-semibold">Supabase</span> for secure
          authentication and efficient CRUD operations, utilizing{" "}
          <span className="font-semibold">PostgreSQL</span> for data management
          and <span className="font-semibold">Cloudinary</span> for image
          hosting.
        </p>
        <div className="m-8 text-6xl text-slate-500 hover:text-slate-400 transition flex justify-around items-center">
          <RiSupabaseLine />

          <SiCloudinary />
        </div>

        <p className="mt-4">
          <span className="opacity-0">0</span> Form validation is handled by{" "}
          <span className="font-semibold">Zod</span>, ensuring data integrity.
          Continuous deployment is managed via{" "}
          <span className="font-semibold">Vercel</span>, and the project is
          versioned with <span className="font-semibold">Git</span> and hosted
          on <span className="font-semibold">GitHub</span>.
        </p>
        <div className="m-8 text-6xl text-slate-500 hover:text-slate-400 transition flex justify-around items-center">
          <SiZod />
          <TbBrandVercel />
          <FaGit />
          <FaGithub />
        </div>

        <p className="mt-4">
          <span className="opacity-0">0</span> Additionally,{" "}
          <span className="font-semibold">Mailgun</span> powers the contact form
          for reliable communication.
        </p>
        <p className="m-8 text-6xl text-slate-500 hover:text-slate-400 transition flex justify-around items-center">
          <SiMailgun />
        </p>

        <p className="mt-4">
          <span className="opacity-0">0</span> Embodying the fusion of nuclear
          energy and React through a captivating logo and dynamic hover effects,
          this site boasts a cohesive teal and lime color scheme that permeates
          every detail.
        </p>
      </div>
      <Image
        src="https://free-images.com/lg/c1f5/nuclear_power_plant_nuclear_3.jpg"
        alt="nuclear power plant"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>
      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">0</span>
        Enhance your viewing experience with a versatile dark/light mode
        switcher seamlessly integrated into the navigation, harmoniously
        supported by Shadcn UI throughout the site. Engage with a homepage
        featuring a typewriter introduction and a dynamic carousel photo album,
        powered by Supabase and Cloudinary for seamless image management via
        Next.js API routes. Each photo boasts exclusive controls tailored for
        authenticated users, leveraging advanced CRUD operations safeguarded by
        Supabase Auth and Next.js middleware.
      </p>

      <Image
        src="https://free-images.com/lg/b9ef/computer_security_padlock_hacker.jpg"
        alt="cyber security padlock"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>
      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">0</span>
        The <span className="font-semibold">My Projects</span> page allows you
        to explore upcoming projects.
      </p>
      <Image
        src="https://free-images.com/lg/2239/blank_photos_hanging_on_0.jpg"
        alt="blank photos"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>

      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">0</span>
        The <span className="font-semibold">Introduction</span> page presents
        personal information and details about the site an about me.
      </p>

      <Image
        src="https://free-images.com/lg/c81f/art_gallery_painting_boy.jpg"
        alt="art gallery painting"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>

      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">0</span>
        The <span className="font-semibold">Profile</span> includes secure
        login, signup, and signout functionalities enhance your user experience.
        Thanks to Supabase Auth integration, your data is safeguarded, and
        dynamic form handling based on session status improves user
        interactions.
      </p>

      <Image
        src="https://free-images.com/lg/722e/traffic_highway_lights_night.jpg"
        alt="motion abstraction"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>

      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">0</span>
        The page highlights software tools with captivating 3D effects,
        complemented by a footer inviting users to connect. Clicking the
        <span className="font-semibold"> Get in touch!</span> button reveals a
        drawer with contact information, including an auto-copied email address,
        WhatsApp number, and links to GitHub and LinkedIn. Additionally, an
        email form powered by Mailgun ensures swift and reliable communication.
      </p>
      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">0</span>
        Explore the Ali Turabi Caglar Personal Page, version-controlled with Git
        and GitHub, where creativity meets functionality in every interaction.
      </p>
    </main>
  );
}
