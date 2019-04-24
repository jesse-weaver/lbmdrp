export const SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';

export const searchResultsSuccess = payload => ({
  type: SEARCH_RESULTS_SUCCESS,
  results: payload,
});
