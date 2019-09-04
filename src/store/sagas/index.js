import { all, takeLatest } from 'redux-saga/effects';

import { Types as UsersTypes } from '../ducks/user';
import { Types as CrudTypes } from '../ducks/crud';
import { addUser, LoginUser, LogOutUser } from './users';
import { getItems, saveProfile, saveUser } from './crud';

export default function* rootSaga() {
    yield all([takeLatest(UsersTypes.ADD_REQUEST, addUser)]);
    yield all([takeLatest(UsersTypes.LOGIN_REQUEST, LoginUser)]);
    yield all([takeLatest(UsersTypes.LOGOUT_REQUEST, LogOutUser)]);
    yield all([takeLatest(CrudTypes.CRUD_GET_REQUEST, getItems)]);
    yield all([takeLatest(CrudTypes.CRUD_PROFILE_SAVE, saveProfile)]);
    yield all([takeLatest(CrudTypes.CRUD_USER, saveUser)]);
}