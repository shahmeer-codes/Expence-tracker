// This reducer handles all global state updates based on dispatched actions
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        // Filter out the transaction with the matching ID
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        // Add the new transaction to the beginning of the array
        transactions: [action.payload, ...state.transactions],
      };
    case 'SET_FILTER':
      return {
        ...state,
        // Update the current filter state (ALL, INCOME, EXPENSE)
        filter: action.payload,
      };
    default:
      return state;
  }
};
