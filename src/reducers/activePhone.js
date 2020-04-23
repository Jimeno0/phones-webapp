import {
  SET_ACTIVE_PHONE
} from 'actions'

const initialState = {
  id: '',
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: 0,
  imageFileName: '',
  screen: '',
  processor: '',
  ram: 0
}

const activePhoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PHONE:
      return {
        ...action.payload
      }
    default:
      return state
  }
}

export { activePhoneReducer }
