import { Link } from "react-router";

const AppCard = ({ app }) => {
  const {id, image, title, companyName, ratingAvg, downloads } = app;

  return (
    <>
      <Link to={`/appDetail/${id}`} className="">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={image} alt={image} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="flex items-center justify-between">
            <span>{ratingAvg}</span>

            <span>{downloads}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AppCard;
