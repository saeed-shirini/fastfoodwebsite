import "./fastfood.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FastFood from "./FastFood";
import Loading from "../loading/Loading";
import NotFound from "../notfound/NotFound";
import { useOutletContext } from "react-router-dom";

//const initial = { fastFoods: [], isLoading: false };
function FastFoodList() {
  const { fastFoodId } = useParams();
  // const [state, dispatch] = useReducer(fastFoodReducer, initial);
  const [searchText, setSearchText] = useOutletContext();
  const [fastFoods, setFastFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  async function getFastFoods(url) {
    setIsLoading(true);
    const response = await axios.get(url);
    const data = response.data;
    setFastFoods(data);
    setIsLoading(false);
    /*dispatch("GET_FAST_FODS", {
      fastFoods: data,
      isLoading: true,
    });*/
  }
  useEffect(() => {
    if (searchText || !fastFoodId) {
      getFastFoods(
        `https://react-mini-projects-api.classbon.com/FastFood/search?term=${searchText}`
      );
    }
    if (!searchText && fastFoodId) {
      getFastFoods(
        `https://react-mini-projects-api.classbon.com/FastFood/list?categoryId=${fastFoodId}`
      );
    }
  }, [searchText]);

  useEffect(() => {
    setSearchText("");
    if (fastFoodId) {
      getFastFoods(
        `https://react-mini-projects-api.classbon.com/FastFood/list?categoryId=${fastFoodId}`
      );
    } else {
      getFastFoods(
        "https://react-mini-projects-api.classbon.com/FastFood/list"
      );
    }
  }, [fastFoodId]);

  return (
    <div
      className={`fastfood-container ${
        fastFoods.length === 0 || isLoading ? "not-exist" : ""
      }`}
    >
      {isLoading && (
        <div className="loading-container" style={{ margin: "10px auto" }}>
          <Loading />
        </div>
      )}
      {fastFoods.length === 0 && !isLoading ? (
        <NotFound />
      ) : (
        fastFoods.map((fastFood) => {
          return <FastFood key={fastFood.id} {...fastFood} />;
        })
      )}
    </div>
  );
}
export default FastFoodList;
