import styled, { css } from 'styled-components'

const columnStyles = css`
  flex-basis: 33%;
  padding: 0 8px;
  flex-direction: column;
  ${({ whitBorder }) => whitBorder && 'border-right: 1px solid;'}
`

const Kpi = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  svg {
    height: 24px;
    width: 24px;
  }
  @media (max-width: 600px) {
    svg {
      height: 16px;
      width: 16px;
    }
  }
  ${({ column }) => column && columnStyles}
`

export { Kpi }
