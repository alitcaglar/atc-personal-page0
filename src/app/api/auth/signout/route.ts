import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);

  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return NextResponse.redirect(url.origin, { status: 301 });
  } catch (error) {
    console.error("Sign out error:", error);
    return NextResponse.json({ error: "Failed to sign out" }, { status: 500 });
  }
}
