"use client";

import React, { useState } from "react";
import Image from "next/image";
import AppText from "../AppText";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    location: "Location",
    profileImageURL: "/images/testimonial-section-image-1.jpg",
    profileImageURLAlt: "testimonial-section-image-1",
    starRatingImageURL: "/icons/star-rating-icon-1.svg",
    starRatingImageURLAlt: "star-rating-icon-1",
    description:
      "Share a real testimonial that hits some of your benefits (but isn't too sales-y).",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "Location",
    profileImageURL: "/images/testimonial-section-image-2.jpg",
    profileImageURLAlt: "testimonial-section-image-2",
    starRatingImageURL: "/icons/star-rating-icon-2.svg",
    starRatingImageURLAlt: "star-rating-icon-2",
    description:
      "Include someone talking about how easy it was to sign up and participate.",
  },
];

function TestimonialSection():JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const testimonial = testimonials[activeIndex];

  const leftArrow = (
    <div
      className="p-4 rounded-full bg-primaryColor-light cursor-pointer"
      onClick={handlePrev}
      aria-label={"click for previous testimonial"}
    >
      <div className="relative md:h-10 md:w-10 h-6 w-6 rotate-180">
        <Image src={"/images/arrow-image.png"} alt={"prev"} fill loading={"lazy"}/>
      </div>
    </div>
  );
  
  const rightArrow = (
    <div
      className="p-4 rounded-full bg-primaryColor-light cursor-pointer"
      onClick={handleNext}
      aria-label={"click for next testimonial"}
    >
      <div className="relative md:h-10 md:w-10 h-6 w-6">
        <Image src={"/images/arrow-image.png"} alt={"next"} fill loading={"lazy"}/>
      </div>
    </div>
  );

  return (
    <section className="section-content-padding text-center">
        <AppText tag={"h2"} bold default primary>
          {`DON'T JUST TAKE OUR WORD FOR IT`}
        </AppText>
        <div className="md:hidden flex justify-center items-center gap-8 mt-6">
          {leftArrow}
          {rightArrow}
        </div>
      <div className="flex gap-8 items-center justify-center md:mt-20 mt-10">
        <div className="md:block hidden">
        {leftArrow}
        </div>
        <div
          className={`flex flex-1 flex-col items-center justify-center text-center p-8}`}
        >
          <div className="relative h-20 w-20 rounded-full overflow-hidden">
            <Image
              src={testimonial.profileImageURL}
              alt={testimonial.profileImageURLAlt}
              fill
              loading={"lazy"}
            />
          </div>
          <AppText tag="h3" semiBold medium defaultColor customClass="mt-4">
            {testimonial.name}
          </AppText>
          <AppText tag="h3" default defaultColor customClass="mt-1">
            {testimonial.location}
          </AppText>
          <div className="relative h-8 w-40 rounded-full md:mt-10 md:mb-10 mt-6 mb-6">
            <Image
              src={testimonial.starRatingImageURL}
              alt={testimonial.starRatingImageURLAlt}
              fill
              loading={"lazy"}
            />
          </div>
          <AppText tag="h3" medium bold defaultColor>
            {testimonial.description}
          </AppText>
        </div>
        <div className="md:block hidden">
        {rightArrow}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
