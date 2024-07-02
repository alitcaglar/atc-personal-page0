import { supabase } from "@/lib/connectToDb";

export default async function Atc266Panel() {
  // import { unstable_noStore as noStore } from "next/cache";

  async function getUserRoles() {
    // noStore();
    try {
      const { data, error } = await supabase.from("users").select("*");

      data && console.log(data);
      error && console.log(error);

      // throw new Error("Failed to fetch photos");
    } catch (error) {
      console.error("Error fetching users:", error);
      // return NextResponse.json(
      //   { success: false, error: "Failed to fetch photos" },
      //   { status: 500 }
      // );
    }
  }
  return (
    <div className="min-h-screen m-16">
      {/* <h1 className="text-3xl font-bold underline m-8">Developer Panel</h1>
      <p>Change user role</p>

      <div>
        {userRoles?.map((user, index) => {
          return (
            <div key={index} className="grid grid-cols-3 ">
              <p
                className={
                  index % 2 === 0
                    ? "p-4 bg-slate-500 bg-opacity-20 my-1"
                    : "p-4 my-1"
                }
              >
                {user.email}
              </p>

              <p
                className={
                  (index % 2 === 0 ? "bg-slate-500 bg-opacity-20" : " ") +
                  " p-4 my-1"
                }
              >
                {user.role}
              </p>
              {user.role === "atc266" ? (
                <p
                  className={
                    index % 2 === 0
                      ? "text-center text-red-500 p-4 bg-slate-500 bg-opacity-20 my-1"
                      : "text-center text-red-500 p-4 my-1"
                  }
                >
                  ***Developer***
                </p>
              ) : (
                <div
                  className={
                    index % 2 === 0
                      ? "flex justify-center p-4 bg-slate-500 bg-opacity-20 my-2"
                      : "flex justify-center p-4 my-2"
                  }
                >
                  <PanelSwitchRole email={user.email} />
                </div>
              )}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
