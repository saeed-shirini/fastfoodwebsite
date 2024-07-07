import "./fastfood.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FastFood from "./FastFood";

function FastFoodList() {
  const [fastFoods, sertFastFoods] = useState([]);
  const { fastFoodId } = useParams();

  /* const getAllFastFoods = async () => {
    const response = await axios.get(
      "https://react-mini-projects-api.classbon.com/FastFood/list"
    );
    const data = response.data;
    sertFastFoods(data);
  };

  const getFastFoodByCategory = async () => {
    const response = await axios.get(
      `https://react-mini-projects-api.classbon.com/FastFood/list?categoryId=${fastFoodId}`
    );
    const fastFoodCategory = response.data;
    sertFastFoods(fastFoodCategory);
  };*/

  const getFastFoods = async (url) => {
    const response = await axios.get(url);
    const data = response.data;
    sertFastFoods(data);
  };

  useEffect(() => {
    if (!fastFoodId) {
      getFastFoods(
        "https://react-mini-projects-api.classbon.com/FastFood/list"
      );
    } else {
      getFastFoods(
        `https://react-mini-projects-api.classbon.com/FastFood/list?categoryId=${fastFoodId}`
      );
    }
  }, [fastFoodId]);

  return (
    <div className="fastfood-container">
      {fastFoods.map((fastFood) => {
        return <FastFood key={fastFood.id} {...fastFood} />;
      })}
    </div>
  );
}
export default FastFoodList;
