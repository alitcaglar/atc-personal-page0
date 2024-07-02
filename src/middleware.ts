//middleware.ts

// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // const supabase = createMiddlewareClient({ req, res });
  // const {
  //   data: { session },
  //   error,
  // } = await supabase.auth.getSession();

  // session &&
  //   console.log(
  //     "***middleware*** Session email and role:",
  //     session.user.email,
  //     session.user.role
  //   );
  // error && console.log("***middleware***Error:", error);

  return res;
}
