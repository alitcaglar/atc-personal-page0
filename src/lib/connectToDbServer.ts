// lib/supabase.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Supabase client'ı oluşturan bir fonksiyon
export function getSupabaseClient() {
  const cookieStore = cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Handle errors as needed
          }
        },
      },
    }
  );
}

export const supabase = getSupabaseClient();
