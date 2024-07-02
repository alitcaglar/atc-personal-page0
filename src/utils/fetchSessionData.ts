// import { fetchSessionData } from "@/utils/fetchSessionData";

// const [sessionEmail, setSessionEmail] = useState<any>(null);
//   const [sessionRole, setSessionRole] = useState<any>(null);

export const fetchSessionData = async (
  setSessionEmail: any,
  setSessionRole: any
) => {
  try {
    const res = await fetch("/api/auth/session");
    if (!res.ok) {
      throw new Error("Session Network response was not ok");
    }
    const data = await res.json();
    console.log("Session:", data);
    if (data && data.session && data.session.user) {
      setSessionEmail(data.session.user.email);
      setSessionRole(data.session.user.role);
    }
  } catch (error) {
    console.error("Error fetching session:", error);
  } finally {
  }
};
