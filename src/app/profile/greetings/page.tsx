"use client";

import { useEffect, useState } from "react";

import { fetchSessionData } from "@/utils/fetchSessionData";

export default function Greetings() {
  const [sessionEmail, setSessionEmail] = useState<any>(null);
  const [sessionRole, setSessionRole] = useState<any>(null);

  useEffect(() => {
    fetchSessionData(setSessionEmail, setSessionRole);
  }, []);
  return (
    <div className="min-h-screen m-16">
      <h1 className="text-3xl font-bold m-8">Greetings!</h1>
      <p>Your Email, {sessionEmail}</p>
      <p>Your Role: {sessionRole}</p>
    </div>
  );
}
