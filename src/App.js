import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./Components/Counters/Counters";
import Selecters from "./Components/Selecters/Selecters";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/selecters" element={<Selecters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
