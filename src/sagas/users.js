import { call, put } from 'redux-saga/effects';
import ApiUsers from '../api/users';

export function* usersFetchList(action) {
  console.log('saga usersFetchList action ', action)
  const users = yield call(ApiUsers.getUsers);

  yield put({
    type: 'USERS_LIST_SAVE',
    users: users
  });
}

export function* usersIncrementPoints(action) {
  const user = yield call(ApiUsers.incrementPoints(action.userId));

  yield put({
    type: 'USERS_USER_SAVE',
    user
  });
}