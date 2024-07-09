import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SearchTextContext from "./context/searchprovider";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <div className="header">
        <SearchTextContext.Provider
          value={{ searchText: searchText, setSearchText: setSearchText }}
        >
          <Navbar searchText={searchText} setSearchText={setSearchText} />
        </SearchTextContext.Provider>
      </div>
      <div className="main">
        <Outlet context={[searchText, setSearchText]} />
      </div>
    </div>
  );
}

export default App;
