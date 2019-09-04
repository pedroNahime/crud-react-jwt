//TYPES
export const Types = {
    CRUD_GET_REQUEST: 'crud/GET_REQUEST',
    CRUD_SUCCESS_USERS: 'crud/CRUD_SUCCESS_USERS',
    CRUD_SUCCESS_CITIES: 'crud/CRUD_SUCCESS_CITIES',
    CRUD_PROFILE: 'crud/CRUD_PROFILE',
    CRUD_USER: 'crud/CRUD_USER',
    CRUD_PROFILE_SAVE: 'crud/CRUD_PROFILE_SAVE',
    CRUD_FAILURE: 'crud/ADD_FAILURE',
};

//REDUCERS
const INITIAL_STATE = {
    data: [],
    cities: [],
    users: [],
    error: null
};
export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.CRUD_GET_REQUEST:
            return {
                ...state,
            };
        case Types.CRUD_SUCCESS_CITIES:
            return {
                cities: [action.payload.data],
                loading: false,
                error: null,
            };
        case Types.CRUD_SUCCESS_USERS:
            return {
                users: [action.payload.data],
                loading: false,
                error: null,
            };
        case Types.CRUD_PROFILE:
            return {
                data: action.payload.data,
                loading: false,
                error: null,
            };
            case Types.CRUD_USER:
            return {
                data: action.payload.data,
                loading: false,
                error: null,
            };
        case Types.CRUD_PROFILE_SAVE:
            return {
                data: action.payload.data,
                loading: false,
                error: null,
            };
        case Types.CRUD_FAILURE:
            return {...state, loading: false, error: action.payload.error};
        default:
            return state;
    }
}
//ACTIONS

export const Creators = {
    crudGetRequest: (request, query = '') => ({
        type: Types.CRUD_GET_REQUEST,
        payload: {request, query},
    }),
    crudSuccessUsers: data => ({
        type: Types.CRUD_SUCCESS_USERS,
        payload: {data},
    }),

    crudSuccessCities: data => ({
        type: Types.CRUD_SUCCESS_CITIES,
        payload: {data},
    }),

    crudProfileSuccess: data => ({
        type: Types.CRUD_PROFILE,
        payload: {data},
    }),

    saveProfileRequest: data => ({
        type: Types.CRUD_PROFILE_SAVE,
        payload: {data},
    }),

    saveUserRequest: (data, id) => ({
        type: Types.CRUD_PROFILE_SAVE,
        payload: {data, id},
    }),

    crudFailure: error => ({
        type: Types.CRUD_FAILURE,
        payload: {error},
    }),
};
