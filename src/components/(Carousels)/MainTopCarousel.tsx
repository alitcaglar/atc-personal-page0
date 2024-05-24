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

export default function MainTopCarousel({ className, ...props }: any) {
  return (
    <Carousel
      className={cn(
        "md:mx-10 md:my-28 mx-4 my-4 md:w-5/12 w-full  ",
        className
      )}
    >
      <CarouselContent className="cursor-pointer">
        <CarouselItem className="">
          <Image
            src={e1}
            alt="image1"
            className="w-full rounded-3xl border border-lime-500"
          />
        </CarouselItem>
        <CarouselItem className="flex">
          <Image
            src={e2}
            alt="image2"
            className="w-full rounded-3xl border border-lime-500 "
          />
        </CarouselItem>
        <CarouselItem className="flex">
          <Image
            src={e3}
            alt="image3"
            className="w-full rounded-3xl border border-lime-500"
          />
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-center text-3xl opacity-70 animate-pulse">
        <PiHandSwipeRightThin />
      </div>
    </Carousel>
  );
}
