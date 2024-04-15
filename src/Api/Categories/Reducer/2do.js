import loaderState from './index';
import { cartState } from "./index";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    loaderState,
    cartState,
})
export default rootReducer;
