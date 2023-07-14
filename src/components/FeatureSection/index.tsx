import React from "react";
import FeatureCard from "./FeatureCard";

const data = [
  {
    header: "FEATURE 1",
    description:
      "Talk about some of the details of your offer with a focus on the value people get back.",
    imageURL: "/images/feature-section-image-1.jpg",
    imageAlt: "feature-section-image-1",
  },
  {
    header: "FEATURE 2",
    description:
      "Is there a pain point that your service resolves? Tell visitors about it here.",
    imageURL: "/images/feature-section-image-2.jpg",
    imageAlt: "feature-section-image-2",
  },
  {
    header: "FEATURE 3",
    description:
      "Alternatively, you could use this section to address some frequently asked questions.",
    imageURL: "/images/feature-section-image-3.jpg",
    imageAlt: "feature-section-image-3",
  },
];

function FeatureSection(): JSX.Element {
  return (
    <section className="section-content-padding grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-stretch gap-8 ">
      {data.map((item) => {
        return <FeatureCard {...item} key={item.header} />;
      })}
    </section>
  );
}

export default FeatureSection;
