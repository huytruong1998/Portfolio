import axios from 'axios';
import { SEND_MAIL, GET_ERRORS, MAIL_LOADING, CLEAR_ERRORS} from './types';

export const sendmail =(mailData) =>(dispatch)=>{
    dispatch(clearErrors());
    dispatch(setMailLoading());
    axios
        .post('api/send',mailData)
        .then(res => dispatch({
            type: SEND_MAIL,
            payload:res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload:err.response.data
        }))
}

// Set loading state
export const setMailLoading = () => {
    return {
        type: MAIL_LOADING
    };
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};