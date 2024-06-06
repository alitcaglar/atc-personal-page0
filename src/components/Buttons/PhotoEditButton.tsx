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
      <div className="text-3xl text-center text-slate-500">
        <Dialog>
          <DialogTrigger>
            <MdEditDocument />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Edit Photo Name{" "}
                <i className="text-slate-500 font-thin"> owner access only </i>
              </DialogTitle>
              <DialogDescription>
                <EditPhotoNameForm photoName={photoName} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
