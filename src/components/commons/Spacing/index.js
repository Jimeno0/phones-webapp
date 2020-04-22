import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const borderStyles = css`
  ${({ theme }) => 'border-bottom: 2px solid #f4f4f4;'}
`

const verticalStyles = css`
  height: 100%;
  margin-bottom: 0px;
  flex-shrink: 0;
  ${({ size }) => `width:${size}px;`}
`

const Spacing = styled.div`
  width: 100%;
  ${({ size }) => `margin-bottom:${size}px;`}
  ${({ vertical }) => vertical && verticalStyles}
  ${({ withLine }) => withLine && borderStyles}
`

Spacing.defaultProps = {
  size: '16'
}

Spacing.propTypes = {
  size: PropTypes.string,
  vertical: PropTypes.bool,
  withLine: PropTypes.bool
}

export { Spacing }
