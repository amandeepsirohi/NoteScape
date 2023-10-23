"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ConfirmModal } from "@/components/modals/confirm-modal";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting Node Permanently...",
      success: "Deleted Successfully",
      error: "Failed to delete",
    });
    router.push("/documents")
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring Node ...",
      success: "Restored Successfully",
      error: "Failed to restore",
    });
  };

  return (
    <div className="w-full bg-[#de1738] text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center ">
      <p>
        This page is in trash
      </p>
      <Button
      size={"sm"}
      onClick={onRestore}
      variant={"outline"}
      className="border-white bg-transparent hover:bg-primary/5  text-white hover:text-white h-auto p-1 px-2 font-normal">
        Restore Note
      </Button>
      <ConfirmModal onConfirm={onRemove}>
      <Button
      size={"sm"}
      variant={"outline"}
      className="border-white bg-transparent hover:bg-primary/5  text-white hover:text-white h-auto p-1 px-2 font-normal">
        Delete Permanently
      </Button>
      </ConfirmModal>
    </div>
  );
};
