const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center max-w-2xl mx-auto px-4 space-y-4 md:space-y-6">
      <h3 className="font-bold text-3xl md:text-5xl text-gray-900">
        {heading}
      </h3>
      <p className="text-sm md:text-lg text-[#627382]">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
