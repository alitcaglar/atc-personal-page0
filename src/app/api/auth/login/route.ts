import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const { email, password } = await req.json();

    if (!email || !password) {
      console.error("Email and password are required");
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const { error: signInError, data } = await supabase.auth.signInWithPassword(
      {
        email,
        password,
      }
    );

    if (signInError) {
      console.error("Supabase signIn error:", signInError.message);
      return NextResponse.json({ error: signInError.message }, { status: 500 });
    }

    console.log("Supabase signIn success:", data);

    return NextResponse.json(
      { message: "Authentication successful", data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
