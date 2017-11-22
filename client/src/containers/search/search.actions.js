export const isDirty = dirty => ({
  type: 'SEARCH_INPUT_DIRTY',
  dirty,
});

export const triggerSearch = params => ({
  type: 'TRIGGER_SEARCH',
  params,
});

export const isSearching = () => ({
  type: 'SEARCH_IN_PROGRESS',
});

export const searchResultsReceived = results => ({
  type: 'SEARCH_RESULTS_RECEIVED',
  results,
});

export const searchFailed = err => ({
  type: 'SEARCH_ERROR',
  err,
});

export const noMatchesFound = () => ({
  type: 'SEARCH_NO_MATCH',
});
