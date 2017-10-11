import { call, put, takeLatest } from 'redux-saga/effects';
import API from '../../api';

function* fireSearchRequest({ params }) {
  if (params.q) {
    const response = yield call(API.Search, params.q);

    yield put({
      type: 'SEARCH_RESULTS_RECEIVED',
      results: response.data,
    });
  }
}

export default function* userIntendsToSearch() {
  yield takeLatest('TRIGGER_SEARCH', fireSearchRequest);
}
