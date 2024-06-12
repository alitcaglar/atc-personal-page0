import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadPhotoForm from "../Forms/UploadPhotoForm";
import { FaFileUpload } from "react-icons/fa";

import { auth } from "@/lib/auth";

export default async function EnterUpdateForm() {
  const session = await auth();

  return (
    <div className="text-3xl text-center text-slate-500">
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
              {session?.user?.name && <UploadPhotoForm />}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
