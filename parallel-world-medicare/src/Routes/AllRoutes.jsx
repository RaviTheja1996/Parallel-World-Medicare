import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Checkout from "../pages/Checkout";
import Diagnostics from "../pages/Diagnostics";
import Doctors from "../pages/Doctors";
import Hospitals from "../pages/Hospitals";
import Plans from "../pages/Plans";
import { Login } from "../pages/Login";
// import Login from "../pages/Login";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/diagnostics" element={<Diagnostics />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/hospitals" element={<Hospitals />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
