//api/auth/session

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    session &&
      console.log(
        "*api/auth/session* Session email and role:",
        session.user.email,
        session.user.role
      );
    error && console.log("*api/auth/session* Error:", error);

    return NextResponse.json({ success: true, session });
  } catch (error) {
    console.error("*Error fetching session:*", error);
    return NextResponse.json(
      { success: false, error: "*Failed to fetch session*" },
      { status: 500 }
    );
  }
}

//
