"use client";

import { useEffect, useState, cache } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { cn } from "@/lib/utils";

import Link from "next/link";
import EnterUpdateForm from "../Forms/EnterUpdateForm";
import { MdZoomOutMap } from "react-icons/md";
import PhotoEditButton from "../Buttons/PhotoEditButton";
import PhotoDeleteButton from "../Buttons/PhotoDeleteButton";

//import { auth } from "@/lib/auth";

export default function MainTopCarousel({ className, ...props }: any) {
  const [photos, setPhotos] = useState<any>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch("/api/get-photos");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setPhotos(data);

        // Log data after fetching and setting photos
        console.log(
          "log getPhotos ::: photos ::",
          data,
          "type::",
          typeof data,
          "length::",
          data.length
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos(); // Initial fetch

    // Avoid continuous fetch by ensuring dependencies are properly managed
  }, []);

  //const session = await auth();

  if (!photos) return null;
  if (photos) {
    console.log(photos, typeof photos, "***data****", photos.data);

    //const maxFivePhotos =
    //   photos.length > 5 ? [...photos].slice(-5) : [...photos];
    return (
      <Carousel
        className={cn(
          "md:mx-10 md:my-28 mx-4 my-4 md:w-5/12 w-full  ",
          className
        )}
      >
        <CarouselPrevious className="border-transparent absolute translate-x-14 z-10" />
        <CarouselNext className="border-transparent absolute -translate-x-14 z-10" />
        <CarouselContent className="cursor-pointer">
          {photos.data.map((photo: any, index: any) => {
            return (
              <CarouselItem className="text-center" key={index}>
                <p className="mt-4 text-2xl opacity-80 text-slate-500">
                  {photo.photoName}
                </p>
                <p className="mb-2 text-lg opacity-50 text-slate-500">
                  by {photo.takenBy} in {photo.takenYear}
                </p>

                <div className="w-full bg-gradient-to-l from-transparent via-lime-500 to-transparent h-1"></div>

                <Image
                  src={photo.photoUrl}
                  alt={photo.photoName}
                  className="relative w-full h-4/6 overflow-hidden object-cover"
                  width={500}
                  height={500}
                />
                <div className="w-full bg-gradient-to-l from-transparent via-lime-500 to-transparent h-1"></div>

                <div className="m-2 flex justify-around items-center text-3xl text-slate-500 opacity-70 animate-pulse">
                  <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
                    <EnterUpdateForm />
                  </div>

                  <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
                    <PhotoEditButton photoName={photo.photoName} />
                  </div>

                  {
                    /*session?.user?.role !== "user" && session?.user && */ <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
                      <PhotoDeleteButton
                        alertDialog="You are about to delete this photo"
                        photoName={photo.photoName}
                      />
                    </div>
                  }

                  <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
                    <Link
                      href={`/app-photos/${photo.photoUrl
                        .replaceAll("/", "slsh")
                        .replaceAll(".", "dott")}`}
                    >
                      <MdZoomOutMap />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    );
  }
}

// useEffect(() => {
//   const fetchPhotos = async () => {
//     try {
//       const res = await axios.get("/api/get-photos");
//       setPhotos(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchPhotos(); // Initial fetch

//   // Avoid continuous fetch by ensuring dependencies are properly managed
// }, []);
