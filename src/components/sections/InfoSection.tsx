import React from "react";
import InfoLicenseLevelCard from "../cards/InfoLicenseLevelCard";
import InfoPersonalizedSuggestionCard from "../cards/InfoPersonalizedSuggestionCard";

function InfoSection() {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-8 md:gap-3">
      <InfoLicenseLevelCard />
      <InfoPersonalizedSuggestionCard />
    </section>
  );
}

export default InfoSection;
