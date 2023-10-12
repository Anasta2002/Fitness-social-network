import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import contentPageReducer from './contentPage_reducer';
import dialogsPageReducer from './dialogsPage_reducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    contentPage: contentPageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;