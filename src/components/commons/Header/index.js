import React from 'react'
import logo from 'assets/guideSmithLogo.png'
import icon from 'assets/guideSmithIcon.png'
import PropTypes from 'prop-types'
import { ContentWrapper } from './ContentWrapper'
import { HeaderWrapper } from './HeaderWrapper'

const Header = ({ children }) => {
  return (
    <HeaderWrapper>
      <img className='logo' src={logo} alt='logo' />
      <img className='icon' src={icon} alt='icon' />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export { Header }
