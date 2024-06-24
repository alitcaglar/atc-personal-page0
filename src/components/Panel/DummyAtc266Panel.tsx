import DummyPanelSwitchRole from "./DummySwitchRole";

export default function DummyAtc266Panel() {
  const handleSubmit = (event: any) => {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    // Dummy function, does nothing
  };

  const dummyUserRoles = [
    { email: "user1@example.com", role: "admin" },
    { email: "user2@example.com", role: "user" },
    { email: "atc266@example.com", role: "atc266" },
    { email: "user4@example.com", role: "user" },
  ];

  return (
    <div className="min-h-screen m-16">
      <h1 className="text-3xl font-bold underline m-8">Developer Panel</h1>
      <p>Change user role</p>

      <div>
        {dummyUserRoles.map((user, index) => {
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
                <DummyPanelSwitchRole email={user.email} />
              )}

              <p
                className={
                  (index % 2 === 0 ? "bg-slate-500 bg-opacity-20" : " ") +
                  " p-4 my-1"
                }
              >
                {user.role}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
