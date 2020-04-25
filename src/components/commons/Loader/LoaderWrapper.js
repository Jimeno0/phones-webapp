import styled from 'styled-components'

const LoaderWrapper = styled.div`
  color: ${({theme}) => theme.primary};
  margin-top: 30vh;
  svg {
    width: 60px;
    height: 60px;
    animation:spin 1s linear infinite;
    @keyframes spin { 100% { transform:rotate(360deg); } }
  }
`
export { LoaderWrapper }
