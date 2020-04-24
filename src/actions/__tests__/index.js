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

describe('actions', () => {
  test('should create a requestPhones action', () => {
    const expectedAction = { type: REQUEST_PHONES }
    expect(requestPhones()).toEqual(expectedAction)
  })

  test('should create a receivePhones action', () => {
    const expectedAction = {
      type: RECEIVE_PHONES,
      payload: [phone]
    }
    expect(receivePhones([phone])).toEqual(expectedAction)
  })

  test('should create a errorFetching action', () => {
    const expectedAction = { type: ERROR_FETCHING }
    expect(errorFetching()).toEqual(expectedAction)
  })

  test('should create a setActivePhone action', () => {
    const expectedAction = {
      type: SET_ACTIVE_PHONE,
      payload: phone
    }
    expect(setActivePhone(phone)).toEqual(expectedAction)
  })
})
