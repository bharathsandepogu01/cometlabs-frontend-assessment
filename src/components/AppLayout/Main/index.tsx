import React from "react";
import HeaderSection from "@/components/HeaderSection";
import FormSection from "@/components/FormSection";

function Main(): JSX.Element {
  return (
    <main className="flex-1">
      <HeaderSection />
      <FormSection />
    </main>
  );
}

export default Main;