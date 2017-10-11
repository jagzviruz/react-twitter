import { all } from 'redux-saga/effects';
import userIntendsToSearch from './containers/search/search.sagas';

export default function* rootSaga() {
  yield all([
    userIntendsToSearch(),
  ]);
}
