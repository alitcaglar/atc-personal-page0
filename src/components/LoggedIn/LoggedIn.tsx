import { auth } from "@/lib/auth";

// export const revalidate = 1;

export default async function LoggedIn() {
  const session = await auth();

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
