import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { LoaderWrapper } from './LoaderWrapper'

const Loader = () => {
  return (
    <LoaderWrapper>
      <AiOutlineLoading3Quarters/>
    </LoaderWrapper>
  )
}

export { Loader }
