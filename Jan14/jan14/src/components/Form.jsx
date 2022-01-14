import React from "react";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Button,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { EmailIcon, InfoIcon, LockIcon } from "@chakra-ui/icons";
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
      </Stack>
    </>
  );
}
