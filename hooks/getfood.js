import { useState, useEffect } from "react";
import { headers, urls } from "../config/urlconfig";
import axios from "axios";

const useFoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get("http://localhost:4000/list");
        console.log("response--");
        console.log(response);
        if (response.status != 200)
          throw new Error("Failed to fetch food data");

        // const parseddata = await response.json();
        setFoods(response);
      } catch (e) {
        setError(e);
      } finally {
        setloading(false);
      }
    };
    fetchFood();
  }, []);
  return { foods, loading, error };
};

export default useFoodList;
