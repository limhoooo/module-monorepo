import React, { useState } from "react";
import styled from "styled-components";

type TypeLabelProps = {
  size: "l" | "m" | "s";
  check?: string;
  name?: string;
  label?: string;
  onChange?: (event: { name: string | undefined; checked: boolean }) => void;
};

const checkBoxSize = {
  l: "32px",
  m: "24px",
  s: "16px",
};

const LabelStyled = styled.label<TypeLabelProps>`
  width: ${({ size }) => checkBoxSize[size]};
  height: ${({ size }) => checkBoxSize[size]};
  ${({ check }) =>
    check === "true" &&
    `background-image: url('/images/icons/check.png');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center;
    `};
  display: inline-block;
  border: 2px solid;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: middle;
`;

const Checkbox = ({ size, name, label, onChange }: TypeLabelProps) => {
  const [check, setCheck] = useState<boolean>(false);
  const handleLabel = () => {
    setCheck(!check);
    onChange?.({ name, checked: !check });
  };
  return (
    <span>
      <input
        type="checkbox"
        value={String(check)}
        name={name}
        style={{ display: "none" }}
      />
      <LabelStyled
        size={size}
        check={String(check)}
        onClick={handleLabel}
      ></LabelStyled>
      <span
        onClick={handleLabel}
        style={{ verticalAlign: "sub", cursor: "pointer" }}
      >
        {label}
      </span>
    </span>
  );
};

export default Checkbox;
