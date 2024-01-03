// import React from "react";
// import {
//   Box,
//   ButtonProps,
//   Container,
//   Flex,
//   Heading,
//   Text,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
// } from "@chakra-ui/react";

// export default function Faqs(props:ButtonProps) {
//   return (
//     <Box>
//       <Container maxW={1200} my="16">
//         <Flex flexDirection={{ base: "column", md: "row" }}>
//           {/* left section */}
//           <Box flex={2} pr="28" mt={"16"}>
//             <Box textAlign={"left"}>
//               <Text color={"blue.500"} fontWeight="bold">
//                 Support
//               </Text>
//               <Heading fontWeight={"semibold"}>FAQs</Heading>
//               <Text fontSize={"20"} py="3">
//                  If you got any questions so We are here to answere you. If you do not see
//                 your question here drop us a line on our contact page.
//               </Text>
//             </Box>
//           </Box>
//           {/* left section ends above */}
//           {/* right section */}
//           <Box flex={3} mt="20" >
//             <Accordion allowToggle>
//               <AccordionItem>
//                 <h2>
//                   <AccordionButton>
//                     <Box as="span" flex="1" textAlign="left">
//                       Which type of courses you offering?
//                     </Box>
//                     <AccordionIcon />
//                   </AccordionButton>
//                 </h2>
//                 <AccordionPanel pb={4}>
//                   We offering several types of courses on future technologies
//                   such as Web 3.0 & Metaverse, Artificial Intelligence,
//                   Blockchain, Internet of things, Cloud native computing,
//                   Network programmability and automation etc..
//                 </AccordionPanel>
//               </AccordionItem>

//               <AccordionItem>
//                 <h2>
//                   <AccordionButton>
//                     <Box as="span" flex="1" textAlign="left">
//                       Are you providing Internships for Students ?
//                     </Box>
//                     <AccordionIcon />
//                   </AccordionButton>
//                 </h2>
//                 <AccordionPanel pb={4}>
//                   We have sound internship model in our training programs that
//                   gives you an opportunity to work with professionals on live
//                   industry projects. It helps you to build your own projects,
//                   applications and personal portfolio.
//                 </AccordionPanel>
//               </AccordionItem>

//               <AccordionItem>
//                 <h2>
//                   <AccordionButton>
//                     <Box as="span" flex="1" textAlign="left">
//                       Can I get a good Job after complete any course from
//                       panaverse?
//                     </Box>
//                     <AccordionIcon />
//                   </AccordionButton>
//                 </h2>
//                 <AccordionPanel pb={4}>
//                   Our Skill development Training programs are designed according
//                   to need of job market. These programs are supervised and
//                   taught by highly industry experienced professionals.
//                   INTERNSHIPS
//                 </AccordionPanel>
//               </AccordionItem>
//             </Accordion>
//             </Box>
//         </Flex>
//       </Container>
//     </Box>
//   );
// }


import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Faqs() {
  return (
    <Box>
      <Container maxW={1200} my={16}>
        <Flex flexDirection={{ base: "column", md: "row" }}>
          {/* left section */}
          <Box flex={2} pr={{ base: 0, md: 8 }} mt={16}>
            <Box textAlign="left">
              <Text color="blue.500" fontWeight="bold">
                Support
              </Text>
              <Heading fontWeight="semibold">FAQs</Heading>
              <Text fontSize={20} py={3}>
                If you have any questions, we are here to answer them. If you
                do not see your question here, drop us a line on our contact
                page.
              </Text>
            </Box>
          </Box>
          {/* left section ends above */}
          {/* right section */}
          <Box flex={3} mt={20}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex={1} textAlign="left">
                      Which type of courses are you offering?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We offer several types of courses on future technologies such
                  as Web 3.0 & Metaverse, Artificial Intelligence, Blockchain,
                  Internet of Things, Cloud Native Computing, Network
                  Programmability, and Automation, etc.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex={1} textAlign="left">
                      Are you providing internships for students?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We have a sound internship model in our training programs
                  that gives you an opportunity to work with professionals on
                  live industry projects. It helps you build your own projects,
                  applications, and personal portfolio.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex={1} textAlign="left">
                      Can I get a good job after completing any course from
                      Panaverse?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Our skill development training programs are designed
                  according to the needs of the job market. These programs are
                  supervised and taught by highly experienced industry
                  professionals.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          {/* right section ends above */}
        </Flex>
      </Container>
    </Box>
  );
}
