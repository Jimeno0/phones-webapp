import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/commons/Text'
import { Subtitle } from 'components/commons/Subtitle'
import { Spacing } from 'components/commons/Spacing'
import { Flex } from 'components/commons/Flex'
import { GiProcessor } from 'react-icons/gi'
import { BsFullscreen } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'

const PhoneCard = styled.div`
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
const PhoneImage = styled.img`
  width: 200px;
  border-radius: 2px;
`

const Kpi = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.primary};
  width: 60px;
  svg {
    height: 24px;
    width: 24px;
  }
`

const PhoneList = ({ phones }) => {
  return phones.map((phone) => {
    const { imageFileName, name, price, id, processor, screen } = phone
    return (
      <PhoneCard key={id}>
        <PhoneImage src={imageFileName} />
        <Flex column styles='width: 100%; padding: 24px 24px 24px 0;'>
          <Subtitle>{name}</Subtitle>
          <Spacing size='40' />
          <Flex justify='space-between'>
            <Kpi>
              <MdAttachMoney />
              <Spacing />
              <Text center>{price}</Text>
            </Kpi>
            <Kpi>
              <GiProcessor />
              <Spacing />
              <Text center>{processor}</Text>
            </Kpi>
            <Kpi>
              <BsFullscreen />
              <Spacing />
              <Text center>{screen}</Text>
            </Kpi>
          </Flex>
        </Flex>
      </PhoneCard>
    )
  })
}

export { PhoneList }
