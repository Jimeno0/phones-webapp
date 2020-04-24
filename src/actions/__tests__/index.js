import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import {
  requestPhones,
  receivePhones,
  errorFetching,
  setActivePhone,
  fetchPhones,
  REQUEST_PHONES,
  RECEIVE_PHONES,
  ERROR_FETCHING,
  SET_ACTIVE_PHONE
} from '../'

const phone = {
  id: '0',
  name: 'iPhone 7',
  manufacturer: 'Apple',
  description: 'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
  color: 'black',
  price: 769,
  imageFileName: 'http://localhost:8080/images/IPhone_7.png',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: 2
}

const uri = process.env.REACT_APP_API_URL
const url = `${uri}/phones`

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  test('create a requestPhones action', () => {
    const expectedAction = { type: REQUEST_PHONES }
    expect(requestPhones()).toEqual(expectedAction)
  })

  test('create a receivePhones action', () => {
    const expectedAction = {
      type: RECEIVE_PHONES,
      payload: [phone]
    }
    expect(receivePhones([phone])).toEqual(expectedAction)
  })

  test('create a errorFetching action', () => {
    const expectedAction = { type: ERROR_FETCHING }
    expect(errorFetching()).toEqual(expectedAction)
  })

  test('create a setActivePhone action', () => {
    const expectedAction = {
      type: SET_ACTIVE_PHONE,
      payload: phone
    }
    expect(setActivePhone(phone)).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates RECEIVE_PHONES when fetching phones has been done', () => {
    fetchMock.getOnce(url, {
      body: [phone],
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      { type: REQUEST_PHONES },
      { type: RECEIVE_PHONES, payload: [phone] }
    ]
    const store = mockStore({ phones: [] })

    return store.dispatch(fetchPhones()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
