import React from "react";
import Image from "next/image";
import IFeatureCardProps from "./types";
import AppText from "@/components/AppText";

function FeatureCard(props: IFeatureCardProps): JSX.Element {
  const { imageAlt, imageURL, header, description } = props;
  return (
    <div className="flex flex-col justify-start items-start cardWithBorder p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night">
      <div className="h-52 w-full relative rounded-md overflow-hidden">
        <Image src={imageURL} alt={imageAlt} fill loading={"lazy"} />
      </div>
      <AppText tag={"h3"} semiBold medium defaultColor customClass="mt-8">
        {header}
      </AppText>
      <AppText tag={"p"} default defaultColor customClass="mt-2">
        {description}
      </AppText>
    </div>
  );
}

export default FeatureCard;
