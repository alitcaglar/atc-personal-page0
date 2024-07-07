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

export default function EnterUpdateForm() {
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
            <DialogDescription>{<UploadPhotoForm />}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
