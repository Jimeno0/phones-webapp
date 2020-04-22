import styled from 'styled-components'

const Subtitle = styled.h4`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  position: relative;
  margin-bottom: 14px;
  font-size: 16px;
  color: ${({ theme, color }) => theme[color]};
  &::before {
    content: '';
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: -14px;
  }

`

export { Subtitle }
