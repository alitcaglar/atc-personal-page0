"use client";
import { useSession } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadPhotoForm from "./UploadPhotoForm";
import { FaFileUpload } from "react-icons/fa";
import { auth } from "@/lib/auth";

export default function EnterUpdateForm() {
  const { data: session, status, update } = useSession();

  return (
    <div className="text-3xl text-center mt-[1px] text-slate-500">
      <Dialog>
        <DialogTrigger>
          <FaFileUpload />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Upload Photo Here{" "}
              <i className="text-slate-500 font-thin">
                {" "}
                authorized access only{" "}
              </i>
            </DialogTitle>
            <DialogDescription>
              {session?.user?.role !== "user" && session?.user && (
                <UploadPhotoForm />
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
