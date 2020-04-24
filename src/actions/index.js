export const ERROR_FETCHING = 'ERROR_FETCHING'
export const REQUEST_PHONES = 'REQUEST_PHONES'
export const RECEIVE_PHONES = 'RECEIVE_PHONES'
export const SET_ACTIVE_PHONE = 'SET_ACTIVE_PHONE'

const uri = process.env.REACT_APP_API_URL
const url = `${uri}/phones`

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

export const setActivePhone = phone => ({
  type: SET_ACTIVE_PHONE,
  payload: phone
})

export const fetchPhones = () => dispatch => {
  dispatch(requestPhones())
  return fetch(url)
    .then(res => res.json())
    .then((data) => {
      dispatch(receivePhones(data))
    })
    .catch(ex => dispatch(errorFetching(ex)))
}
