import React from "react";
import styled from "styled-components";

const iconSize = {
  xl: "32px",
  l: "28px",
  m: "24px",
  s: "20px",
  xs: "18px",
};
type TypeIcons =
  | "plus"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up"
  | "cart"
  | "check"
  | "user";
type TypeIconsSize = "xl" | "l" | "m" | "s" | "xs";
type TypeIconProps = {
  icon: TypeIcons;
  size: TypeIconsSize;
  color?: "white" | "black";
};
const StyledIcon = styled.img.attrs<TypeIconProps>(({ icon }) => ({
  src: `/images/icons/${icon}.png`,
}))`
  width: ${({ size }) => iconSize[size]};
  height: ${({ size }) => iconSize[size]};
  display: inline-block;
  filter: ${({ color }) => color === "white" && `invert(1)`};
`;
const Icon = ({ icon, size = "m", color }: TypeIconProps) => {
  return <StyledIcon icon={icon} color={color} size={size}></StyledIcon>;
};

export default Icon;
