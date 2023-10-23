"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { ImageIcon, X } from "lucide-react";
import { useCoverImage } from "@/hooks/use-cover-image";
import { removeCoverImage } from '../convex/documents';
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
    const params = useParams();
    const coverImage = useCoverImage();
    const removeCoverImage = useMutation(api.documents.removeCoverImage);

    const onRemove = () => {
        removeCoverImage({
            id:params.documentId as Id<"documents">
        });

    };
  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}>
      {!!url && (
        <Image src={url}
        fill 
        alt="cover"
        className="object-cover" />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5
        right-5 flex items-center gap-x-2">
            <Button
            onClick={coverImage.onOpen}
            className="text-xs text-muted-foreground "
            variant={"outline"}
            size={"sm"}>
                <ImageIcon className="h-4 w-4 mr-2"/>
                Change Cover
            </Button>
            <Button
            onClick={onRemove}
            className="text-xs text-muted-foreground "
            variant={"outline"}
            size={"sm"}>
                <X className="h-4 w-4 mr-2"/>
                Remove Cover
            </Button>
        </div>
      )}
    </div>
  );
};
