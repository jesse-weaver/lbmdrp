export const SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';
export const ARTIST_DETAILS_SUCCESS = 'ARTIST_DETAILS_SUCCESS';

export const searchResultsSuccess = payload => ({
  type: SEARCH_RESULTS_SUCCESS,
  results: payload,
});

export const artistDetailsSuccess = payload => ({
  type: ARTIST_DETAILS_SUCCESS,
  results: payload,
});
