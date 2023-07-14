import React from "react";
import Highlight from "./Highlight";
import FormCard from "./FormCard";

const data = [
  {
    header: `Benefit 1`,
    description: `Highlight the benefits of signing up for an appointment, online class, or video consultation.`,
    imageURL: `/icons/form-section-image-1.svg`,
    imageAlt: `image 1`,
  },
  {
    header: `Benefit 2`,
    description: `For example, fitness instructors might describe how their routines make people healthier *and* happier.`,
    imageURL: `/icons/form-section-image-2.svg`,
    imageAlt: `image 1`,
  },
  {
    header: `Benefit 3`,
    description: `Remind visitors how easy it is to claim your offer and start enjoying the benefits.`,
    imageURL: `/icons/form-section-image-3.svg`,
    imageAlt: `image 1`,
  },
];

function FormSection(): JSX.Element {
  return (
    <section className="section-content-padding">
      <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
        <div className="flex sm:gap-10 gap-8 flex-col">
          {data.map((item) => {
            return <Highlight {...item} key={item.header} />;
          })}
        </div>
        <FormCard />
      </div>
    </section>
  );
}

export default FormSection;
