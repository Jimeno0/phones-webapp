import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhones } from 'actions'

const usePhones = () => {
  const { phones, isLoading } = useSelector(({ phones }) => phones)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhones())
  }, [])

  return { isLoading, phones }
}

export { usePhones }
