"use client";

import { useEffect, useState } from "react";

import { fetchSessionDataCSR } from "@/utils/fetchSessionData";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Greetings(sessionEmail: any, sessionRole: any) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  !sessionEmail && router.push("/");

  console.log(
    "Session email and role:greetings****",
    sessionEmail,
    sessionRole
  );

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("Logout error:", errorData.error);
        alert("Failed to sign out");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-row justify-center items-center">
      <div className="flex flex-row justify-center items-center w-screen">
        <Button
          onClick={handleLogout}
          className=" flex items-center justify-center w-96 bg-gradient-to-b from-lime-600 to-teal-500 mb-8 text-3xl hover:ring-4 rounded-xl text-slate-200 dark:text-slate-800 sticky mt-12"
        >
          Sign Out
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-screen text-3xl m-8  bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent w-5/6">
        <Typewriter
          words={[
            `Greetings! You are logged in.`,
            ` Your email is ${sessionEmail.sessionEmail}`,
          ]}
          loop={999}
          cursor
          cursorStyle="|"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </main>
  );
}
