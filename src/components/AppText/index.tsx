import React from "react";
import classNames from "classnames";
import IAppTextProps from "./types";

function AppText(props: IAppTextProps): JSX.Element {
  const TextTag = props.tag;
  return (
    <TextTag
      className={classNames(
        "break-words",
        props.defaultColor &&
          `text-textColor-primary-day dark:text-textColor-primary-night`,
        props.primary && "text-primaryColor dark:text-primaryColor",
        props.isErrorText && "text-error dark:text-error",
        props.secondary &&
          "text-textColor-secondary-day dark:text-textColor-secondary-night",
        props.small && "md:text-xs text-[8px]",
        props.default && `md:text-base text-xs`,
        props.medium && "md:text-xl text-lg",
        props.extraMedium && "lg:text-3xl md:text-2xl text-xl",
        props.large && "lg:text-5xl md:text-4xl text-3xl",
        props.extraLarge && "lg:text-7xl md:text-6xl text-5xl",
        props.bold && "font-bold",
        props.semiBold && "font-[600]",
        props.light && "font-light",
        props.hoverEffect &&
          props.defaultColor &&
          "hover:text-textColor-secondary-day dark:hover:text-textColor-secondary-night",
        props.hoverEffect &&
          props.primary &&
          "hover:text-textColor-appPrimaryColor-light",
        props.hoverEffect &&
          props.secondary &&
          "hover:text-textColor-primary-day dark:hover:text-textColor-primary-night",
        props.customClass && props.customClass
      )}
    >
      {props.children}
    </TextTag>
  );
}

export default AppText;
