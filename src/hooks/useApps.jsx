import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fechData = async () => {
      const res = await axios.get("apps.json");
      setData(res.data);
    };
    fechData();
    setLoading(false)
  }, []);

  return { data ,loading};
};

export default useApps;
