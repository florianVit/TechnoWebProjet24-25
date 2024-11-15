import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);
