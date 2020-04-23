import {
  ERROR_FETCHING,
  REQUEST_PHONES,
  RECEIVE_PHONES
} from 'actions'

const initialState = {
  isLoading: false,
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
        isLoading: true,
        isError: false
      }
    case RECEIVE_PHONES:
      return {
        ...state,
        isLoading: false,
        isError: false,
        phones: action.payload
      }
    default:
      return state
  }
}

export { phonesReducer }
