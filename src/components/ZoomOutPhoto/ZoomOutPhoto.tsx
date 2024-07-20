"use client";

import Link from "next/link";
import { MdZoomOutMap } from "react-icons/md";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ZoomOutPhoto({ photo }: any) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    setIsLoading(false);
  }

  return (
    <button
      onClick={() => {
        handleClick;
      }}
    >
      {" "}
      {isLoading ? (
        <div className="animate-spin px-3">
          <AiOutlineLoading3Quarters />
        </div>
      ) : (
        <Link
          href={`/app-photos/${photo.photoUrl
            .replaceAll("/", "slsh")
            .replaceAll(".", "dott")}`}
        >
          <MdZoomOutMap />
        </Link>
      )}
    </button>
  );
}
