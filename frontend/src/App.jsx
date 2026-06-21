import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { Filter } from './components/Filter';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <div className="app-wrapper">
        <Header />
        <div className="main-content">
          <div className="top-section">
            <Balance />
            <IncomeExpense />
          </div>
          <div className="bottom-section">
            <AddTransaction />
            <div className="transactions-section">
              <Filter />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
