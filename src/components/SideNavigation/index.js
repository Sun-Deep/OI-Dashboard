import { Box, StackDivider, VStack } from '@chakra-ui/react'
import CustomMenuItem from '../CustomMenuItem'
import UserProfileMenu from '../UserProfileMenu'

const SideNavigation = () => {
  return (
    <Box
      pos='fixed'
      top={0}
      left={0}
      boxShadow='md'
      h='100vh'
      w='240px'
      maxW='240px'
     
      display={['none', 'none', 'block', 'block', 'block']}
      bgColor='black'
    >
      <VStack
        divider={<StackDivider borderColor='primary' />}
        // spacing={4}
        h='100%'
      >
        <Box color='white' p={2}>
          Otermans Institute
        </Box>
        <Box 
            h={['80%', '80%', '80%', '80%', '85%']} 
            overflowY='auto' 
            w='100%' 
            textAlign='center'
            p={4}
        >
          <CustomMenuItem />
        </Box>
        <Box w='100%'  p={4}>
          <UserProfileMenu />
        </Box>
      </VStack>
    </Box>
  )
}

export default SideNavigation
