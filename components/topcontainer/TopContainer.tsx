import { Avatar, AvatarGroup, Flex, Hide, ButtonProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

import React from "react";

export default function TopContainer(props: ButtonProps) {
  return (
    <Box
      as="section"
      backgroundImage={"/images/background.png"}
      backgroundSize="contain"
      backgroundAttachment={"fixed"}
      py="20"
      pl="10"
      overflowWrap={"break-word"}
    >
      <HStack>
        {/*left  */}
        <Box
          w={{ base: "100%", lg: "50%" }}
          color={"white"}
          pl={{ base: "0", lg: "44" }}
        >
          <Text fontWeight="bold">
            Presidential Initiative for Artificial Intelligence & Computing
            (PIAIC)
          </Text>
          <Heading fontSize={50}>
            Certified Web 3.0 and Metaverse Developer
          </Heading>
          <Text lineHeight={"8"} fontSize="larger">
            Getting Ready for the Next Generation and Future of the Internet -
            Join a 13 Trillion Dollar Industry with 5 Billion Users
          </Text>
          <Box mt={5}>
            <Link href="join" target={"_blank"}>
              <Button
                {...props}
                px={4}
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
                Join Us
              </Button>
            </Link>

            <Button
              {...props}
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              mx={"5"}
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
          </Box>
          <Flex alignItems={"center"}>
            <AvatarGroup size="md" max={3} mt="5">
              <Avatar name="Zia Khan" src="/images/ziakhan.jpg" />
              <Avatar name="Daniyal Nagori" src="/images/daniyalnagori.jfif" />
              <Avatar name="Adil Altaf" src="/images/adilkhan.jfif" />
              <Avatar name="Manzar Abbas" src="/images/manzarabbas" />
              <Avatar name="Manzar Abbas" src="/images/manzarabbas" />
            </AvatarGroup>
            <Text mt="5" ml="3">
              Created by:{" "}
              <Link
                color={"blue.500"}
                target={"-blank"}
                href={"https://github.com/shahhussain-t"}
              >
                {" "}
                Shahhussain{" "}
              </Link>
            </Text>
          </Flex>
        </Box>
        {/* right */}
        <Hide below="md">
          <Box w="40%">
            <Image src="/images/banner.png" alt="image" />
          </Box>
        </Hide>
      </HStack>
    </Box>
  );
}
