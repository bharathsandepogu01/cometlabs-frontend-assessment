import React from "react";
import IAppButtonProps from "./types";
import classNames from "classnames";
import AppText from "../AppText";

function AppButton(props: IAppButtonProps): JSX.Element {
  const { ariaLabel, onClick, buttonType, buttonText, children, ...restProps } =
    props;
  return (
    <button
      className={classNames(
        "sm:px-8 sm:py-3 px-6 py-2 rounded-md border-2",
        {
          "bg-primaryColor border-primaryColor": buttonType === "primary",
        },
        {
          "bg-transparent border-primaryColor": buttonType === "secondary",
        },
        {
          "bg-transparent border-transparent": buttonType === "tertiary",
        }
      )}
      aria-label={ariaLabel}
      onClick={(e) => onClick && onClick()}
      {...restProps}
    >
      <AppText
        tag="span"
        default
        semiBold
        customClass={classNames(
          {
            "text-textColor-primary-night hover:text-textColor-primary-night":
              buttonType === "primary",
          },
          {
            "text-primaryColor hover:text-primaryColor":
              buttonType === "secondary" || buttonType === "tertiary",
          }
        )}
      >
        {buttonText ? buttonText : children}
      </AppText>
    </button>
  );
}

export default AppButton;
