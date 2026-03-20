import React from "react";
import Hero from "../components/Hero";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import { Link } from "react-router";

const Home = () => {
  const { data, loading } = useApps();
  return (
    <div className="space-y-10">
      <Hero />

      <div className="text-center space-y-7">
        <h3 className="font-bold text-4xl">Trending Apps</h3>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10">
            {data.slice(0, 8).map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
      <div className="w-11/12 mx-auto flex justify-center">
        <Link
        to="/apps"
        className="btn text-white font-medium bg-linear-to-bl from-[#632EE3] to-[#9F62F2]"
      >
         Show All
      </Link>
      </div>
    </div>
  );
};

export default Home;
