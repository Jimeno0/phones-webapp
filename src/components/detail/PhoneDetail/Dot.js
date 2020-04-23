import styled from 'styled-components'

const Dot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color && color};
`
export { Dot }
