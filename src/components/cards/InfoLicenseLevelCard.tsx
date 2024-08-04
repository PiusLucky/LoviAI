import { cn } from "@/lib/utils";
import React from "react";

function Bar({ height, title }: { height: string; title: string }) {
  return (
    <div>
      <p className="text-[#292824]/40 text-[18px]">{title}</p>
      <div
        className={cn(
          "w-[111px] bg-[#D1D1D1] rounded-[16px]",
          height ? height : "h-[201px]"
        )}
      ></div>
    </div>
  );
}

function InfoLicenseLevelCard() {
  return (
    <div className="bg-white rounded-[64px] shadow-md flex flex-col justify-center items-center py-[32px] px-8 md:px-[57px]">
      <div className="w-full mb-8 md:-mb-10">
        <p className="text-[#57DE98] text-end pb-2 ">Medical License Level</p>
        <div className="border-t-[4px] border-t-[#292824]/30 border-dotted w-full h-[4px]"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[12px] justify-between md:items-end ">
        <div className="min-w-[111px] h-[201px] bg-[#57DE98] rounded-[16px]">
          <p className="text-white text-[18px] pl-8 pt-3">Lóvi</p>
        </div>
        <Bar title="BioLink BERT" height="h-[101px]" />
        <Bar title="Pubmed GPT" height="h-[119px]" />
        <Bar title="Pubmed BERT" height="h-[78px]" />
      </div>

      <div className="mt-[40px]">
        <p className="text-primary font-medium text-[20px] text-center">
          Best in class skincare assistant{" "}
        </p>
        <p className="text-[#292824]/60 text-center">
          Lóvi AI surpassed the pass mark on US Medical License Exam
        </p>
      </div>
    </div>
  );
}

export default InfoLicenseLevelCard;
