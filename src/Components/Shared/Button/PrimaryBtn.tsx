import React from "react";
import { twMerge } from "tailwind-merge";

type PrimaryBtnProps = {
  children: React.ReactNode;
  className?: string;
};

const PrimaryBtn = ({ children, className }: PrimaryBtnProps) => {
  return (
    <button className={twMerge("bg-primary px-4 py-1 inter", className)}>
      {children}
    </button>
  );
};

export default PrimaryBtn;