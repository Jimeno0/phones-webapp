import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/commons/Text'
import { Subtitle } from 'components/commons/Subtitle'
import { Spacing } from 'components/commons/Spacing'
import { Flex } from 'components/commons/Flex'
import { GiProcessor } from 'react-icons/gi'
import { BsFullscreen, BsLightningFill } from 'react-icons/bs'
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
  @media (max-width: 600px) {
    width: 170px;
  }
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
`

const PhoneList = ({ phones }) => {
  return phones.map((phone) => {
    const { imageFileName, name, price, id, processor, screen, ram } = phone
    return (
      <PhoneCard key={id}>
        <PhoneImage src={imageFileName} />
        <Flex column styles='width: 100%; padding: 24px 24px 24px 0;' justify='space-between;'>
          <Subtitle>{name}</Subtitle>
          <Flex column justify='space-between' styles='width: 164px;'>
            <Kpi>
              <BsLightningFill />
              <Spacing vertical />
              <Text center>{ram} Gb</Text>
            </Kpi>
            <Spacing />
            <Kpi>
              <GiProcessor />
              <Spacing vertical />
              <Text center>{processor}</Text>
            </Kpi>
            <Spacing />
            <Kpi>
              <BsFullscreen />
              <Spacing vertical />
              <Text center>{screen}</Text>
            </Kpi>
          </Flex>
          <Flex justify='flex-end'>
            <Text color='primary' size='16' bold>$ {price}</Text>
          </Flex>
        </Flex>
      </PhoneCard>
    )
  })
}

export { PhoneList }
