import React from 'react'
import PropTypes from 'prop-types'
import { MainWrapper } from './MainWrapper'
import { Content } from './Content'

const Main = ({ children }) => {
  return (
    <MainWrapper>
      <Content>
        {children}
      </Content>
    </MainWrapper>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export { Main }
