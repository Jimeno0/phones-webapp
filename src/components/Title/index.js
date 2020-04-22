import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h1`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme, color }) => theme[color]};
  ${({ styles }) => styles}
`

Title.defaultProps = {
  color: 'textTitle'
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'textTitle', 'textDesc']),
  styles: PropTypes.string
}

export { Title }
