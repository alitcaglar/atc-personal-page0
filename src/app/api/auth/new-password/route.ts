import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const password = await req.json();

    if (!password) {
      console.error("Password is required");
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const { error: updateUserError, data } = await supabase.auth.updateUser({
      password: password,
    });

    if (updateUserError) {
      console.error("Supabase signIn error:", updateUserError.message);
      return NextResponse.json(
        { error: updateUserError.message },
        { status: 500 }
      );
    }

    console.log("Supabase updateUser success:", data);

    return NextResponse.json(
      { message: "updateUser successful", data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
