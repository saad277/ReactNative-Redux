
import { createStore, combineReducers } from 'redux';

import foodReducer from './foodReducer'


const rootReducer = combineReducers({

    foods: foodReducer

})


const store=createStore(rootReducer)


export default store;