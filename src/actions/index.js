export const ERROR_FETCHING = 'ERROR_FETCHING'
export const REQUEST_PHONES = 'REQUEST_PHONES'
export const RECEIVE_PHONES = 'RECEIVE_PHONES'
export const SET_ACTIVE_PHONE = 'SET_ACTIVE_PHONE'

export const requestPhones = () => ({
  type: REQUEST_PHONES
})

export const receivePhones = data => ({
  type: RECEIVE_PHONES,
  payload: data
})

export const errorFetching = () => ({
  type: ERROR_FETCHING
})

export const setActivePhone = () => ({
  type: setActivePhone
})
