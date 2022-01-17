import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  FormControl,
  Center,
  HStack,
  Circle,
  Square,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { EmailIcon, InfoIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
export default function Forms() {
  return (
    <>
      <h1>SignUp Form using Chakra UI</h1>
      <Stack spacing={4} width={300}>
        <FormControl isRequired>
          <InputGroup>
            <Input type="text " placeholder="Enter First Name" />
            <InputLeftElement children={<InfoIcon />} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <Input type="text " placeholder="Enter Last Name" />
            <InputLeftElement children={<InfoIcon />} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <Input type="email " placeholder="Enter Email" />
            <InputLeftElement children={<EmailIcon />} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <Input type="password " placeholder="Enter Password" />
            <InputLeftElement children={<LockIcon />} />
          </InputGroup>
        </FormControl>
        <Button type="submit">Sign Up</Button>
        <Center bg="tomato" h="100px" color="white">
          This is the Center
        </Center>
        <HStack>
          <Circle size="40px" bg="tomato" color="white">
            <PhoneIcon />
          </Circle>
          <Square size="40px" bg="purple.700" color="white">
            <PhoneIcon />
          </Square>
        </HStack>
      </Stack>
      <Wrap>
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
    </>
  );
}
