import { PropsWithChildren } from "react";

type TTag = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export default interface IAppTextProps extends PropsWithChildren {
  tag: TTag;
  small?: boolean;
  medium?: boolean;
  extraMedium?: boolean;
  large?: boolean;
  extraLarge?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  light?: boolean;
  primary?: boolean;
  secondary?: boolean;
  customClass?: string;
  default?: boolean;
  defaultColor?: boolean;
  hoverEffect?: boolean;
  isErrorText?:boolean;
}
