import "./search.css";
import { useContext } from "react";
import SearchTextContext from "../../context/searchprovider";

function Search() {
  const { searchText, setSearchText } = useContext(SearchTextContext);
  return (
    <div className="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="جستجوی فست فود"
          alt=""
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
