import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counters from "./Components/Counters/Counters";
import Selecters from "./Components/Selecters/Selecters";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Converters from "./Components/Converters/Converters";
import Modale from "./Components/Modale/Modale";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counters" element={<Counters />} />
        <Route path="/selecters" element={<Selecters />} />
        <Route path="/converters" element={<Converters />} />
        <Route path="/popup" element={<Modale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
