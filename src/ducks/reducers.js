import {
  SEARCH_RESULTS_SUCCESS,
  ARTIST_DETAILS_SUCCESS,
} from './actions';

const initialState = {
  searchResults: [],
  artistDetails: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case ARTIST_DETAILS_SUCCESS:
      return {
        ...state,
        artistDetails: action.payload,
      };
    default:
      return state;
  }
};
