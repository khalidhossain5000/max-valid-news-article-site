import React from "react";
type PrimaryBtnProps = {
  children: React.ReactNode;
  className?: string;
};
const SecondaryBtn = ({ children, className }: PrimaryBtnProps) => {
  return (
    <button
      className={`bg-transparent text-white px-4 py-1 border border-white ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
