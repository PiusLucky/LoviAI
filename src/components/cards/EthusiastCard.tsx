import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  name: string;
  avatarUrl: string;
  imageUrl?: string;
  description: string;
  content: string;
}
function EthusiastCard({
  name,
  avatarUrl,
  imageUrl,
  description,
  content,
}: IProps) {
  return (
    <div className="flex flex-col gap-4 shadow-md bg-white p-[24px] min-w-[353px]">
      <div className="flex flex-row gap-3">
        <Avatar>
          <AvatarImage src={avatarUrl} alt="profile image" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-primary">{name}</p>
          <p className="text-[#292824]/50">{description}</p>
        </div>
      </div>
      {imageUrl && (
        <div className="my-4 w-full">
          <img
            src={imageUrl}
            alt="tweet image"
            className=" w-full h-[276px] object-cover rounded-[16px]"
          />
        </div>
      )}

      <p className="text-[18px]">{content}</p>
    </div>
  );
}

export default EthusiastCard;
