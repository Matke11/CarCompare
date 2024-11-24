interface SectionHeaderV1Props {
  title: string;
  description: string;
}

const SectionHeaderV1 = ({ title, description }: SectionHeaderV1Props) => {
  return (
    <header className="mb-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
        {title && title}
      </h2>
      <p className="mt-2 text-lg text-gray-600">{description && description}</p>
    </header>
  );
};

export default SectionHeaderV1;
