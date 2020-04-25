import React from 'react'
import { Main, PhoneDetail as PhoneDetailComponent, Loader } from 'components'
import { useParams } from 'react-router-dom'
import { useActivePhone } from 'hooks'

const PhoneDetail = (props) => {
  const { id } = useParams()
  const { isLoading, phone } = useActivePhone(id)

  return (
    <Main>
      {isLoading
        ? <Loader />
        : <PhoneDetailComponent {...phone} />}
    </Main>
  )
}

export { PhoneDetail }
