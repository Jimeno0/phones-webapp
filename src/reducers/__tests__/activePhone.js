import { activePhoneReducer } from '../activePhone'
import { SET_ACTIVE_PHONE } from 'actions'

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

describe('active phones reducer', () => {
  test('returns the initial state', () => {
    expect(activePhoneReducer(undefined, {})).toEqual(
      {
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
    )
  })

  test('handles SET_ACTIVE_PHONE action', () => {
    expect(
      activePhoneReducer(undefined, {
        type: SET_ACTIVE_PHONE,
        payload: phone
      })
    ).toEqual(phone)
  })
})
