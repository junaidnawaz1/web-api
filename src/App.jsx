import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-prod/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
