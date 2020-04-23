import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/commons/Text'
import { Subtitle } from 'components/commons/Subtitle'
import { Spacing } from 'components/commons/Spacing'
import { Kpi } from 'components/commons/Kpi'
import { Flex } from 'components/commons/Flex'
import { GiProcessor } from 'react-icons/gi'
import { BsFullscreen, BsLightningFill } from 'react-icons/bs'
import { Dot } from './Dot'
import { PhoneImage } from './PhoneImage'
import { wrapperStyles, kpisWrapperStyles } from './styles'

const PhoneDetail = (props) => {
  const {
    imageFileName,
    name,
    price,
    processor,
    screen,
    description,
    manufacturer,
    color,
    ram
  } = props
  return (
    <Flex styles={wrapperStyles}>
      <PhoneImage src={imageFileName} />
      <Flex column>
        <Spacing size='48' />
        <Subtitle>{name}</Subtitle>
        <Spacing size='24' />
        <Flex justify='center' styles={kpisWrapperStyles}>
          <Kpi column whitBorder>
            <BsLightningFill />
            <Spacing />
            <Text center>{ram} Gb</Text>
          </Kpi>
          <Kpi column whitBorder>
            <GiProcessor />
            <Spacing />
            <Text center>{processor}</Text>
          </Kpi>
          <Kpi column>
            <BsFullscreen />
            <Spacing />
            <Text center>{screen}</Text>
          </Kpi>
        </Flex>
        <Spacing size='16' />
        <Text> By {manufacturer}</Text>
        <Spacing size='16' />
        <Flex align='center'>
          <Text>Color:</Text>
          <Spacing vertical />
          <Dot color={color} />
        </Flex>
        <Spacing size='24' />
        <Text color='primary' size='20' bold>${price}</Text>
        <Spacing size='24' />
        <Text>{description}</Text>
      </Flex>
    </Flex>
  )
}

PhoneDetail.propTypes = {
  imageFileName: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  processor: PropTypes.string,
  screen: PropTypes.string,
  ram: PropTypes.number,
  description: PropTypes.string,
  manufacturer: PropTypes.string,
  color: PropTypes.string
}

export { PhoneDetail }
