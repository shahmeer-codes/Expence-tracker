import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  
  const sign = transaction.amount < 0 ? '-' : '+';
  
  const transactionClass = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={`transaction-item ${transactionClass}`}>
      <span className="transaction-text">{transaction.text}</span>
      <span className="transaction-amount">
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
        title="Delete Transaction"
      >
        x
      </button>
    </li>
  );
};
