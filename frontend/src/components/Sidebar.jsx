import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-purple-500 h-screen w-64 flex flex-col p-5">
      <h1 className="text-2xl text-white font-bold text-center mb-8">
        Expense Tracker
      </h1>

      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="bg-purple-400 hover:bg-purple-300 transition rounded-3xl h-12 flex items-center justify-center text-white"
        >
          Dashboard
        </Link>

        <Link
          to="/add-expense"
          className="bg-purple-400 hover:bg-purple-300 transition rounded-3xl h-12 flex items-center justify-center text-white"
        >
          Add Expense
        </Link>

        <Link
          to="/add-income"
          className="bg-purple-400 hover:bg-purple-300 transition rounded-3xl h-12 flex items-center justify-center text-white"
        >
          Add Income
        </Link>
      </div>

      <div className="mt-auto flex justify-center">
        <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;