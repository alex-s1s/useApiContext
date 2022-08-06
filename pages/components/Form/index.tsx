import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'

import { CustomerContext } from '../../hooks/context/formContext'

function Form() {

  const { submit } = useContext(CustomerContext)
 
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: { preventDefault: () => void }) =>{
    e.preventDefault();
    console.log("fff: ", {name, email})

    submit({name, email})
  }

  return (
    <form onSubmit={handleSubmit}>
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={6} rounded={6}>
          <Heading alignSelf="center" mb={6}>Formulário</Heading>
          <Input placeholder="Luiz" variant="filled" mb={3} type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}></Input>
          <Input placeholder='globalsys@gmail.com' variant="filled" mb={3} type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Button onClick={handleSubmit} mb={6} colorScheme="teal">Entrar</Button>
          <Button onClick={toggleColorMode}>Mudar Tema</Button>
     </Flex>
    </Flex>
    </form>
  )
}

export default Form