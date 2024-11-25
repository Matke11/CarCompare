import React from "react";

interface SectionHeaderV1Props {
  title: string;
  description: string;
}

const SectionHeaderV1 = ({ title, description }: SectionHeaderV1Props) => {
  return (
    <header className="mb-6 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">{title && title}</h1>
      <p className="text-base sm:text-lg mb-6">{description && description}</p>
    </header>
  );
};

export default SectionHeaderV1;
