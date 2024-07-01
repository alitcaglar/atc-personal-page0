import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { url } from "@/utils/url";

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const { data: resetData, error: resetPasswordError } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${url}profile/new-password`,
      });

    if (resetPasswordError) {
      console.error(
        "Supabase resetPasswordError error:",
        resetPasswordError.message
      );
      return NextResponse.json(
        { error: resetPasswordError.message },
        { status: 500 }
      );
    }

    console.log("Supabase resetPassword success:", resetData);

    return NextResponse.json(
      { message: "resetPassword successful", resetData },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
