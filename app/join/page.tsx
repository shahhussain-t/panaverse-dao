"use client";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

const avatars = [
  {
    name: "A",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "B",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "C",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "D",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "employe-5",
    url: "https://bit.ly/code-beast",
  },
];

export default function Join() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          >
            Senior web designers{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, blue.600,blue.600)"
              bgClip="text"
            >
              &
            </Text>{" "}
            Full-Stack Developers
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, grey.400,grey.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.200"}
          rounded={"x1"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"grey.900"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Join our team
              <Text
                as={"span"}
                bgGradient="linear(to-r, blue.600,blue.600)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.900"} fontSize={{ base: "sm", sm: "md" }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={7}>
              <Input
                placeholder="Name"
                bg={"whiteAlpha.900"}
                border={1}
                color={"gray.700"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="xyz@gmail.com"
                bg={"whiteAlpha.900"}
                border={1}
                color={"gray.700"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="+92"
                bg={"whiteAlpha.900"}
                border={1}
                color={"gray.700"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Button
                fontFamily={"heading"}
                bg={"gray.700"}
                color={"whiteAlpha.900"}
              >
                Upload CV
              </Button>
            </Stack>
            <Link href="joined" target={"_blank"}>
              <Button
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bg={"gray.700"}
                color={"whiteAlpha.900"}
                _hover={{
                  bgGradient: "linear(to-r, whiteAlpha.300,whiteAlpha.300)",
                  boxShadow: "xl",
                }}
              >
                Submit
              </Button>
            </Link>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
