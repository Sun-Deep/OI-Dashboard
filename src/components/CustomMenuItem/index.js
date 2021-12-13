import Icon from '@chakra-ui/icon'
import { Flex, Text, VStack } from '@chakra-ui/layout'
import { RiDashboardFill } from 'react-icons/ri'
import { BiStats } from 'react-icons/bi'
import { Link } from "react-router-dom";

const CustomMenuItem = () => {

  return (
    <VStack 
      fontSize='.9em' 
      w='100%' 
      align='stretch'
    >
      <Link to='/'>
        <Flex
          bgColor={window.location.pathname === '/' ? '#E8E8E8' : 'transparent'} 
          color={window.location.pathname === '/' ? 'primary' : 'white'}
          borderRadius='md'
          p={2}
          alignItems='center'
          gridGap={2}
          cursor='pointer'
        >
          <Icon as={RiDashboardFill} w={5} h={5} />
          <Text>Dashboard</Text>
        </Flex>
      </Link>

      <Link to='/users'>
        <Flex
          p={2}
          bgColor={window.location.pathname === '/users' ? '#E8E8E8' : 'transparent'} 
          color={window.location.pathname === '/users' ? 'primary' : 'white'}
          alignItems='center'
          borderRadius='md'
          gridGap={2}
          cursor='pointer'
        >
          <Icon as={BiStats} w={5} h={5} />
          <Text>Users</Text>
        </Flex>
      </Link>

    </VStack>
  )
}

export default CustomMenuItem
