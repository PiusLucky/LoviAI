import { cn } from "@/lib/utils";
import React from "react";

function BubbleText({
  content = "✦ Lóvi AI is here!",
  width = "w-[220px]",
  bgCover = false,
  ballClasses,
}: {
  content?: string;
  width?: string;
  bgCover?: boolean;
  ballClasses?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex md:justify-center text-secondary font-medium text-[14px] md:text-[20px] bg-transparent md:bg-bubble bg-no-repeat mt-6   md:py-[9px] pl-8 md:px-[14px] pr-[20px] rounded-full",
        width,
        bgCover ? "bg-cover" : "bg-contain"
      )}
    >
      <p>{content}</p>
      <div
        className={`hidden md:block absolute w-[12px] h-[12px] rounded-full bg-[#5263ff1a] -right-[0.46px] -bottom-[4px] ${ballClasses}`}
      ></div>
    </div>
  );
}

export default BubbleText;
