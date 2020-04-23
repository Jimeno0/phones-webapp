import React from 'react'
import { Header, Title } from 'components'
import { PhoneDetail } from 'containers'
import { useHistory } from 'react-router-dom'

const Detail = (props) => {
  const history = useHistory()
  const handleLogoClick = () => {
    history.push('/')
  }
  return (
    <>
      <Header onLogoClick={handleLogoClick}>
        <Title>
          Phones store
        </Title>
      </Header>
      <PhoneDetail />
    </>
  )
}

export { Detail }
