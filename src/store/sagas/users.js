import {call, put} from 'redux-saga/effects';

import {toast} from 'react-toastify';

import api from '../../services/api';
import {history} from "../../helpers/history";

import {Creators as UsersActions} from '../ducks/user';

export function* addUser(action) {
    try {
        const {data} = yield call(api.post, `/register`, action.payload.user);

        const userData = {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
        };
        localStorage.setItem('user', JSON.stringify(data));
        yield put(UsersActions.addUserSuccess(userData));
        toast.success('User logged in', {
            position: toast.POSITION.TOP_RIGHT,
        });
        history.push('/');

    } catch (err) {
        yield put(UsersActions.addUserFailure('Something went wrong'));
        toast.error('Erro ao Registrar!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
}

export function* LoginUser(action) {
    try {
        const {data} = yield call(api.post, `/login`, action.payload.user);

        const userData = {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
        };
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.token));
        yield put(UsersActions.addUserSuccess(userData));
        toast.success('User logged in', {
            position: toast.POSITION.TOP_RIGHT,
        });
        history.push('/');

    } catch (err) {
        yield put(UsersActions.addUserFailure('Something went wrong'));
        toast.error('Erro ao Logar!', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
}

export function* LogOutUser(action) {
    yield localStorage.removeItem('user');
    history.push('/login');
}
