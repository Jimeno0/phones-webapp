import React from 'react'
import logo from 'assets/guideSmithLogo.png'
import icon from 'assets/guideSmithIcon.png'
import PropTypes from 'prop-types'
import { ContentWrapper } from './ContentWrapper'
import { HeaderWrapper } from './HeaderWrapper'

const Header = ({ children, onLogoClick }) => {
  return (
    <HeaderWrapper>
      <img onClick={onLogoClick} className='logo' src={logo} alt='logo' />
      <img onClick={onLogoClick} className='icon' src={icon} alt='icon' />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  onLogoClick: PropTypes.func
}

Header.defalutProps = {
  onLogoClick: () => {}
}

export { Header }
