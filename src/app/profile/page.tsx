import {
  signInWithGithub,
  signInWithGoogle,
  signOutAction,
} from "@/lib/actions";
import { auth } from "@/lib/auth";

export default async function Profile() {
  const session = await auth();
  console.log(session);
  console.log("*** test console server my-profile ***");

  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <p className="m-16 p-2 Text-3xl font-bold bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent text-center">
        Welcome{" "}
        <span className="italic">
          {session?.user?.name ? session?.user?.name : "Guest"}
        </span>
      </p>
      {session?.user?.name ? (
        <div>
          <form action={signOutAction}>
            <button className="m-2 bg-gradient-to-l from-lime-600 to-teal-600 hover:ring-4 transition duration-300 p-8 dark:text-slate-900 text-slate-200 rounded-xl drop-shadow-xl shadow-slate-500 font-bold">
              Sign Out
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div>
            <form action={signInWithGoogle}>
              <button className="m-2 bg-gradient-to-l from-lime-600 to-teal-600 hover:ring-4 transition duration-300 p-8 dark:text-slate-900 text-slate-200 rounded-xl drop-shadow-xl shadow-slate-500 font-bold">
                Sign In with Google
              </button>
            </form>
          </div>
          <div className="mt-24">
            <form action={signInWithGithub}>
              <button className="m-2 bg-gradient-to-l from-lime-600 to-teal-600 hover:ring-4 transition duration-300 p-8 dark:text-slate-900 text-slate-200 rounded-xl drop-shadow-xl shadow-slate-500 font-bold">
                Sign In with Github
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
