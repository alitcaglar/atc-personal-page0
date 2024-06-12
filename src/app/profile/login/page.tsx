import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Login() {
  const session = await auth();
  console.log(session);
  console.log("*** test console server my-profile ***");

  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <p className="m-8 p-2 Text-3xl font-bold bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent text-center">
        Welcome{" "}
        <span className="italic">
          {session?.user?.name ? session?.user?.name : "Guest"}
        </span>
      </p>
      {!session?.user?.name ? (
        <Link
          href="/profile/login"
          className="m-2 bg-gradient-to-r from-lime-600 to-teal-600 hover:ring-4 transition duration-300 p-8 dark:text-slate-900 text-slate-200 rounded-xl drop-shadow-xl shadow-slate-500"
        >
          Click Here to Sign In
        </Link>
      ) : (
        <Link
          href="/profile/login"
          className="m-2 bg-gradient-to-r from-lime-600 to-teal-600 hover:ring-4 transition duration-300 p-8 dark:text-slate-900 text-slate-200 rounded-xl drop-shadow-xl shadow-slate-500"
        >
          Click Here to Sign Out
        </Link>
      )}
    </main>
  );
}
