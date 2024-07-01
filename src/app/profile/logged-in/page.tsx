import { supabase } from "@/lib/connectToDb";
import { NextResponse, NextRequest } from "next/server";

export default async function LoggedIn(req: NextRequest, res: NextResponse) {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  console.log("Session:", session);

  return <div>Logged In</div>;
}

// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse, NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });
//   const {
//     data: { session },
//     error,
//   } = await supabase.auth.getSession();
//   //   if (!session) {
//   //     return NextResponse.rewrite(new URL("/profile/logged-in", req.url));
//   //   }

//   return res;
// }
