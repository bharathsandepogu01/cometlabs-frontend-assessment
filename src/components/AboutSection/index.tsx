import React from "react";
import AboutCard from "./AboutCard";

const data = [
  {
    colorHeader: "1. About",
    header: "Some more information about your business",
    description: `Share a little about yourself as a business owner, or maybe describe what makes your service unique. 
                Give visitors one more reason to care about your offer and want to work with you.`,
    imageURL: "/images/about-section-image-1.jpg",
    imageAlt: "about-section-image-1",
  },
  {
    colorHeader: "2. About",
    header: "Some more information about your business",
    description: `Share a little about yourself as a business owner, or maybe describe what makes your service unique. 
                Give visitors one more reason to care about your offer and want to work with you.`,
    imageURL: "/images/about-section-image-1.jpg",
    imageAlt: "about-section-image-1",
  },
];

function AboutSection(): JSX.Element {
  return (
    <section className="section-content-padding flex flex-col md:gap-8 gap-4">
      {data.map((item, index) => {
        return (
          <AboutCard
            flipCard={index % 2 === 0}
            {...item}
            key={item.colorHeader}
          />
        );
      })}
    </section>
  );
}

export default AboutSection;
