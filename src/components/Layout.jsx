import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen px-4 py-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
