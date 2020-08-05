import {combineReducers} from 'redux';
import postsReducers from'./postsReducers';
//import usersReducers from'./usersReducers';
import albumReducer from './albumReducer';

export default combineReducers({

posts:postsReducers,
albums:albumReducer
//users:usersReducers
});
