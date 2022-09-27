import {
  ARTIST_DETAILS_SUCCESS,
  FOLLOWED_ARTISTS_SUCCESS,
  IS_LOGGED_IN_SUCCESS,
  SEARCH_RESULTS_SUCCESS,
  USER_PLAYLISTS_SUCCESS,
} from './actions';

const initialState = {
  artistDetails: [],
  followedArtists: [],
  isLoggedIn: false,
  searchResults: [],
  userPlaylists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_DETAILS_SUCCESS:
      return {
        ...state,
        artistDetails: action.payload,
      };
    case FOLLOWED_ARTISTS_SUCCESS:
      return {
        ...state,
        followedArtists: action.payload,
      };
    case IS_LOGGED_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case USER_PLAYLISTS_SUCCESS:
      return {
        ...state,
        userPlaylists: action.payload,
      };
    default:
      return state;
  }
};
