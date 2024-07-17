// import { fetchSessionDataCSR } from "@/utils/fetchSessionData";

// const [sessionEmail, setSessionEmail] = useState<any>(null);
//   const [sessionRole, setSessionRole] = useState<any>(null);

export const fetchSessionDataCSR = async (
  setSessionEmail: any,
  setSessionRole: any,
  setSessionId?: any
) => {
  try {
    const res = await fetch("/api/auth/session");
    if (!res.ok) {
      throw new Error("Session Network response was not ok");
    }
    const data = await res.json();
    // console.log("Session:", data);
    if (data && data.session && data.session.user) {
      setSessionEmail(data.session.user.email);
      setSessionRole(data.session.user.role);

      if (setSessionId) {
        setSessionId(data.session.user.id);
      }
    }

    if (!data) {
      return null;
    }
  } catch (error) {
    console.error("Error fetching session:", error);
  } finally {
  }
};

// export const fetchSessionDataSSR = async () => {
//   try {
//     const res = await fetch("/api/auth/session");
//     if (!res.ok) {
//       throw new Error("Session Network response was not ok");
//     }
//     const data = await res.json();
//     console.log("Session:", data);
//     if (data && data.session && data.session.user) {
//       const email = data.session.user.email;
//       const role = data.session.user.role;
//       return { email, role };
//     }

//     if (!data) {
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching session:", error);
//   } finally {
//   }
// };

// Example usage:
// fetchSessionDataSSR().then((session) => {
// Use the session data here, e.g., update UI elements
// });
