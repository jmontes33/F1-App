import { DriverProvider } from "./components/DriverContext";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Ranking from "./components/Ranking";

function App() {
  return (
    <div className="bg-gray-800">
      <BrowserRouter>
        <NavBar />
        <DriverProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </DriverProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
