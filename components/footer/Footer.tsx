import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaTwitter, FaYoutube, FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const Logo = (props: any) => {
  return <Image src="images/logo.png" alt="image"></Image>;
    
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Panaverse DAO. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
            <SocialButton label={"Facebook"} href={"https://www.facebook.com/groups/panaverse/"} >
                <FaFacebookF />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"https://twitter.com/Panaverse_edu"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"https://www.youtube.com/@panaverse"}>
                <FaYoutube />
              </SocialButton>
               <SocialButton label={"Github"} href={"https://github.com/panaverse"}>
                 <FaGithub />
               </SocialButton>
               <SocialButton label={"linkedin"} href={"https://www.linkedin.com/company/panaverse/"}>
                 <FaLinkedin />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
             <ListHeader>Company</ListHeader>
             <Link href="about">About us</Link>
             <Link href={"#"}>Blog</Link>
             <Link href={"contact"}>Contact us</Link>

             <Link href={"#"}>Services</Link>
           </Stack>
              <Stack align={"flex-start"}>
             <ListHeader>Support</ListHeader>
             <Link href={"#"}>Help Center</Link>
             <Link href={"#"}>Terms of Service</Link>
             <Link href={"#"}>Privacy Policy</Link>
             <Link href={"#"}>Status</Link>
           </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('blue.400', 'blue.400')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'blue.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
