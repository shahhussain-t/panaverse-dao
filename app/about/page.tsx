"use client";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
export default function About() {
  return (
    <div >
      <HStack>
        <Box pl={25} fontSize="30" mt="100">
          <Heading> About us </Heading>
          <Text>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </Text>
        </Box>
      </HStack>
    </div>
  );
}
