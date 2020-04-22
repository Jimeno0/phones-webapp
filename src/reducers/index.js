import { combineReducers } from 'redux'
import {
  ERROR_FETCHING,
  REQUEST_PHONES,
  RECEIVE_PHONES
} from 'actions'

const initialState = {
  isFetching: false,
  isError: false,
  phones: []
}

const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_FETCHING:
      return {
        ...state,
        isError: true
      }
    case REQUEST_PHONES:
      return {
        ...state,
        isFetching: true,
        isError: false
      }
    case RECEIVE_PHONES:
      return {
        ...state,
        isFetching: false,
        isError: false,
        phones: action.payload
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  phonesReducer
})

export default rootReducer
