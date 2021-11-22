import Icon from '@chakra-ui/icon'
import { Flex, Link, Text, VStack } from '@chakra-ui/layout'
import { RiDashboardFill } from 'react-icons/ri'
import { BiStats } from 'react-icons/bi'

const CustomMenuItem = () => {

  return (
    <VStack 
      fontSize='.9em' 
      w='100%' 
      align='stretch'
    >
      <Link href='/'>
        <Flex
          bgColor='#E8E8E8'
          color='primary'
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

      <Link href='/'>
        <Flex
          p={2}
          color='white'
          alignItems='center'
          borderRadius='md'
          gridGap={2}
          cursor='pointer'
        >
          <Icon as={BiStats} w={5} h={5} />
          <Text>Each Stats</Text>
        </Flex>
      </Link>

    </VStack>
  )
}

export default CustomMenuItem
