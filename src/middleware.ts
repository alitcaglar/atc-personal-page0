// import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

// // alttaki urlye girdiginde ustteki urlye otomatik yonlendirir
// export function middleware(request: Request) {
//   console.log("log ::  middleware request sucessful");

//   return NextResponse.redirect(new URL("/my-projects", request.url));
// }

// // alttaki urlye girdiginde ustteki urlye otomatik yonlendirir

// next auth ile programatiklestirme

export const middleware = auth;

// next auth ile programatiklestirme

export const config = {
  matcher: "/profile/login",
  runtime: "edge", // for Edge API Routes only
  unstable_allowDynamic: [
    "/**", // allows a single file
    "/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
};

//bkz auth.js callback
