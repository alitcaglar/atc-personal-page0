"use client";

import { useEffect, useState } from "react";
import BackgroundSlider from "react-background-slider";

export default function BackgroundSliderComponent() {
  return (
    <div
      className="absolute bg-cover bg-center w-full h-full top-0 -z-10  mix-blend-overlay"
      // style={{
      //   backgroundImage:
      //     "url('https://images.pexels.com/photos/11751212/pexels-photo-11751212.jpeg')",
      // }}
    >
      <BackgroundSlider
        images={[
          "https://i.ibb.co/CWjtNGz/cappa.jpg",
          "https://i.ibb.co/g7T12XS/istanbul-archaeological-museum.jpg",
          "https://i.ibb.co/w0SCf3h/istanbul.jpg",
          "https://i.ibb.co/w4vD0n4/kyoto.jpg",
          "https://i.ibb.co/XJh4ycg/pamukkale.jpg",
          "https://i.ibb.co/mz0wtGx/sagalassos-ancient-city.jpg",
        ]}
        duration={5} // Her resmin görünme süresi
        transition={1} // Geçiş süresi
      />
    </div>
  );
}
