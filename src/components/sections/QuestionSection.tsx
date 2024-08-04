import React from "react";
import MainButton from "../common/MainButton";

function QuestionSection() {
  return (
    <section>
      <div className="text-headerMobile font-bold md:font-normal md:text-header text-primary text-center">
        So, do you love the current state of your skin?
      </div>
      <div className="flex justify-center mt-[40px] gap-[10px]">
        <MainButton
          text="Yes"
          classes="bg-white rounded-full text-primary hover:text-white"
        />
        <MainButton
          text="No"
          classes="bg-white rounded-full text-primary hover:text-white"
        />
      </div>
    </section>
  );
}

export default QuestionSection;
