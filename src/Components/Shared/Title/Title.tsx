import React from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={twMerge(
        "text-2xl md:text-3xl lg:text-4xl font-bold text-text-secondary inter",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;