"use client";

import { MdDeleteForever } from "react-icons/md";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { fetchSessionDataCSR } from "@/utils/fetchSessionData";

export default function PhotoDeleteButton({
  alertDialog,
  photoName,
}: {
  alertDialog: string;
  photoName: string;
}) {
  const [sessionEmail, setSessionEmail] = useState<any>(null);
  const [sessionRole, setSessionRole] = useState<any>(null);

  useEffect(() => {
    fetchSessionDataCSR(setSessionEmail, setSessionRole);
  }, []);

  const router = useRouter();

  const handleDelete = async () => {
    console.log("deleting photo: ", photoName);
    toast({
      title: "DELETING...",
      description: " ",
    });
    try {
      const response = await fetch("/api/photo-album-delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photoName }),
      });

      const responseBody = await response.json();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (response.ok) {
        toast({
          title: "SUCCESS!",
          description: "Deleted photo successfully! Please refresh the page",
        });
        console.log("Photo deleted successfully,please refresh the page");

        router.refresh(); // Refresh the page to reflect the deletion
      } else {
        console.error("Failed to delete photo");
        toast({
          title: "ERROR!",
          description: `Failed to delete photo: ${responseBody.error}`,
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast({
        title: "ERROR!",
        description: "An error occurred while deleting the photo.",
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <MdDeleteForever className="text-4xl text-slate-500 text-center mb-[1px]" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to delete?{" "}
            <i className="text-slate-500 font-thin"> authorized access only </i>
          </AlertDialogTitle>
          <AlertDialogDescription>{alertDialog}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel.</AlertDialogCancel>
          <AlertDialogAction
            className="bg-gradient-to-l from-lime-500 to-teal-500 hover:ring-2 transition"
            onClick={
              !sessionEmail ? () => router.push("/profile") : handleDelete
            }
          >
            {!sessionEmail ? "Login to delete" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
