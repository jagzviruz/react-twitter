const resultReducer = (
  state = {
    isBusySearching: false,
  },
  action,
) => {
  switch (action.type) {
    case 'SEARCH_IN_PROGRESS':
      return {
        ...state,
        isBusySearching: true,
      };
    case 'SEARCH_RESULTS_RECEIVED':
      return {
        ...state,
        isBusySearching: false,
        ...action.results,
      };
    default:
      return {
        ...state,
      };
  }
};

export default resultReducer;
