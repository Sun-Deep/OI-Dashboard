import { Flex, Icon, Text } from '@chakra-ui/react'
import { AiOutlineLogout } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

const UserProfileMenu = () => {

  return (
    <Flex 
        justifyContent='space-between' 
        fontSize='.9em'
        color='white'
    >
      <Flex gridGap={4}>
        <Icon as={CgProfile} w={5} h={5} />
        <Text fontWeight='bold'>Mr. Admin</Text>
      </Flex>

      <Icon
        color='primary'
        cursor='pointer'
        as={AiOutlineLogout}
        w={5}
        h={5}
      />
    </Flex>
  )
}

export default UserProfileMenu
