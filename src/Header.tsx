import { Flex, Box, Text, Button, Spacer, Link, Stack } from '@chakra-ui/react';
import PixelGlasses from './components/PixelGlasses';

const Header = () => {
  return (
    <Flex
      as="header"
      width="100%"
      padding="1rem"
      boxShadow="md"
      alignItems="center"
      bg="#FAF5EA"
      borderBottom= "2px solid black"
    >
      {/* Logo or Company Name */}
      <Box>
        <Text fontSize="xl" fontWeight="bold" color="black">
          Kernel42.ai
        </Text>
      </Box>
      
      <Spacer />
      
      <PixelGlasses/>
    
      <Spacer />
      
      <Stack direction="row" spacing={4}>
        <Link href="#" color="black" fontSize="17" fontWeight="bold" _hover={{ color: '#f9e7c0' }} paddingRight={5} >
          About
        </Link>
      </Stack>  

      {/* CTA Button */}
      <Box>
        <Button colorScheme="gray" variant="outline" size="md" borderColor="black" borderWidth = "2px" _hover ={{bg: '#f9e7c0'}}>
          Dive In
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;