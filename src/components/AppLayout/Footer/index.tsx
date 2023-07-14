import React from 'react'
import AppText from '@/components/AppText';
import Image from 'next/image';

const data = {
  logoURL: `/icons/multor-footer-logo.svg`,
  copyrightText: `© 2023 Insert Name Here. All rights reserved.`,
};

function Footer():JSX.Element {
  return (
    <footer className="section-content-padding flex sm:flex-row sm:justify-between flex-col justify-center items-center bg-backgroundColor-primary gap-4">
      <div className="h-[30px] w-[90px] relative">
        <Image src={data.logoURL} alt={"multor-footer-logo"} fill loading={"lazy"}/>
      </div>
      <AppText tag="p" default light customClass="text-textColor-primary-night">
        {data.copyrightText}
      </AppText>
    </footer>
  );
}

export default Footer;