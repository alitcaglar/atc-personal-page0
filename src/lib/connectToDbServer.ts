import { createServerClient } from "@supabase/ssr";

export function createSupabaseClient() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // Cookie yönetimini devre dışı bırakmak için boş bir seçenek nesnesi kullanabilirsiniz
      cookies: {
        getAll() {
          return []; // Boş bir array döndürerek cookie işlemlerini devre dışı bırakabilirsiniz
        },
        setAll() {
          // Cookie ayarlarını yapmayın
        },
      },
    }
  );
}

export const supabase = createSupabaseClient();
