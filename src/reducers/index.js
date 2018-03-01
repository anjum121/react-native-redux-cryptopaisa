import {combineReducers} from 'redux'
import CryptoReducer from './CryptoReducer'

const RootReducer =  combineReducers({
    crypto : CryptoReducer
})

export default RootReducer;