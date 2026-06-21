import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TransactionItem } from './TransactionItem';

export const TransactionList = () => {
  const { transactions, filter } = useContext(GlobalContext);

  
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'INCOME') return transaction.amount > 0;
    if (filter === 'EXPENSE') return transaction.amount < 0;
    return true; 
  });

  return (
    <div className="list-container">
      <h3>Recent Transactions</h3>
      {filteredTransactions.length === 0 ? (
        <p className="empty-state">No transactions found.</p>
      ) : (
        <ul className="list">
          {filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </div>
  );
};
