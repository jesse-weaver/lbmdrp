import {
  all,
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  SEARCH_RESULTS_SUCCESS,
  ARTIST_DETAILS_SUCCESS,
} from './actions';

export function* fetchArtist() {
  const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({
    type: ARTIST_DETAILS_SUCCESS,
    payload: data,
  });
}

export function* fetchSearchResults() {
  const endpoint = 'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({
    type: ARTIST_DETAILS_SUCCESS,
    payload: data,
  });
}

export function* loadSearchResults() {
  yield takeEvery(SEARCH_RESULTS_SUCCESS, fetchArtist);
}

export default function* rootSaga() {
  yield all([loadSearchResults()]);
}
