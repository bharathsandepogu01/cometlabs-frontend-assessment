import React from "react";
import HeaderSection from "@/components/HeaderSection";
import FormSection from "@/components/FormSection";
import VideoSection from "@/components/VideoSection";
import TestimonialSection from "@/components/TestimonialSection";

function Main(): JSX.Element {
  return (
    <main className="flex-1">
      <HeaderSection />
      <FormSection />
      <VideoSection />
      <TestimonialSection />
    </main>
  );
}

export default Main;
