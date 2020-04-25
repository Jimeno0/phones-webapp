import React from 'react'
import styled from 'styled-components'
import { Main, PhoneCard, Loader } from 'components'
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
      {
        isLoading
        ? <Loader/>
        : phones.map((phone) => (
          <PhoneCard
            {...phone}
            onClick={handlePhoneClick}
            key={phone.id}
          />
      ))
      }
    </Main>
  )
}

export { PhonesList }
