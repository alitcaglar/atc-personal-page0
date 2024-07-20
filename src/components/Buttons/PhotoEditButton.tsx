"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdEditDocument } from "react-icons/md";
import EditPhotoNameForm from "../Forms/EditPhotoNameForm";
import { useEffect, useState } from "react";
import { fetchSessionDataCSR } from "@/utils/fetchSessionData";

export default function PhotoEditButton({ photoName }: { photoName: string }) {
  const [sessionEmail, setSessionEmail] = useState<any>(null);
  const [sessionRole, setSessionRole] = useState<any>(null);

  useEffect(() => {
    fetchSessionDataCSR(setSessionEmail, setSessionRole);
  }, []);

  return (
    <>
      {" "}
      <div className="text-3xl text-center mt-[7px] text-slate-500">
        <Dialog>
          <DialogTrigger>
            <MdEditDocument />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Edit Photo Name{" "}
                <i className="text-slate-500 font-thin">
                  {" "}
                  authorized access only{" "}
                </i>
              </DialogTitle>
              <DialogDescription>
                {sessionEmail && <EditPhotoNameForm photoName={photoName} />}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
