import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { usersFetchList,  usersIncrementPoints} from './users';

//Main saga generator
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'USER_INCREMENT_POINTS', usersIncrementPoints),
  ];
}
