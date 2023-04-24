import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catelog from "../src/Pages/Catelog.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Offer from "../src/Pages/Offer";
import Order from "../src/Pages/Order.jsx";
import SlideBar from "./component/SlideBar";

const App=() =>{
  return (
    <BrowserRouter>
    <SlideBar>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="catelog" element={<Catelog />} />
        <Route path="offer" element={<Offer />} />
        <Route path="order" element={<Order />} />
      </Routes>
      </SlideBar>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
