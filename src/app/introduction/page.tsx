import Image from "next/image";

export default function Introduction() {
  return (
    <main className="flex flex-col items-center">
      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">000</span>
        Welcome to my personal page! I am a full-stack software engineer living
        in Turkey, with a background in nuclear energy engineering. I am fluent
        in English and Russian, and Turkish is my native language. I am open to
        relocation opportunities and am excited to showcase my work and
        capabilities here. Explore my projects, learn more about me, and feel
        free to get in touch!
      </p>
      <Image
        src="https://free-images.com/lg/37f0/computer_computers_1245714.jpg"
        alt="developer desk"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>
      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="font-semibold">
          <span className="opacity-0">000</span> Ali Turabi Caglar Personal Page{" "}
        </span>
        meticulously crafted with TypeScript to ensure robustness and clarity in
        every line of code. Built with Next.js, this site leverages server-side
        rendering and static site generation to provide optimal performance and
        SEO benefits. Embodying the fusion of nuclear energy and React through a
        captivating logo and dynamic hover effects, this site boasts a cohesive
        teal and lime color scheme that permeates every detail.
      </p>
      <Image
        src="https://free-images.com/lg/c1f5/nuclear_power_plant_nuclear_3.jpg"
        alt="nuclear power plant"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>

      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">000</span>
        Navigate effortlessly through /my-project to explore upcoming ventures,
        /introduction for personal insights, and a profile section offering
        secure login, signup, and signout functionalities. Experience seamless
        user interactions with forms that adapt intuitively based on session
        status, complete with email-verified password resets and robust Supabase
        Auth integration ensuring data security.
      </p>

      <Image
        src="https://free-images.com/lg/b9ef/computer_security_padlock_hacker.jpg"
        alt="cyber security padlock"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>

      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">000</span>
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
        src="https://free-images.com/lg/2239/blank_photos_hanging_on_0.jpg"
        alt="blank photos"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>

      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">000</span>
        Delve deeper into the technologies driving innovation with a captivating
        3D effect section highlighting software tools on hover, complemented by
        an intuitive footer inviting you to connect. Click{" "}
        <span className="font-semibold">Get in touch!</span> to reveal a drawer
        showcasing contact details, including an auto-copied email address,
        WhatsApp contact, and links to GitHub and LinkedIn. For direct
        communication, utilize the email form powered by Mailgun, ensuring swift
        and reliable correspondence.
      </p>

      <Image
        src="https://free-images.com/lg/c81f/art_gallery_painting_boy.jpg"
        alt="art gallery painting"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>

      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent m-8">
        <span className="opacity-0">000</span>
        Explore the Ali Turabi Caglar Personal Page, version-controlled using
        Git and GitHub, where creativity meets functionality with every
        interaction.
      </p>

      <Image
        src="https://free-images.com/lg/722e/traffic_highway_lights_night.jpg"
        alt="motion abstraction"
        width={500}
        height={150}
        className="m-8 sm:rounded-3xl"
      ></Image>
    </main>
  );
}
