import {
    MAIL_LOADING,
    SEND_MAIL, GET_ERRORS
} from '../actions/types';

const initialState = {
    mail:null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case MAIL_LOADING:
            return {
                ...state,
                loading: true
            };
        case SEND_MAIL:
            return {
                ...state,
                mail: action.payload,
                loading: false
            };
        case GET_ERRORS:
            return {
                ...state,
                mail: null,
                loading: false
            };
        default:
            return state;
    }
}