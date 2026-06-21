# 💳 Modern React Expense Tracker

A clean, responsive Expense Tracker built entirely with pure React and vanilla CSS. This project demonstrates state management using the Context API and hooks without relying on external state libraries like Redux.

## ✨ Features

* **Add Transactions**: Input income (positive numbers) and expenses (negative numbers).
* **Dynamic Balances**: Automatically calculates total balance, total income, and total expenses.
* **Transaction Filtering**: Easily filter views by All, Income, or Expense.
* **Persistent Storage**: Automatically saves all transactions to the browser's `localStorage` so data is not lost on reload.
* **Modern UI**: Clean, fintech-style interface built entirely from scratch with vanilla CSS (No Tailwind, Bootstrap, or component libraries).

## 🚀 How to Run

1.  **Clone the repository** (if hosted on GitHub) or create the project folder locally.
2.  **Initialize the React app** (if starting from scratch):
    ```bash
    npx create-react-app expense-tracker
    ```
3.  **Replace** the `src` folder with the files provided in this repository.
4.  **Install dependencies** (just standard React):
    ```bash
    npm install
    ```
5.  **Start the development server**:
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

## 📁 Folder Structure

```text
expense-tracker/
├── src/
│   ├── App.js                 # Main layout wrapper
│   ├── index.js               # React root renderer
│   ├── components/            # UI Components
│   │   ├── Header.js
│   │   ├── Balance.js
│   │   ├── IncomeExpense.js
│   │   ├── TransactionList.js
│   │   ├── TransactionItem.js
│   │   ├── AddTransaction.js
│   │   └── Filter.js
│   ├── context/               # Global State Management
│   │   ├── AppReducer.js      # Reducer function for state updates
│   │   └── GlobalState.js     # Context provider & actions
│   └── styles/
│       └── App.css            # Vanilla CSS styling
└── README.md
