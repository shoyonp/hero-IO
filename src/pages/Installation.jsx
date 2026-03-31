import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../utility/addToLs";
import SectionTitle from "../components/Shared/sectionTitle";
import InstallAppCard from "../components/InstallAppCard";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedId = storedAppData.map((id) => parseInt(id));
    const installedApp = data?.filter((app) => convertedId.includes(app.id));
    setApps(installedApp);
  }, [data]);

  return (
    <div>
      <SectionTitle
        heading={"Your Installed Apps"}
        subHeading={"Explore All Trending Apps on the Market developed by us"}
      />
      <section className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-10 mb-6">
        {/* app length */}
        <p className="font-semibold text-gray-800 text-sm sm:text-base">
          ({apps.length}) Apps Found
        </p>
        {/* sorting button */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="space-y-5">
        {apps.map((app) => (
          <InstallAppCard key={app.id} app={app} />
        ))}
      </section>
    </div>
  );
};

export default Installation;
