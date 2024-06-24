"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function SignedOut() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/profile"); // 1 saniye sonra "home" sayfasına yönlendir
    }, 500);
  }, []);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <p className="text-3xl bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent animate-pulse">
        Signed Out Redirecting...
      </p>
    </main>
  );
}
