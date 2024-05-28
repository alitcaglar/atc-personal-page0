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
    <div className="m-4 text-3xl text-center text-slate-500">
      <Dialog>
        <DialogTrigger>
          <FaFileUpload />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Photo Here</DialogTitle>
            <DialogDescription>
              <UploadPhotoForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
