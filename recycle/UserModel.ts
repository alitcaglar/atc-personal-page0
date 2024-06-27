// lib/models.ts
import { supabase } from "@/lib/connectToDb";

export interface User {
  id: number; // PostgreSQL'de genellikle "id" alanı otomatik artan bir tamsayıdır
  email: string;
  address?: string;
  role: "user" | "admin" | "atc266";
}

export const userTable = "users"; // Supabase'de kullanılacak tablo adı

export async function createUser(user: User): Promise<User | null> {
  const { data, error } = await supabase.from(userTable).insert([
    {
      email: user.email,
      address: user.address,
      role: user.role,
    },
  ]);

  if (error) {
    console.error("Error creating user:", error.message);
    return null;
  }

  if (data) {
    return data[0] as User;
  }

  return null;
}

// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error("Supabase URL or Key environment variables are not defined");
// }

// export interface User {
//   id: number; // PostgreSQL'de genellikle "id" alanı otomatik artan bir tamsayıdır
//   email: string;
//   address?: string;
//   role: "user" | "admin" | "atc266";
// }

// export const userTable = "users"; // Supabase'de kullanılacak tablo adı

// const supabase = createClient(supabaseUrl as string, supabaseKey as string);

// export async function createUser(user: User): Promise<User | null> {
//   const { data, error } = await supabase.from(userTable).insert([
//     {
//       email: user.email,
//       address: user.address,
//       role: user.role,
//     },
//   ]);

//   if (error) {
//     console.error("Error creating user:", error.message);
//     return null;
//   }

//   if (data) {
//     return data[0] as User;
//   }

//   return null;
// }
