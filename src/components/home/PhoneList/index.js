import React from 'react'
import { PhoneCard } from 'components/home/PhoneCard'

const PhoneList = ({ phones }) => {
  return phones.map((phone) => {
    const { id } = phone
    return (
      <PhoneCard {...phone} key={id} />
    )
  })
}

export { PhoneList }
