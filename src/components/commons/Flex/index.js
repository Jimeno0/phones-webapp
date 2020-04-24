import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  ${({ column }) => column && 'flex-direction: column;'}
  ${({ wraped }) => wraped && 'flex-wrap: wrap;'}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ styles }) => styles}
`
