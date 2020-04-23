import styled from 'styled-components'

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
`

export { Kpi }
