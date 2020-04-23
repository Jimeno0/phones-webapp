import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.p`
  margin: 0px;
  padding: 0px;
  line-height: 1.3;
  font-size: ${({ size }) => size ? `${size}px` : '14px'};
  color: ${({ theme, color }) => theme[color]};
  ${({ center }) => center && 'text-align: center;'}
  ${({ bold }) => bold && 'font-weight: bold;'}
  ${({ styles }) => styles}
`

Text.defaultProps = {
  color: 'textDesc'
}

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'textTitle', 'textDesc']),
  center: PropTypes.bool,
  bold: PropTypes.bool,
  styles: PropTypes.string
}

export { Text }
