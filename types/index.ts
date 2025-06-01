import { MouseEventHandler } from "react";

export interface ButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface BookCardProps {
  title: string;
  rating: number;
  author: string;
  status: string;
  image: string;
  coverColor: string;
  description: string;
}
