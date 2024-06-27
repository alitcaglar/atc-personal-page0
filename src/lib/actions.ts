"use server";

import { signIn, signOut } from "../../recycleTODOuser-apiye/auth";

export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/profile" });
}

export async function signInWithGithub() {
  await signIn("github", { redirectTo: "/profile" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/signed-out" });
}
