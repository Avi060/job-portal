import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen w-full max-w-full sm:max-w-[1350px] mx-auto px-4">
        <Header />
        <Outlet />
      </main>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 text-sm text-center py-3 border-t border-gray-700 tracking-wide">
        &copy; 2025 S.M. Avinash | Created for Academic Purposes
      </div>
    </div>
  );
};

export default AppLayout;
