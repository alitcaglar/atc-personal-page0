"use client";

import { Suspense, useEffect, useState } from "react";
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
import { toast } from "../ui/use-toast";
import { supabase } from "@/lib/connectToDb";
import { fetchSessionDataCSR } from "@/utils/fetchSessionData";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function MainTopCarousel({ className, ...props }: any) {
  const [photos, setPhotos] = useState<any>(null);
  const [sessionEmail, setSessionEmail] = useState<any>(null);
  const [sessionRole, setSessionRole] = useState<any>(null);
  const router = useRouter();

  const fetchPhotos = async () => {
    try {
      const res = await fetch("/api/get-photos");
      const responseBody = await res.json();
      if (res.ok) {
        setPhotos(responseBody);
        console.log("***photos fetched ***");
      } else {
        toast({
          title: `${responseBody.error}`,
          description: " ",
        });
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const subscription = supabase
      .channel("photo_albums")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "photo_albums" },
        (payload) => {
          fetchPhotos(); // Re-fetch photos on any changes
          console.log("Change received!**payload**", payload);
        }
      )
      .subscribe((status: any) => {
        if (status === "SUBSCRIBED") {
          console.log("Subscribed to photo_albums changes");
        }
      });

    fetchSessionDataCSR(setSessionEmail, setSessionRole);
    fetchPhotos(); // Initial fetch

    return () => {
      supabase.removeChannel(subscription);
      console.log("Unsubscribed from photo_albums changes");
    };
  }, []);

  if (!photos) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Carousel
        className={cn(
          "md:mx-10 md:my-28 mx-4 my-4 md:w-5/12 w-full m-4 overflow-hidden",
          className
        )}
      >
        <CarouselPrevious className="border-transparent absolute translate-x-14 z-10" />
        <CarouselNext className="border-transparent absolute -translate-x-14 z-10" />
        <CarouselContent className="cursor-pointer">
          {photos.data.map((photo: any, index: any) => (
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
              {!sessionEmail ? (
                <div>
                  <Link
                    href="/profile"
                    className="flex justify-center items-center m-2 ml-3 text-lime-600 dark:text-lime-400 hover:text-teal-600 dark:hover:text-teal-400 hover:transition hover:duration-300 opacity-80"
                  >
                    Please login to use CRUD features
                  </Link>
                </div>
              ) : (
                <div className="m-2 flex justify-around items-center text-3xl text-slate-500 opacity-70 animate-pulse">
                  <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
                    <EnterUpdateForm />
                  </div>

                  <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
                    <PhotoEditButton photoName={photo.photoName} />
                  </div>

                  <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
                    <PhotoDeleteButton
                      alertDialog="You are about to delete this photo"
                      photoName={photo.photoName}
                    />
                  </div>

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
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Suspense>
  );
}
