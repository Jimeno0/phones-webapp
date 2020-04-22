import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  requestPhones,
  receivePhones,
  errorFetching
} from 'actions'

const uri = process.env.REACT_APP_API_URL
const url = `${uri}/phones`

const PhonesList = (props) => {
  const phones = useSelector(state => state.phonesReducer.phones)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestPhones())
    axios.get(url)
      .then((response) => {
        const { data } = response
        dispatch(receivePhones(data))
      })
      .catch(() => dispatch(errorFetching))
  }, [])

  console.log({ phones })

  return (
    <div>
      phones List

    </div>
  )
}

export { PhonesList }
