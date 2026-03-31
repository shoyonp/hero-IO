import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import SectionTitle from "../components/Shared/sectionTitle";

const Apps = () => {
  const { data, loading } = useApps();

  return (
    <>
      <SectionTitle
        heading={"Our All Applications"}
        subHeading={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />

      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-10 mb-6">
        
        <p className="font-semibold text-gray-800 text-sm sm:text-base">
          ({data.length}) Apps Found
        </p>

        <label className="flex items-center gap-2 w-full md:w-72 px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus-within:ring-2 focus-within:ring-primary transition">
          {/* Icon */}
          <svg
            className="h-4 w-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>

          {/* Input */}
          <input
            type="search"
            placeholder="Search apps..."
            className="w-full outline-none text-sm bg-transparent placeholder:text-gray-400"
          />
        </label>
      </div>
      {/* apps section */}
      <div className="flex justify-center items-center min-h-screen">
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-11/12 mx-auto">
            {data.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Apps;
