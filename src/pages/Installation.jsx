import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../utility/addToLs";
import SectionTitle from "../components/Shared/sectionTitle";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedAppData = getStoredApp();
    console.log(storedAppData);
    const convertedId = storedAppData.map((id) => parseInt(id));
    const installedApp = data?.filter((app) => convertedId.includes(app.id));
    setApps(installedApp);
  }, []);

  return (
    <div>
      <SectionTitle
        heading={"Your Installed Apps"}
        subHeading={"Explore All Trending Apps on the Market developed by us"}
      />
      <div className="flex justify-between items-center">
        {/* app length */}
        <span>{apps.length} Apps Found</span>
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
      </div>
    </div>
  );
};

export default Installation;
