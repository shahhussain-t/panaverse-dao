import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Flex,
  Stack,
  ButtonProps,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

export default function CTA(props: ButtonProps) {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Container
        maxW={1146}
        bg={colorMode == "light" ? "blue.50" : "black"}
        p="10"
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Box flex={3} overflow={"hidden"}>
            <Heading>Our Mission</Heading>
            <Text fontSize={"20px"} mt="8" mr={"-16"}>
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest,cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </Text>
          </Box>
          <Box flex={1} alignSelf="flex-start">
            <Link href="https://www.panaverse.co" target={"_blank"}>
              <Button
                {...props}
                px={4}
                ml={"44"}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
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
                Details
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
