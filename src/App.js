import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
