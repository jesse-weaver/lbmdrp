import {
  SEARCH_RESULTS_SUCCESS
} from '../actions';

const initialState = {
  searchResults: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
