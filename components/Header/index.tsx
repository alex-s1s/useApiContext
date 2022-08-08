import React from "react"
import { Flex, Heading} from "@chakra-ui/react"

type HeaderProps = {
  userName: string,
}

export default function Header({userName}: HeaderProps) {
  return (
   <>
    <Flex
      as="nav"
      align="center"
      justify="center"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1"  size="lg" letterSpacing={"tighter"}>
          {userName}
        </Heading>
      </Flex>
    </Flex>
   </>
  )
}