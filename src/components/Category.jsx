import { Link } from "react-router-dom";

function Category({ id, name, categoryId, setCategoryId }) {
  return (
    <li className="navbar-item" onClick={() => setCategoryId(id)}>
      <Link
        className={`navbar-link ${categoryId === id ? "active" : ""}`}
        to={`/fastfood/${id}`}
      >
        {name}
      </Link>
    </li>
  );
}
export default Category;
