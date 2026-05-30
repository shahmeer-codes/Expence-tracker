import React, { useState } from "react";

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expense);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-lg w-[450px]"
      >
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
          Add New Expense
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Expense Title"
            value={expense.title}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:border-purple-500"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={expense.amount}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:border-purple-500"
          />

          <select
            name="category"
            value={expense.category}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:border-purple-500"
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            className="border p-3 rounded-xl outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-xl font-semibold transition"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;