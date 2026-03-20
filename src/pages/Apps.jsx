import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";

const Apps = () => {
  const { data, loading } = useApps();

  return (
    <>
      <div className="text-center space-y-7">
        <h3 className="font-bold text-4xl">Our All Applications</h3>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex px-10 mt-10 mb-4 mx-auto justify-between items-center">
        <p className="font-bold ">({data.length}) Apps Found</p>
        {/* search field */}
        <label className="input ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
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
