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
      <Button
        onClick={handleLogout}
        className="max-w-96 w-full opacity-80 mt-12 rounded-l-none rounded-r-xl"
      >
        Logout
        {isLoading && (
          <div className="animate-spin px-3">
            <AiOutlineLoading3Quarters />
          </div>
        )}
      </Button>
      <div className="flex justify-center w-72 items-center min-h-screen text-6xl m-8  bg-gradient-to-r from-teal-600 to-lime-600 bg-clip-text text-transparent">
        <Typewriter
          words={[`Greetings!`, `Your email is  ${sessionEmail.sessionEmail}`]}
          loop={999}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </main>
  );
}
