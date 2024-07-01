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

export default function PhotoEditButton({ photoName }: { photoName: string }) {
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
                {
                  /*session?.user?.role !== "user" && session?.user && */ <EditPhotoNameForm
                    photoName={photoName}
                  />
                }
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
