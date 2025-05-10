import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-accent text-center mb-16 w-full">
      {children}
    </h2>
  );
};

export default SectionTitle;