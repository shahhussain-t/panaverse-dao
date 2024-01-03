// import { PropsWithChildren } from "react";
// import {
//   chakra,
//   Container,
//   Stack,
//   Text,
//   useColorModeValue,
//   Image,
//   Box,
//   TextProps,
// } from "@chakra-ui/react";

// const Prefooter = () => {
//   return (
//     <Container maxW="1100px" px={{ base: 6, md: 3 }} py={14}>
//       <Stack direction={{ base: "column", md: "row" }} justifyContent="center">
//         <Box mr={{ base: 0, md: 5 }} pos="relative">
//           {/* <DottedBox /> */}
//           <Image
//             marginTop={16}
//             minW={{ base: "auto", md: "30rem" }}
//             src={"/images/image.png"}
//           />
//         </Box>
//         <Stack direction="column" spacing={"6"} justifyContent="center">
//           <chakra.h1
//             fontSize="3xl"
//             lineHeight={1}
//             fontWeight="bold"
//             textAlign="left"
//           >
//             The Outcome for Participants of the Program
//           </chakra.h1>
//           <Box marginTop={5}>
//             <Text fontSize={"20px"} textAlign="justify">
//               Web3.0 and Metaverse development offer potential outcomes such as
//               a more decentralized web, enhanced security, new business models,
//               a virtual economy, new opportunities for social interaction,
//               entertainment, and education, and new challenges such as privacy
//               concerns, regulatory issues, and ethical considerations. These
//               technologies have the potential to transform the way we interact
//               with the internet and each other, and as they continue to evolve,
//               we can expect to see new innovations and opportunities emerge.
//             </Text>
//           </Box>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// };

// const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
//   return (
//     <Text
//       fontSize="md"
//       textAlign="left"
//       lineHeight="1.375"
//       fontWeight="400"
//       color="gray.500"
//       {...props}
//     >
//       {children}
//     </Text>
//   );
// };

// export default Prefooter;

import { PropsWithChildren } from "react";
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Box,
  TextProps,
} from "@chakra-ui/react";

const Prefooter = () => {
  return (
    <Container maxW="1100px" px={{ base: 6, md: 3 }} py={14}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        spacing={{ base: 10, md: 0 }}
      >
        <Box w={{ base: "100%", md: "auto" }} mr={{ base: 0, md: 5 }} pos="relative">
          {/* <DottedBox /> */}
          <Image
            marginTop={16}
          
            h="auto"
            maxW={{ base: "100%", md: "30rem" }}
            src={"/images/image.png"}
            alt="Image"
            objectFit="contain" // Ensures the image scales properly while maintaining aspect ratio
          />
        </Box>
        <Stack direction="column" spacing={"6"} justifyContent="center">
          <chakra.h1
            fontSize={{ base: "2xl", md: "3xl" }}
            lineHeight={1}
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            The Outcome for Participants of the Program
          </chakra.h1>
          <Box marginTop={5}>
            <Text fontSize={{ base: "lg", md: "xl" }} textAlign="justify">
              Web3.0 and Metaverse development offer potential outcomes such as
              a more decentralized web, enhanced security, new business models,
              a virtual economy, new opportunities for social interaction,
              entertainment, and education, and new challenges such as privacy
              concerns, regulatory issues, and ethical considerations. These
              technologies have the potential to transform the way we interact
              with the internet and each other, and as they continue to evolve,
              we can expect to see new innovations and opportunities emerge.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

const Content = ({ children, ...props }: PropsWithChildren<TextProps>) => {
  return (
    <Text
      fontSize="md"
      textAlign="left"
      lineHeight="1.375"
      fontWeight="400"
      color="gray.500"
      {...props}
    >
      {children}
    </Text>
  );
};

export default Prefooter;
