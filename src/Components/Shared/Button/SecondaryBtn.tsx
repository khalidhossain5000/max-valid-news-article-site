import React from "react";

import { twMerge } from "tailwind-merge";

type PrimaryBtnProps = {
  children: React.ReactNode;
  className?: string;
};
const SecondaryBtn = ({ children, className }: PrimaryBtnProps) => {
  return (
    <button
      className={twMerge("bg-transparent text-white px-4 py-1 border border-white inter", className)}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
