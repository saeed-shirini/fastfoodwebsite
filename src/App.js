import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <div className="header">
        <Navbar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="main">
        <Outlet context={[searchText, setSearchText]} />
      </div>
    </div>
  );
}

export default App;
