import {combineReducers} from 'redux'
import authInfo from './auth'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    auth: authInfo,
    form: formReducer
})