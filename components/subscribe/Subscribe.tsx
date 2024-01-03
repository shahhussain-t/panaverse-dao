import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  ButtonProps,
  Input,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";export default function Newsletter(props: ButtonProps) {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Container
        bg={colorMode == "light" ? " blue.50" : "black"}
        py={"16"}
        maxW={"1146"}
      >
        <Flex
          justifyContent={"space-around"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box>
            <Heading fontWeight={"semibold"}>Subscribe Now</Heading>
            <Text>
              Subscribe us now to get email updates on our new programs,
              courses, workshops, Internships, Jobs & much more.
            </Text>
          </Box>
          <Box>
            <HStack>
           
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <Button
                {...props}
                px={4}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                w={"40"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Subscribe
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
