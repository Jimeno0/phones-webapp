import React from 'react'
import { Main, PhoneCard } from 'components'
import { usePhones } from 'hooks'
import { useHistory } from 'react-router-dom'

const PhonesList = (props) => {
  const { isLoading, phones } = usePhones()
  const history = useHistory()

  const handlePhoneClick = (phone) => {
    history.push(`/detail/${phone.id}`)
  }

  return (
    <Main>
      {isLoading
        ? 'Loading...'
        : phones.map((phone) => (
          <PhoneCard
            {...phone}
            onClick={handlePhoneClick}
            key={phone.id}
          />
        ))}
    </Main>
  )
}

export { PhonesList }
