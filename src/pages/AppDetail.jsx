import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../utility/addToLs";

const AppDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleData = data?.find((d) => d.id === parseInt(id));
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    downloads,
    ratingAvg,
  } = singleData;

  const handleInstall = (id) => {
    addToLocalStorage(id);
  };

  return (
    <div>
      <section className="flex">
        <img src={image} alt="" />
        <div>
          <h2>{title}</h2>
          <p>Developed by {companyName}</p>
          <div className="border"></div>
          {/* after border */}
          <div>
            <p></p>
            <p>Downloads</p>
            <p>{downloads}</p>
          </div>
          <div>
            {" "}
            <p></p>
            <p>Average Ratings</p>
            <p>{ratingAvg}</p>
          </div>
          <div>
            {" "}
            <p></p>
            <p>Total Reviews</p>
            <p>{reviews}</p>
          </div>
          <button onClick={() => handleInstall(id)} className="btn btn-primary">
            Install Now ({size}MB)
          </button>
        </div>
      </section>
      <div className="border"></div>
      <section>Rating section</section>
      <div className="border"></div>
      <section>
        <span>Description</span>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default AppDetail;
