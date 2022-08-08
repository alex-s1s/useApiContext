import { Flex } from '@chakra-ui/react'
import React from 'react'
import { childreProp } from '../../hooks/context/formContext'

function Card({children}: childreProp) {
  return (
    <Flex margin="0 auto" background="white" width="400px" justify='center' color="black" padding="30px" marginTop="100px" borderRadius="8px">
            {children}
   </Flex>
  )
}

export default Card