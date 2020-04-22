import React from 'react'
import { Header, Title } from 'components'
import { PhonesList } from 'containers'

const Home = (props) => {
  return (
    <>
      <Header>
        <Title>
          Phones store
        </Title>
      </Header>
      <PhonesList />
    </>
  )
}

export { Home }
