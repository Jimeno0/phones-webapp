
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: sticky;
  z-index: 1;
  background-color: white;
  top: 0;
  padding: 10px 200px 10px 40px;
  display: flex;
  box-shadow: 0px 2px 11px 1px rgba(0,0,0,0.4);
  img {
    cursor: pointer;
  }
  .logo{
    width: 160px;
  }
  .icon {
    width: 40px;
    display: none;
  }
  @media (max-width: 900px) {
    padding-right: 80px;
   .logo {
     display: none;
   }
   .icon {
     display: flex;
   }
  }
}
`
