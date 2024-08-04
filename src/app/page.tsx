import ChatSection from "@/components/sections/ChatSection";
import DescriptionSection from "@/components/sections/DescriptionSection";
import EthusiastSection from "@/components/sections/EthusiastSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import InfoSection from "@/components/sections/InfoSection";
import LargeBannerSection from "@/components/sections/LargeBannerSection";
import QuestionSection from "@/components/sections/QuestionSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="mt-8 md:mt-[50px] flex flex-col gap-[50px] md:gap-[100px] px-8 md:px-[100px]">
        <HeroSection />
        <DescriptionSection />
        <ChatSection />
        <InfoSection />
        <EthusiastSection />
        <FaqSection />
        <QuestionSection />
        <LargeBannerSection />

        <FooterSection />
      </div>
    </main>
  );
}
