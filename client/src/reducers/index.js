import { combineReducers } from 'redux';
import mailReducer from './mailReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    mail: mailReducer,
    errors: errorReducer,
});
