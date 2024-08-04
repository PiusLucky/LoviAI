import React from "react";
import BubbleText from "../common/BubbleText";

function InfoPersonalizedSuggestionCard() {
  return (
    <div className="bg-white rounded-[64px] shadow-md flex flex-col justify-center items-center py-[32px] px-8 md:px-[57px]">
      <div className="flex flex-col gap-[8px]">
        <div>
          <BubbleText
            content="Will it suit my skin type?"
            width="w-[280px]"
            bgCover
            ballClasses="-right-[10px] -bottom-[4px]"
          />
        </div>
        <div>
          <BubbleText
            content="Will it suit my current routine?"
            width="w-[350px]"
            bgCover
            ballClasses="-right-[10px] -bottom-[4px]"
          />
        </div>

        <div>
          <BubbleText
            content="What's TOP-3 SPFs for my skin?"
            width="w-[350px]"
            bgCover
            ballClasses="-right-[10px] -bottom-[4px]"
          />
        </div>
      </div>

      <div className="font-medium text-[20px] text-primary text-center mt-[76px]">
        <p>Suggestions</p>
        <p>personalized to you</p>
      </div>
    </div>
  );
}

export default InfoPersonalizedSuggestionCard;
