import { auth } from "@/lib/auth";

export default async function Profile() {
  const session = await auth();
  console.log(session);
  console.log("*** test console server my-profile ***");

  return (
    <main className="min-h-screen">
      <p>
        Welcome{" "}
        <span className="italic">
          {session?.user?.name ? session?.user?.name : "Guest"}
        </span>
      </p>
    </main>
  );
}
