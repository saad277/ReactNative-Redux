
import { createStore, combineReducers,applyMiddleware } from 'redux';

import thunk from 'redux-thunk'

import foodReducer from './foodReducer'


const rootReducer = combineReducers({

    foods: foodReducer

})


const store=createStore(rootReducer,applyMiddleware(thunk))


export default store;