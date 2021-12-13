
import { combineReducers } from 'redux'
import citiesReducer from './citiesReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({
    citiesReducer,
    userReducer
})

export default mainReducer