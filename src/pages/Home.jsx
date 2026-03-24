import React from "react";
import Hero from "../components/Hero";
import useApps from "../hooks/useApps";
import AppCard from "../components/AppCard";
import { Link } from "react-router";
import SectionTitle from "../components/Shared/sectionTitle";

const Home = () => {
  const { data, loading } = useApps();
  return (
    <div className="space-y-10">
      <Hero />

      <SectionTitle
        heading={"Trending Apps"}
        subHeading={"Explore All Trending Apps on the Market developed by us"}
      />

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
