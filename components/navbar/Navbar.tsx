// import { ReactNode } from "react";
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   IconButton,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   Image,
// } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import Link from "next/link";
// import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";

// const Links = [
//   {
//     name:"HOME",
//     path: "",
//   },
//   {
//     name:"ABOUT",
//     path: "/about",
//   },
//   {
//     name:"CONTACT",
//     path: "/contact",
//   },
// ]
// ;

// const NavLink = ({ children , path}: { children: ReactNode , path:string }) => (
//   <Box
//     px={"3.5"}
//     py={1}
//     fontWeight={"bold"}
//     fontStyle={"normal"}
//     rounded={"full"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//   >
//     <Link href={path}>{children}</Link>
//   </Box>
// );

// export default function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
    
//       <Box as="header" position={"sticky"} top="0" zIndex={1} h={10}>
//         <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//           <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//             <IconButton
//               size={"md"}
//               icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//               aria-label={"Open Menu"}
//               display={{ md: "none" }}
//               onClick={isOpen ? onClose : onOpen}
//             />
//             <HStack spacing={8} alignItems={"center"}>
//               <Box ml={"48"}>
//                 <Image
//                   src="/images/logo.png"
//                   alt="piaic logo here"
//                   h={"16"}
//                   w={28}
//                 ></Image>
//               </Box>
//               <HStack
//                 as={"nav"}
//                 spacing={4}
//                 display={{ base: "none", md: "flex" }}
//               >
//                 {Links.map(({name,path}) => (
//                   <NavLink key={path} path={path}>{name}</NavLink>
//                 ))}
//               </HStack>
//             </HStack>
//             <Flex alignItems={"center"} justifyContent={"space-around"} px="50">
//               <ColorModeSwitcher />
//               <Box mr={"36"}>
                
//                 <Link href="https://www.piaic.org/" target={"_blank"}>
//                   <Avatar
//                     size={"sm"}
//                     rounded={"full"}
//                     src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
//                   />
//                 </Link>
//               </Box>
//             </Flex>
//           </Flex>

//           {isOpen ? (
//             <Box pb={4} display={{ md: "none" }}>
//               <Stack as={"nav"} spacing={4}>
//               {Links.map(({name,path}) => (
//                   <NavLink key={path} path={path}>{name}</NavLink>
//                 ))}
//               </Stack>
//             </Box>
//           ) : null}
//         </Box>
//       </Box>
  
//   );
// }


import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Link from "next/link";
import { HamburgerIcon, CloseIcon, MoonIcon } from "@chakra-ui/icons";

const Links = [
  {
    name: "HOME",
    path: "",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={["2", "3.5"]}
    py={["1", "2"]}
    fontWeight={"bold"}
    fontStyle={"normal"}
    rounded={"full"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" position="sticky" top="0" zIndex={1} h={14}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h="full"
          alignItems="center"
          justifyContent="space-between"
          maxW="6xl"
          mx="auto"
        >
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "block", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <Image
                src="/images/logo.png"
                alt="piaic logo here"
                h={["10", "16"]}
                w={["20", "28"]}
              />
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <ColorModeSwitcher />
            <Box mr="4">
              <Link href="https://www.piaic.org/" target="_blank">
                <Avatar
                  size="sm"
                  rounded="full"
                  src="https://www.piaic.org/static/media/Logo.fb7de414.svg"
                />
              </Link>
            </Box>
          </Flex>
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ base: "block", md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
}
