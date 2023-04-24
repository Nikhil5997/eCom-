import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/catelog", name: "Catelog", icon: <FaThList /> },
    { path: "/offer", name: "Offer", icon: <FaCommentAlt /> },
    { path: "/order", name: "Order", icon: <FaShoppingBag /> },
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/catelog", name: "Catelog", icon: <FaThList /> },
    { path: "/offer", name: "Offer", icon: <FaCommentAlt /> },
    { path: "/order", name: "Order", icon: <FaShoppingBag /> },
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/catelog", name: "Catelog", icon: <FaThList /> },
    { path: "/offer", name: "Offer", icon: <FaCommentAlt /> },
    { path: "/order", name: "Order", icon: <FaShoppingBag /> },
  ];
  return (
    <div className="flex">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="fixed top-0 left-0 h-full bg-black text-white transition-all duration-500"
      >
        <div className="flex items-center px-4 py-5">
          <h1 className={`text-2xl ${isOpen ? "block" : "hidden"}`}>.</h1>
          <div className="ml-auto">
            <button className="text-white text-2xl" onClick={toggle}>
              <FaBars />
            </button>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="flex items-center py-3 px-4 transition-all duration-500 hover:bg-blue-300 hover:text-black"
            activeClassName="bg-blue-300 text-black"
          >
            <div className="text-2xl">{item.icon}</div>
            <div className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main
        className={`ml-${isOpen ? "200" : "50"} p-5 w-full transition-all duration-500`}
        style={{ marginLeft: isOpen ? "200px" : "50px" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
