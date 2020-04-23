import React from 'react'
import { Header, Title } from 'components'
import { PhoneDetail } from 'containers'

const Detail = (props) => {
  return (
    <>
      <Header>
        <Title>
          Phones store
        </Title>
      </Header>
      <PhoneDetail />
    </>
  )
}

export { Detail }
