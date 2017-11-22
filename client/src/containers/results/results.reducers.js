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
        results: action.results,
        isDirty: true,
      };
    case 'SEARCH_INPUT_DIRTY':

      return {
        ...state,
        isDirty: action.dirty && (action.dirty.length > 0),
      };
    default:
      return {
        ...state,
      };
  }
};

export default resultReducer;
