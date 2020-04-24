import { phonesReducer } from '../phones'
import {
  REQUEST_PHONES,
  RECEIVE_PHONES,
  ERROR_FETCHING
} from 'actions'

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

describe('phones reducer', () => {
  test('returns the initial state', () => {
    expect(phonesReducer(undefined, {})).toEqual({
      isLoading: false,
      isError: false,
      phones: []
    })
  })

  test('handles REQUEST_PHONES action', () => {
    expect(
      phonesReducer(undefined, {
        type: REQUEST_PHONES
      })
    ).toEqual({
      phones: [],
      isLoading: true,
      isError: false
    })
  })

  test('handles ERROR_FETCHING action', () => {
    expect(
      phonesReducer(undefined, {
        type: ERROR_FETCHING
      })
    ).toEqual({
      phones: [],
      isLoading: false,
      isError: true
    })
  })

  test('handles RECEIVE_PHONES action', () => {
    expect(
      phonesReducer(undefined, {
        type: RECEIVE_PHONES,
        payload: [phone]
      })
    ).toEqual({
      phones: [phone],
      isLoading: false,
      isError: false
    })
  })
})
