import { PhoneCard } from '../'
import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const clickMock = jest.fn()
const phoneData = {
  id: '0',
  name: 'iPhone 7',
  price: 769,
  imageFileName: 'http://localhost:8080/images/IPhone_7.png',
  screen: '4,7 inch IPS',
  processor: 'A10 Fusion',
  ram: 2,
  onClick: clickMock

}

describe('Phone card', () => {
  test('it renders', () => {
    const { container } = render(<PhoneCard />)
    expect(container).toBeTruthy()
  })

  test('Snapshot', () => {
    const { container } = render(<PhoneCard />)
    expect(container).toMatchSnapshot()
  })

  test('renders details info elements', () => {
    const { getByText } = render(<PhoneCard {...phoneData} />)
    const Title = getByText(phoneData.name)
    const Ram = getByText(`${phoneData.ram} Gb`)
    const Processor = getByText(phoneData.processor)
    const Screen = getByText(phoneData.screen)
    const Price = getByText(`$${phoneData.price}`)

    expect(Title).toBeTruthy()
    expect(Ram).toBeTruthy()
    expect(Processor).toBeTruthy()
    expect(Screen).toBeTruthy()
    expect(Price).toBeTruthy()
  })

  test('on card click triggers action', () => {
    const { getByTestId } = render(<PhoneCard {...phoneData} />)
    const Card = getByTestId('phone-card')
    userEvent.click(Card)
    expect(clickMock).toHaveBeenCalled()
  })
})
