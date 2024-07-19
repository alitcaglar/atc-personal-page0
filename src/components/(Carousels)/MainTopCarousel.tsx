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
import { cookies } from "next/headers";
import { headers } from "next/headers";

import { supabase } from "@/lib/connectToDbServer";

export default async function MainTopCarousel({ className, ...props }: any) {
  const { data: photos, error } = await supabase
    .from("photo_albums") // Supabase'deki tablo adı
    .select("*");

  if (!photos) return null;

  return (
    <Carousel
      className={cn(
        "md:mx-10 md:my-28 mx-4 my-4 md:w-5/12 w-full m-4 overflow-hidden",
        className
      )}
    >
      <CarouselPrevious className="border-transparent absolute translate-x-14 z-10" />
      <CarouselNext className="border-transparent absolute -translate-x-14 z-10" />
      <CarouselContent className="cursor-pointer">
        {photos?.map((photo: any, index: any) => (
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

//// "use client";

// import { useEffect, useState } from "react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import Image from "next/image";
// import { cn } from "@/lib/utils";

// import Link from "next/link";
// import EnterUpdateForm from "../Forms/EnterUpdateForm";
// import { MdZoomOutMap } from "react-icons/md";
// import PhotoEditButton from "../Buttons/PhotoEditButton";
// import PhotoDeleteButton from "../Buttons/PhotoDeleteButton";
// import { toast } from "../ui/use-toast";
// import { supabase } from "@/lib/connectToDb";
// import { fetchSessionDataCSR } from "@/utils/fetchSessionData";
// import { useRouter } from "next/navigation";

// export default function MainTopCarousel({ className, ...props }: any) {
//   const fetchPhotos = async () => {
//     try {
//       const res = await fetch("/api/get-photos");
//       const responseBody = await res.json();
//       setPhotos(responseBody);
//       if (!res.ok) {
//         toast({
//           title: `${responseBody.error}`,
//           description: " ",
//         });
//         throw new Error("Network response was not ok");
//       }

//       // Log responseBody after fetching and setting photos
//       // console.log(
//       //   "log getPhotos ::: photos ::",
//       //   responseBody,
//       //   "type::",
//       //   typeof responseBody,
//       //   "length::",
//       //   responseBody.length
//       // );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //session

//   const router = useRouter();

//   const [sessionEmail, setSessionEmail] = useState<any>(null);
//   const [sessionRole, setSessionRole] = useState<any>(null);

//   //session//

//   // Realtime subscription
//   const subscription = supabase
//     .channel("photo_albums")
//     .on(
//       "postgres_changes",
//       { event: "*", schema: "public", table: "photo_albums" },
//       (payload) => {
//         console.log("Change received!**payload**", payload);
//         fetchPhotos(); // Re-fetch photos on any changes
//       }
//     )
//     .subscribe((status: any) => {
//       if (status === "SUBSCRIBED") {
//         console.log("Subscribed to photo_albums changes");
//       }
//     });

//   // return () => {
//   //   supabase.removeChannel(subscription);
//   //   console.log("Unsubscribed from photo_albums changes");
//   // };
//   // Realtime subscription//

//   const [photos, setPhotos] = useState<any>(null);

//   fetchSessionDataCSR(setSessionEmail, setSessionRole);

//   useEffect(() => {
//     fetchPhotos(); // Initial fetch
//   }, []);

//   if (!photos) return null;
//   if (photos) {
//     /// console.log(photos, typeof photos, "*photos.data*", photos.data);

//     //const maxFivePhotos =
//     //   photos.length > 5 ? [...photos].slice(-5) : [...photos];
//     return (
//       <Carousel
//         className={cn(
//           "md:mx-10 md:my-28 mx-4 my-4 md:w-5/12 w-full m-4 overflow-hidden",
//           className
//         )}
//       >
//         <CarouselPrevious className="border-transparent absolute translate-x-14 z-10" />
//         <CarouselNext className="border-transparent absolute -translate-x-14 z-10" />
//         <CarouselContent className="cursor-pointer">
//           {photos.data.map((photo: any, index: any) => {
//             return (
//               <CarouselItem className="text-center" key={index}>
//                 <p className="mt-4 text-2xl opacity-80 text-slate-500">
//                   {photo.photoName}
//                 </p>
//                 <p className="mb-2 text-lg opacity-50 text-slate-500">
//                   by {photo.takenBy} in {photo.takenYear}
//                 </p>
//                 <div className="w-full bg-gradient-to-l from-transparent via-lime-500 to-transparent h-1"></div>
//                 <Image
//                   src={photo.photoUrl}
//                   alt={photo.photoName}
//                   className="relative w-full h-4/6 overflow-hidden object-cover"
//                   width={500}
//                   height={500}
//                 />
//                 <div className="w-full bg-gradient-to-l from-transparent via-lime-500 to-transparent h-1"></div>
//                 {/* TODO session control */}
//                 {!sessionEmail ? (
//                   <div>
//                     <Link
//                       href="/profile"
//                       className="flex justify-center items-center m-2 ml-3 text-lime-600 dark:text-lime-400 hover:text-teal-600 dark:hover:text-teal-400 hover:transition hover:duration-300 opacity-80"
//                     >
//                       Please login to use CRUD features
//                     </Link>
//                   </div>
//                 ) : (
//                   <div className="m-2 flex justify-around items-center text-3xl text-slate-500 opacity-70 animate-pulse">
//                     <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
//                       <EnterUpdateForm />
//                     </div>

//                     <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
//                       <PhotoEditButton photoName={photo.photoName} />
//                     </div>

//                     {
//                       /*session?.user?.role !== "user" && session?.user && */ <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
//                         <PhotoDeleteButton
//                           alertDialog="You are about to delete this photo"
//                           photoName={photo.photoName}
//                         />
//                       </div>
//                     }

//                     <div className="hover:ring-teal-600 hover:ring-2 p-2 w-12 h-12 rounded-lg flex justify-center items-center">
//                       <Link
//                         href={`/app-photos/${photo.photoUrl
//                           .replaceAll("/", "slsh")
//                           .replaceAll(".", "dott")}`}
//                       >
//                         <MdZoomOutMap />
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>
//       </Carousel>
//     );
//   }
// }

// // useEffect(() => {
// //   const fetchPhotos = async () => {
// //     try {
// //       const res = await axios.get("/api/get-photos");
// //       setPhotos(res.data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   fetchPhotos(); // Initial fetch

// //   // Avoid continuous fetch by ensuring dependencies are properly managed
// // }, []);
