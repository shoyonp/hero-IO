import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../utility/addToLs";
import { CiSaveDown2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AppDetail = () => {
  const { id } = useParams();
  const numId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((d) => d.id === (numId));
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    downloads,
    ratingAvg,
    ratings,
  } = singleData;

  const handleInstall = (id) => {
    addToLocalStorage(id);
  };

  const chartData = ratings.map((r) => ({
    name: r.name,
    value: r.count,
  }));

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
    }).format(num);
  };

  return (
    <div className="w-11/12 mx-auto space-y-10">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-32 h-32 rounded-2xl object-cover"
        />

        {/* info */}
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h1>

          <p className="text-sm text-gray-500">
            Developed by
            <span className="text-primary font-medium"> {companyName}</span>
          </p>

          {/* stats */}
          <div className="flex gap-8 mt-4 text-sm">
            <div>
              <div className="flex items-center gap-1 text-green-500">
                <CiSaveDown2 />
                <span>Downloads</span>
              </div>
              <p className="font-bold text-lg">{formatNumber(downloads)}</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-orange-400">
                <FaStar />
                <span>Rating</span>
              </div>
              <p className="font-bold text-lg">{ratingAvg}</p>
            </div>
            <div>
              <div className="flex items-center gap-1 text-purple-500">
                <MdReviews />
                <span>Reviews</span>
              </div>
              <p className="font-bold text-lg">{formatNumber(reviews)}</p>
            </div>
          </div>

          {/* btn */}
          <button
            onClick={() => handleInstall(id)}
            className="mt-4 btn bg-[#00D390] text-white text-sm"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      {/* ratings */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg text-gray-800">Ratings</h2>

        <div className="w-full h-[250px] bg-white rounded-xl p-4 shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#f97316" // orange
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* description */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg text-gray-800">Description</h2>

        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetail;
