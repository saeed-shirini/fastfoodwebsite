import "./search.css";

function Search({ searchText, setSearchText }) {
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
