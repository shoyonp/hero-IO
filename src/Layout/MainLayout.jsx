import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-50">
      <header>
        <Navbar />
      </header>
      <div className="min-h-[calc(100vh-190px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
