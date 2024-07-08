import { Link } from "react-router-dom";
import axios from "axios";
import "./navbar.css";
import { useState, useEffect } from "react";
import Category from "./Category";
import Loading from "../loading/Loading";
import Search from "./Search";
const getParams = Number(window.location.pathname.split("/")[2]);

function Navbar({ searchText, setSearchText }) {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(getParams || 0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllCategories = async () => {
      setIsLoading(true);
      const response = await axios.get(
        "https://react-mini-projects-api.classbon.com/FoodCategory/categories"
      );
      const data = response.data;
      setCategories(data);
      setIsLoading(false);
    };
    getAllCategories();
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-items">
          {isLoading && <Loading />}
          <li className="navbar-item" onClick={() => setCategoryId(0)}>
            <Link
              to="/"
              className={`navbar-link ${categoryId < 1 ? "active" : ""}`}
            >
              همه فست فودها
            </Link>
          </li>
          {categories.map((category) => {
            return (
              <Category
                key={category.id}
                setCategoryId={setCategoryId}
                categoryId={categoryId}
                {...category}
              />
            );
          })}
        </ul>
        <Search searchText={searchText} setSearchText={setSearchText} />
      </nav>
    </div>
  );
}

export default Navbar;
