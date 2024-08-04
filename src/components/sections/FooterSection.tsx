import React from "react";

function AppStoreButton() {
  return (
    <div className="inline-flex gap-2 bg-black p-[11px] rounded-[12px]">
      <div>
        <img src="/images/apple_icon.png" alt="apple icon" />
      </div>
      <div>
        <p className="text-white text-[12px]">Download on the</p>
        <p className="text-white font-bold">App store</p>
      </div>
    </div>
  );
}

function FooterSection() {
  const data = [
    "2024@ Digital Skincare",
    "Careers",
    "Privacy Policy",
    "Money-back policy",
    "Terms of use",
  ];
  return (
    <section className="">
      <div className="flex justify-between items-center">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>

        <div>
          <AppStoreButton />
        </div>
      </div>
      <div className="p-8 md:p-[100px]">
        <div className="text-headerMobile font-bold md:font-normal md:text-header text-primary mb-[36px]">
          Read our articles on Medium{" "}
          <img
            src="/images/medium_icon.png"
            alt="medium logo"
            className="inline w-[30px] md:w-[50px]"
          />
          , and follow us on Instagram{" "}
          <img
            src="/images/instagram_icon.png"
            alt="instagram logo"
            className="inline w-[30px] md:w-[50px]"
          />
          , TikTok{" "}
          <img
            src="/images/tiktok_icon.png"
            alt="tiktok logo"
            className="inline w-[30px] md:w-[50px]"
          />{" "}
          and LinkedIn{" "}
          <img
            src="/images/linkedin_icon.png"
            alt="linkedin logo"
            className="inline w-[30px] md:w-[50px]"
          />
        </div>
        <AppStoreButton />

        <div className="flex gap-[20px] mt-[128px]">
          {data.map((item, index) => (
            <p key={index} className="text-[#292824]/40">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
