"use client";
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Joined() {
  return (
    <Box textAlign="center" py={20} px={6} mt={20} >
      <CheckCircleIcon boxSize={'60px'} color={'green.600'} />
      <Heading as="h3" size="xl" mt={6} mb={2}>
        Submission Successful
      </Heading>
      <Text color={'gray.500'}>
        Your Form has been submitted successfully.
        <Text> We will contact you soon! </Text>
      
        For any further inquires please contact <Link href="mailto:zia@panacloud.com" color={"blue.600"}>zia@panacloud.com</Link>

      </Text>
    </Box>
  );
}