export const SEARCH_RESULTS_SUCCESS = 'SEARCH_RESULTS_SUCCESS';
export const ARTIST_DETAILS_SUCCESS = 'ARTIST_DETAILS_SUCCESS';
export const USER_PLAYLISTS_SUCCESS = 'USER_PLAYLISTS_SUCCESS';
export const FOLLOWED_ARTISTS_SUCCESS = 'FOLLOWED_ARTISTS_SUCCESS';
export const IS_LOGGED_IN_SUCCESS = 'IS_LOGGED_IN_SUCCESS';

export const searchResultsSuccess = payload => ({
  type: SEARCH_RESULTS_SUCCESS,
  results: payload,
});

export const artistDetailsSuccess = payload => ({
  type: ARTIST_DETAILS_SUCCESS,
  results: payload,
});

export const followedArtistsSuccess = payload => ({
  type: FOLLOWED_ARTISTS_SUCCESS,
  results: payload,
});

export const userPlayistsSuccess = payload => ({
  type: USER_PLAYLISTS_SUCCESS,
  results: payload,
});

export const isLoggedInSuccess = payload => ({
  type: IS_LOGGED_IN_SUCCESS,
  results: payload,
});
