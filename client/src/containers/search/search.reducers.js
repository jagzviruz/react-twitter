const searchReducer = (
  state = {
    isBusySearching: false,
  },
  action,
) => {
  switch (action.type) {
    case 'TRIGGER_SEARCH':
      return {
        ...state,
        payload: action.params,
      };
    case 'SEARCH_IN_PROGRESS':
      return {
        ...state,
        isBusySearching: true,
      };
    case 'SEARCH_RESULTS_RECEIVED':
      return {
        ...state,
        isBusySearching: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
