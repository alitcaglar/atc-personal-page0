"use client";
import { useSession } from "next-auth/react";

export default function LoggedIn() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-3xl text-slate-500 animate-ping">●</p>;
  }

  return (
    <>
      {session ? (
        <p className="text-3xl text-lime-600">●</p>
      ) : (
        <p className="text-3xl text-slate-500">○</p>
      )}
    </>
  );
}

// import { auth } from "@/lib/auth";

// export default async function LoggedIn() {
//   const session = await auth();
//   return <>{session && <p className="text-3xl text-lime-600 ">●</p>}</>;
// }
