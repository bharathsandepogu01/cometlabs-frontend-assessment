import React from "react";
import IAboutCardProps from "./types";
import AppText from "@/components/AppText";
import Image from "next/image";

function AboutCard(props: IAboutCardProps): JSX.Element {
  const { colorHeader, header, description, imageAlt, imageURL, flipCard } =
    props;
  const style = `md:p-8 p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night rounded-md flex gap-8 justify-around flex-col items-center ${
    flipCard ? "lg:flex-row-reverse" : "lg:flex-row"
  }`;
  return (
    <div className={style}>
      <div className="relative h-[250px] max-w-[400px] w-full lg:h-[400px] lg:min-w-[450px] rounded-md overflow-hidden m-auto">
        <Image src={imageURL} alt={imageAlt} fill loading={"lazy"} />
      </div>
      <div className="flex flex-col items-start justify-center max-w-[500px]">
        <AppText tag="span" primary default semiBold>
          {colorHeader}
        </AppText>
        <AppText tag="h3" defaultColor extraMedium customClass="sm:mt-6 mt-4">
          {header}
        </AppText>
        <AppText tag="h3" default defaultColor customClass="sm:mt-6 mt-4">
          {description}
        </AppText>
      </div>
    </div>
  );
}

export default AboutCard;
