import React from "react";

function LargeBannerSection() {
  return (
    <section className="flex justify-center  w-full bg-red-500 rounded-[64px]">
      <div className="bg-banner bg-no-repeat w-full bg-cover h-[400px] md:h-[760px] md:bg-center flex items-end rounded-[64px] ">
        <div className="pl-8 pb-[64px]">
          <p className="text-white font-medium text-[33.81px]">
            Lóvi is a skin care that feels like self care
          </p>
        </div>
      </div>
    </section>
  );
}

export default LargeBannerSection;
