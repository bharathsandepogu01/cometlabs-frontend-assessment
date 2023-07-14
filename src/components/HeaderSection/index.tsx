import React from 'react'
import AppText from '../AppText';
import Image from 'next/image';

const data = {
    headerText: `Describe the value of booking an appointment`,
    headerSubText: `No need to get clever. Tell people exactly what you're offering, then
        use this space to communicate your key value proposition.`,
}

function HeaderSection():JSX.Element {
  return (
    <section className="section-content-padding bg-header-section bg-no-repeat bg-cover">
      <div className="relative h-[35px] sm:w-[150px] w-[120px]">
        <Image src={"/icons/multor-logo.svg"} alt="logo" fill loading={"lazy"}/>
      </div>
      <AppText
        tag="h1"
        bold
        extraLarge
        customClass="text-textColor-primary-day max-w-[600px] w-full lg:mt-16 sm:mt-12 mt-8"
      >
        {data.headerText}
      </AppText>
      <AppText
        tag="p"
        extraMedium
        customClass="text-textColor-primary-day max-w-[550px] w-full lg:mt-16 sm:mt-12 mt-8 lg:mb-16 sm:mb-12 mb-8"
      >
        {data.headerSubText}
      </AppText>
    </section>
  );
}

export default HeaderSection;