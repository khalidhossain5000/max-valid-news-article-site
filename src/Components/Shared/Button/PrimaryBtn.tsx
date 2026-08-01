import React from 'react';
type PrimaryBtnProps = {
  children: React.ReactNode;
  className?: string;
};
const PrimaryBtn = ({children,className}:PrimaryBtnProps) => {
    return (
        <button className={`bg-primary text-muted px-4 py-1  ${className}`}>
{children}
        </button>
    );
};

export default PrimaryBtn;