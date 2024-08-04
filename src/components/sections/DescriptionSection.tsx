import React from "react";

function DescriptionSection() {
  return (
    <section className="flex justify-center">
      <div className="text-headerMobile max-w-[650px] rounded-sm md:text-header text-primary flex flex-col gap-4 md:leading-[3.5rem] px-5 py-8 shadow-md">
        <p>Lóvi is a comprehensive approach to your skin health. </p>
        <div>
          Set your goals and build a best-fit skincare routine, track changes
          with face scanner, check cosmetics{" "}
          <img src="/images/three_shape.png" className="inline-block" /> safety.
        </div>
        <p>Get all your questions answered with science- backed AI.</p>
      </div>
    </section>
  );
}

export default DescriptionSection;
