import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-secondary-5 border-2 border-[#6C6C6C] rounded-2xl px-6 py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
