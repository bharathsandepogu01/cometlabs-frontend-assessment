import React from "react";
import AppText from "../AppText";

const data = {
  header: `Show visitors what they're signing up for`,
  description: `Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).`,
  videoURL: `https://www.youtube.com/embed/saXOqhGfFQA`,
  videoTitle: `COMETLABS | YouTube Launch`,
};

function VideoSection(): JSX.Element {
  return (
    <section className="section-content-padding flex flex-col sm:gap-10 gap-8 items-center text-center half-background">
      <AppText
        tag="h2"
        semiBold
        large
        customClass="text-textColor-primary-day max-w-[500px] w-full"
      >
        {data.header}
      </AppText>
      <AppText
        tag="p"
        medium
        customClass="text-textColor-primary-day max-w-[700px] w-full"
      >
        {data.description}
      </AppText>
      <iframe
        className="lg:w-[80%] md:w-[90%] w-[100%] lg:h-[560px] md:h-[400px] h-[250px]"
        src={data.videoURL}
        title={data.videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </section>
  );
}

export default VideoSection;
