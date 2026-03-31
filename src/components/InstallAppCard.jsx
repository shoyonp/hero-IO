import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const InstallAppCard = ({ app }) => {
  const { title, downloads, image, ratingAvg, size } = app;
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  };
  return (
    <>
      <div className="w-11/12 mx-auto bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Left Section */}
        <div className="flex gap-3 items-center">
          <img
            src={image}
            alt={title}
            className="w-14 h-14 object-cover rounded-md"
          />
          <div className="space-y-1">
            <p className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-1">
              {title}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-[#00D390]">
                <CiSaveDown2 className="text-sm" />
                <span>{formatNumber(downloads)}</span>
              </div>
              <div className="flex items-center gap-1 text-[#FF8811]">
                <FaStar className="text-xs" />
                <span>{ratingAvg}</span>
              </div>
              <span className="text-[#627382]">{size} MB</span>
            </div>
          </div>
        </div>
        {/* btn */}
        <button className="btn btn-sm sm:btn-md bg-[#00D390] text-white border-none hover:bg-[#00b87c] w-full sm:w-auto">
          Uninstall
        </button>
      </div>
    </>
  );
};

export default InstallAppCard;
