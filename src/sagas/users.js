import { call, put } from 'redux-saga/effects';
import ApiUsers from '../api/users';

export function* usersFetchList(action) {
    const users = yield call(ApiUsers.getUsers);

    yield put({
        type: 'USERS_LIST_SAVE',
        users: users
    });
}