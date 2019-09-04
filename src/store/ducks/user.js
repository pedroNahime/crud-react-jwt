//TYPES
export const Types = {
    ADD_REQUEST: 'user/ADD_REQUEST',
    LOGIN_REQUEST: 'user/LOGIN_REQUEST',
    LOGOUT_REQUEST: 'user/LOGOUT_REQUEST',
    ADD_SUCCESS: 'user/ADD_SUCCESS',
    ADD_FAILURE: 'user/ADD_FAILURE',
    REMOVE: 'users/REMOVE',
};

//REDUCERS
const INITIAL_STATE = {
    loading: false,
    data: [],
    error: null
};
export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case  Types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case  Types.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Types.ADD_SUCCESS:
            return {
                data: action.payload.data,
                loading: false,
                error: null,
            };
        case Types.ADD_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
}
//ACTIONS

export const Creators = {
    addUserRequest: user => ({
        type: Types.ADD_REQUEST,
        payload: {user},
    }),

    loginUserRequest: user => ({
        type: Types.LOGIN_REQUEST,
        payload: {user},
    }),

    logOutUserRequest: () => ({
        type: Types.LOGOUT_REQUEST,
    }),

    addUserSuccess: data => ({
        type: Types.ADD_SUCCESS,
        payload: {data},
    }),

    addUserFailure: error => ({
        type: Types.ADD_FAILURE,
        payload: {error},
    }),
    removeUser: user => ({
        type: Types.REMOVE,
        payload: {user},
    }),
};
