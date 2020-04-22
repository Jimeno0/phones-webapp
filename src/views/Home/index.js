import React from 'react'
import { Header, Title, Main } from 'components'
import { PhonesList } from 'containers'

const Home = (props) => {
  return (
    <>
      <Header>
        <Title>
          Phones store
        </Title>
      </Header>
      <Main>
        <PhonesList />
      </Main>
    </>
  )
}

export { Home }
