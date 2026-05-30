import React, { useState } from "react";

const AddIncome = () => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setIncome({
      ...income,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(income);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-lg w-[450px]"
      >
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
          Add New Income
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="source"
            placeholder="Income Source"
            value={income.source}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:border-purple-500"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={income.amount}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:border-purple-500"
          />

          <input
            type="date"
            name="date"
            value={income.date}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-xl font-semibold transition"
          >
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddIncome;