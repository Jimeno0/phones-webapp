import { combineReducers } from 'redux'
import { phonesReducer } from './phones'
import { activePhoneReducer } from './activePhone'

const rootReducer = combineReducers({
  phonesReducer,
  activePhoneReducer
})

export default rootReducer
