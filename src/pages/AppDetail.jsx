import React from "react";
import { useLoaderData, useParams } from "react-router";

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
  return <div></div>;
};

export default AppDetail;
