// /api/auth/signup

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = cookies();

    const { email, password } = await req.json(); // Parse JSON body directly

    console.log("Received email:", email);
    console.log("Received password:", password);

    if (!email || !password) {
      console.error("Email and password are required");
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const { error: signUpError, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "admin",
        },
      },
    });

    if (signUpError) {
      console.error("Supabase admin signUp error:", signUpError.message);
      return NextResponse.json({ error: signUpError.message }, { status: 500 });
    }

    console.log("Supabase admin signUp success:", data);

    return NextResponse.json(
      { message: "Authentication successful", data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
