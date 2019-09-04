import {call, put} from 'redux-saga/effects';

import {toast} from 'react-toastify';

import api from '../../services/api';

import {Creators as CrudActions} from '../ducks/crud';
import {Creators as UsersActions} from '../ducks/user';

export function* getItems(action) {
    try {
        let config = {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`}
        };
        const {data} = yield call(api.get, `/${action.payload.request}${action.payload.query}`,
            config
            );

        if(action.payload.request === 'profile'){
            yield put(CrudActions.crudProfileSuccess(data));
        }else if(action.payload.request === 'cities'){
            yield put(CrudActions.crudSuccessCities(data));
        }else{
            yield put(CrudActions.crudSuccessUsers(data));
        }
        toast.success('Items obtained', {
            position: toast.POSITION.TOP_RIGHT,
        });
    } catch (err) {
        yield put(CrudActions.crudFailure('Something went wrong'));
        toast.error('Something went wrong', {
            position: toast.POSITION.TOP_RIGHT,
        });
        if(err.response.status == 401)
            UsersActions.logOutUserRequest()
    }
}

export function* saveProfile(action) {
    try {
        let config = {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`}
        };
        yield call(api.patch, `/profile`, action.payload.data,
            config
        );
        const {data} = yield call(api.get, `/users`,
            config
        );
        yield put(CrudActions.crudSuccessUsers(data));

        toast.success('Items obtained', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }catch (err) {
        yield put(CrudActions.crudFailure('Something went wrong'));
        toast.error('Something went wrong', {
            position: toast.POSITION.TOP_RIGHT,
        });
        if(err.response.status == 401)
            UsersActions.logOutUserRequest()
    }
}

export function* saveUser(action) {
    try {
        let config = {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`}
        };
        const {data} = yield call(api.patch, `/users/${action.payload.id}`, action.payload.data,
            config
        );

        yield put(CrudActions.crudProfileSuccess(data));
        toast.success('Items obtained', {
            position: toast.POSITION.TOP_RIGHT,
        });
    }catch (err) {
        yield put(CrudActions.crudFailure('Something went wrong'));
        toast.error('Something went wrong', {
            position: toast.POSITION.TOP_RIGHT,
        });
        if(err.response.status == 401)
            UsersActions.logOutUserRequest()
    }
}

