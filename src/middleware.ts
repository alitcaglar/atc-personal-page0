import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import squareWasm from "@/lib/square.wasm";

export default async function middleware() {
  // Kimlik doğrulama işlemi
  const authResult = await auth(); // Bu fonksiyonun nasıl çalıştığını ve döndürdüğünü varsayılan olarak ele alıyorum

  // WASM modülünü yükleme ve kullanma işlemi
  const wasmModule = await WebAssembly.instantiate(squareWasm);

  // Ensure the exports have the correct type
  const instance = wasmModule.instance as WebAssembly.Instance;
  const exports = instance.exports as { square: (x: number) => number };

  // Call the exported square function
  const answer = exports.square(9);

  // NextResponse oluşturma ve özelleştirme
  const response = NextResponse.next();
  response.headers.set("x-square", answer.toString());

  // İki işlevi bir araya getirerek döndürme
  return response;
}

///////////////////////////////////////////////////////////////////////////

// import { auth } from "@/lib/auth";
// import { NextResponse } from "next/server";
// import squareWasm from "@/lib/square.wasm";

// export default async function middleware() {
//   // Kimlik doğrulama işlemi
//   const authResult = await auth(); // Bu fonksiyonun nasıl çalıştığını ve döndürdüğünü varsayılan olarak ele alıyorum

//   // WASM modülünü yükleme ve kullanma işlemi
//   const m = await WebAssembly.instantiate(squareWasm);
//   const answer = m.exports.square(9);

//   // NextResponse oluşturma ve özelleştirme
//   const response = NextResponse.next();
//   response.headers.set("x-square", answer.toString());

//   // İki işlevi bir araya getirerek döndürme
//   return response;
// }

//////////////////////////////////////////////////////////////////////////

// // import { NextResponse } from "next/server";
// import { auth } from "@/lib/auth";

// // // alttaki urlye girdiginde ustteki urlye otomatik yonlendirir
// // export function middleware(request: Request) {
// //   console.log("log ::  middleware request sucessful");

// //   return NextResponse.redirect(new URL("/my-projects", request.url));
// // }

// // // alttaki urlye girdiginde ustteki urlye otomatik yonlendirir

// // next auth ile programatiklestirme

// export const middleware = auth;

// // next auth ile programatiklestirme

// export const config = {
//   matcher: "/profile/login",
//   runtime: "experimental-edge", // for Edge API Routes only
//   unstable_allowDynamic: [
//     "/**", // allows a single file
//     "/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
//   ],
// };

// //bkz auth.js callback
