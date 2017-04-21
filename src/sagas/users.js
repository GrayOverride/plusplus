import { call, put } from 'redux-saga/effects';
import ApiUsers from '../api/users';

export function* usersFetchList(action) {
  // call the api to get the users
  const users = yield call(ApiUsers.getUsers);
  console.log('SAGA USERS ', users)

  // dispatch the success action with the users
  yield put({
    type: 'users.fetchListSuccess',
    users
  });
}