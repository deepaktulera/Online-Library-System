import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

// Layout component for all pages
const Layout = () => {
  return (
    <div className="w-screen h-screen px-4 py-2">
      {/* Navbar component */}
      <Navbar />

      {/* Here all nested routes are render */}
      <Outlet />
    </div>
  );
};

export default Layout;
