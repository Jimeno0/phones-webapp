import { useEffect } from 'react'
import { usePhones } from 'hooks'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePhone } from 'actions'

const useActivePhone = (id) => {
  const { isLoading, phones } = usePhones()
  const dispatch = useDispatch()
  const phone = useSelector(state => state.activePhoneReducer)

  useEffect(() => {
    if (isLoading) return
    const active = phones.find((item) => item.id === id)
    dispatch(setActivePhone(active))
  }, [isLoading])

  return { isLoading, phone }
}

export { useActivePhone }
