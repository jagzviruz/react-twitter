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
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
