import { CiSaveDown2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, companyName, ratingAvg, downloads } = app;
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  };

  return (
    <>
      <Link to={`/appDetail/${id}`}>
        <div className="bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-3 flex flex-col h-full">
          {/* Image */}
          <figure className="overflow-hidden rounded-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </figure>
          {/* Content */}
          <div className="flex flex-col flex-1 mt-3">
            <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
              {title} -
               <span className="text-xs text-gray-500 mt-1"> {companyName}</span>
            </h2>
            <div className="flex items-center justify-between mt-auto pt-3">
              <div className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] px-2 py-1 rounded-md text-xs">
                <CiSaveDown2 className="text-sm" />
                <span>{formatNumber(downloads)}</span>
              </div>
              <div className="flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded-md text-xs">
                <FaStar className="text-xs" />
                <span>{ratingAvg}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AppCard;
