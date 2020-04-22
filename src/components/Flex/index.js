import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  ${({ column }) => column && 'flex-direction: column;'}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ wraped }) => wraped && 'flex-wrap: wrap;'}
`
