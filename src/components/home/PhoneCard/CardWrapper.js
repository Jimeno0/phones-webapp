import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.4);
  cursor: pointer;
  transform: scale(1);
  transition: all .1s ease-in-out;
  margin: 8px;
  min-width:350px;
  max-width: 600px;
  flex-grow: 1;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
  }

`

export { CardWrapper }
