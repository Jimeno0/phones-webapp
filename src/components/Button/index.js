import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  padding: 0px;
  background: none;
  border: none;
  ${({ theme, color }) => `color: ${theme[color]};`}
  ${({ contained }) => contained && containedStyles}
`

const containedStyles = css`
  color: white;
  padding: 16px 24px;
  ${({ theme, color }) => `background-color: ${theme[color]};`}
  ${({ disabled }) => disabled && disabledStyles}
`
const disabledStyles = css`
  cursor: not-allowed;
  ${({ theme }) => `background-color: ${theme.gray};`}
`

Button.defaultProps = {
  color: 'textTitle'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'textTitle', 'gray'])
}

export { Button }
