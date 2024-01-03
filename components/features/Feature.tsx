import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineSchool } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { SiFuturelearn } from "react-icons/si";
import { FiCode } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

export default function Feature() {
  return (
    <Box py="50" as="section">
      {/* outer box*/}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text fontSize={"20"} py="3">
          Students learn general rules of society, punctuality, discipline and
          responsible work habits essential in their future career position.
        </Text>
      </Box>
      <Container maxWidth={"1200"} mt="10">
        {/* six features with icons */}
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="10">
            {/* feature 1 start */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <GiTeacher size={50} />
                </Box>

                <Box>
                  <Heading fontSize={18}>Best Faculty </Heading>
                  <Text>We have experienced and well trained</Text>
                </Box>
              </HStack>
              {/* feature 1  ends */}
            </Box>

            {/* feature 2 start */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <ImBooks size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Quality Education</Heading>
                  <Text>provide best quality education to our student</Text>
                </Box>
              </HStack>
              {/* feature 2  ends */}
            </Box>

            {/* feature 3 start */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <MdOutlineSchool size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Merit Based Scholarships</Heading>
                  <Text>
                    The merit based scholarship is for Regular and punctual
                    Students.
                  </Text>
                </Box>
              </HStack>
              {/* feature 3  ends */}
            </Box>

            {/* feature 4 start */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <SiFuturelearn size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Learning Future</Heading>
                  <Text>
                    We are all striving to ensure that our younger generation is
                    ready to complete in the future.
                  </Text>
                </Box>
              </HStack>
              {/* feature 4  ends */}
            </Box>

            {/* feature 5 start */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <FiCode size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>Developer Friendly</Heading>
                  <Text>
                    We are dealing with a particular focus on personal
                    development and professional growth.
                  </Text>
                </Box>
              </HStack>
              {/* feature 5  ends */}
            </Box>

            {/* feature 6 start */}
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <TbWorld size={50} />
                </Box>
                <Box>
                  <Heading fontSize={18}>International Standard </Heading>
                  <Text>
                    We covers global standard and has come up with a system that
                    applies to all standards.
                  </Text>
                </Box>
              </HStack>
              {/* feature 6  ends */}
            </Box>
          </SimpleGrid>
          {/* feature 6  ends */}
        </Box>
      </Container>
    </Box>
  );
}
