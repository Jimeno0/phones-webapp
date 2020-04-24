import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/commons/Text'
import { Subtitle } from 'components/commons/Subtitle'
import { Spacing } from 'components/commons/Spacing'
import { Flex } from 'components/commons/Flex'
import { Kpi } from 'components/commons/Kpi'
import { GiProcessor } from 'react-icons/gi'
import { BsFullscreen, BsLightningFill } from 'react-icons/bs'
import { CardWrapper } from './CardWrapper'
import { PhoneImage } from './PhoneImage'
import { descrpitionStyles, kpisWrapperStyles } from './styles'

const PhoneCard = (props) => {
  const { onClick, ...phone } = props
  const {
    imageFileName,
    name,
    price,
    id,
    processor,
    screen,
    ram
  } = phone
  return (
    <CardWrapper data-testid={`phone-card-${id}`} key={id} onClick={() => onClick(phone)}>
      <PhoneImage src={imageFileName} />
      <Flex column styles={descrpitionStyles} justify='space-between;'>
        <Subtitle>{name}</Subtitle>
        <Flex column justify='space-between' styles={kpisWrapperStyles}>
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
          <Text color='primary' size='16' bold>${price}</Text>
        </Flex>
      </Flex>
    </CardWrapper>
  )
}

PhoneCard.propTypes = {
  imageFileName: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  processor: PropTypes.string,
  screen: PropTypes.string,
  onClick: PropTypes.func,
  ram: PropTypes.number
}

PhoneCard.defaultProps = {
  onClick: () => {}
}

export { PhoneCard }
