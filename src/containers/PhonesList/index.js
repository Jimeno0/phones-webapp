import React from 'react'
import { Main, PhoneList as PhonesListComponent } from 'components'
import { usePhones } from 'hooks'

const PhonesList = (props) => {
  const { isLoading, phones } = usePhones()
  return (
    <Main>
      {isLoading
        ? 'Loading...'
        : <PhonesListComponent phones={phones} />}
    </Main>
  )
}

export { PhonesList }
