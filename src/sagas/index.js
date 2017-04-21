import { takeLatest } from 'redux-saga';
import { usersFetchList } from './users';

export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList)
  ]
}
