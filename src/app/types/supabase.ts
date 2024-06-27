import {
  SupabaseClient,
  PostgrestSingleResponse,
  PostgrestResponse,
} from "@supabase/supabase-js";

// Define types for your database tables within a namespace
export namespace definitions {
  export interface PhotoAlbum {
    id: string;
    photoName: string;
    takenBy: string;
    takenYear: string;
    photoUrl: string;
  }

  export interface User {
    id: string;
    email: string;
    address?: string;
    role: "user" | "admin" | "atc266";
  }
}

// Define a type for your Supabase client instance
export type Supabase = SupabaseClient;

// Define response types for Supabase queries using the defined interfaces
export type PhotoAlbumResponse =
  PostgrestSingleResponse<definitions.PhotoAlbum>;
export type PhotoAlbumListResponse = PostgrestResponse<definitions.PhotoAlbum>;

export type UserResponse = PostgrestSingleResponse<definitions.User>;
export type UserListResponse = PostgrestResponse<definitions.User>;
