import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

 
const getInitialTransactions = () => {
  const localData = localStorage.getItem('transactions');
  return localData ? JSON.parse(localData) : [];
};

const initialState = {
  transactions: getInitialTransactions(),
  filter: 'ALL', // Possible values: 'ALL', 'INCOME', 'EXPENSE'
};


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function setFilter(filterType) {
    dispatch({
      type: 'SET_FILTER',
      payload: filterType,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        filter: state.filter,
        deleteTransaction,
        addTransaction,
        setFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
