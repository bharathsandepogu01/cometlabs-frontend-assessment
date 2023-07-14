import React from "react";
import IHighlightProps from "./types";
import AppText from "@/components/AppText";
import Image from "next/image";

function Highlight(props: IHighlightProps): JSX.Element {
  const { header, description, imageURL, imageAlt } = props;
  return (
    <div className="flex gap-4 justify-start items-start max-w-[500px] w-full">
      <div className="relative h-10 w-10">
        <Image src={imageURL} alt={imageAlt} fill loading={"lazy"} />
      </div>
      <div className="flex-1">
        <AppText tag="h3" semiBold medium defaultColor>
          {header}
        </AppText>
        <AppText tag="p" default defaultColor customClass="mt-2">
          {description}
        </AppText>
      </div>
    </div>
  );
}

export default Highlight;
