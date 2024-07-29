"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function MainTypewriter() {
  return (
    <main>
      <div className="App text-5xl m-8 w-72 h-[36rem] bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">
        <Typewriter
          words={[
            "Eat(); Sleep(); Code();  Repeat!",
            "Welcome to my personal page! Be part of my journey as a developer.",
            "Always learning, this problem-solving expert turned developer crafts intuitive applications.",
            "From nuclear precision to digital finesse, this ever-evolving developer's expertise shines.",
            "Complex challenges fuel innovation! This growth-minded developer delivers smart solutions.",
            "User experience at heart, this developer constantly learns to create ever-more captivating applications.",
            "Efficiency meets elegance, unique skillset and growth mindset.",
            "Analytical mind meets technical prowess, Ali is always learning to deliver exceptional results.",
            "Structured approach meets meticulous coding, this growth-oriented developer builds robust, scalable applications.",
            "Systems thinking meets full-stack expertise, Ali embraces learning to create seamless integrations.",
            "Problem-solving, critical thinking, and a love of learning empower me to tackle any challenge.",
            "Nuclear background meets a growth mindset, this developer is a team's dream come true.",
          ]}
          loop={999}
          cursor
          cursorStyle="|"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </main>
  );
}
