
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center space-y-7">
      <h3 className="font-bold text-4xl">{heading}</h3>
      <p className="text-[#627382]">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
