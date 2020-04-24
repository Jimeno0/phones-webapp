import { combineReducers } from 'redux'
import { phonesReducer } from './phones'
import { activePhoneReducer } from './activePhone'

const rootReducer = combineReducers({
  phones: phonesReducer,
  activePhone: activePhoneReducer
})

export default rootReducer
