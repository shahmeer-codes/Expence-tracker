import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  
  const amounts = transactions.map((transaction) => transaction.amount);

  
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  
  const isNegative = total < 0;

  return (
    <div className="balance-container">
      <h4>Total Balance</h4>
      <h1 className={isNegative ? 'money minus' : 'money plus'}>
        ${total}
      </h1>
    </div>
  );
};
