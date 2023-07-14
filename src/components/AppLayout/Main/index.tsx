import React from "react";
import HeaderSection from "@/components/HeaderSection";
import FormSection from "@/components/FormSection";
import VideoSection from "@/components/VideoSection";

function Main(): JSX.Element {
  return (
    <main className="flex-1">
      <HeaderSection />
      <FormSection />
      <VideoSection />
    </main>
  );
}

export default Main;