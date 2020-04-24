import { PhoneDetail } from '../'
import React from 'react'
import { render } from '@testing-library/react'

const phoneData = {
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

describe('Phone detail', () => {
  test('it renders', () => {
    const { container } = render(<PhoneDetail />)
    expect(container).toBeTruthy()
  })

  test('Snapshot', () => {
    const { container } = render(<PhoneDetail />)
    expect(container).toMatchSnapshot()
  })

  test('renders details info elements', () => {
    const { getByText } = render(<PhoneDetail {...phoneData} />)
    const Title = getByText(phoneData.name)
    const Ram = getByText(`${phoneData.ram} Gb`)
    const Processor = getByText(phoneData.processor)
    const Screen = getByText(phoneData.screen)
    const Manufacturer = getByText(`By ${phoneData.manufacturer}`)
    const Price = getByText(`$${phoneData.price}`)
    const Description = getByText(phoneData.description)

    expect(Title).toBeTruthy()
    expect(Ram).toBeTruthy()
    expect(Processor).toBeTruthy()
    expect(Screen).toBeTruthy()
    expect(Manufacturer).toBeTruthy()
    expect(Price).toBeTruthy()
    expect(Description).toBeTruthy()
  })
})
