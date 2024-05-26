import { PiHandSwipeRightThin } from "react-icons/pi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import e1 from "../../../public/images/e1.jpg";
import e2 from "../../../public/images/e2.jpg";
import e3 from "../../../public/images/e3.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getPhotos } from "@/utils/getPhotos";
import Link from "next/link";

export default async function MainTopCarousel({ className, ...props }: any) {
  const photos = await getPhotos();
  return (
    <Carousel
      className={cn(
        "md:mx-10 md:my-28 mx-4 my-4 md:w-5/12 w-full  ",
        className
      )}
    >
      <CarouselContent className="cursor-pointer">
        <CarouselItem className="text-center">
          {/* <p className="mt-4 text-2xl opacity-80 text-slate-500">image1</p>
          <p className="mb-2 text-lg opacity-50 text-slate-500">by</p>
          <Image
            src={e1}
            alt="image1"
            className="rounded-3xl border border-lime-500"
            width="500"
          />*/}
          {photos.map((photo, index) => {
            return (
              <div key={index}>
                <p className="mt-4 text-2xl opacity-80 text-slate-500">
                  {photo.photoName}
                </p>
                <p className="mb-2 text-lg opacity-50 text-slate-500">
                  by {photo.takenBy} in {photo.takenYear}
                </p>
                <Link href={`/app-photos/${photo.photoName}`}>
                  <Image
                    src={photo.photoUrl}
                    alt={photo.photoName}
                    className="w-full rounded-3xl border border-lime-500"
                    width="500"
                    height="500"
                  />
                </Link>
              </div>
            );
          })}
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-center text-3xl opacity-70 animate-pulse">
        <PiHandSwipeRightThin />
      </div>
    </Carousel>
  );
}
