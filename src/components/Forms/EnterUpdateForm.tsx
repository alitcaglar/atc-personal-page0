"use client";

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
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchSessionDataCSR } from "@/utils/fetchSessionData";
import { useRouter } from "next/navigation";

export default function EnterUpdateForm() {
  const [sessionEmail, setSessionEmail] = useState<any>(null);
  const [sessionRole, setSessionRole] = useState<any>(null);

  useEffect(() => {
    fetchSessionDataCSR(setSessionEmail, setSessionRole);
  }, []);

  const router = useRouter();

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
              {!sessionEmail ? (
                <Button
                  type="button"
                  className="bg-gradient-to-r from-lime-600 to-teal-600 hover:from-lime-700 hover:to-teal-700 m-4"
                >
                  <Link href="/profile">Please log in to update</Link>
                </Button>
              ) : (
                <UploadPhotoForm />
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
