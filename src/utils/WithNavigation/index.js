import { Box, Text } from '@chakra-ui/react'
import SideNavigation from '../../components/SideNavigation'

const WithNavigation = (Component, isSideNavigation = true) => props => {
  return (
    <>
      {isSideNavigation && <SideNavigation />}

      {isSideNavigation ? <Box p={5} ml={['0', '0', '240px', '240px', '240px']}>
          <Component {...props} />
        </Box> : <Box p={2}>
            <Component {...props} />
          </Box>}

      {/* {(isSideNavigation
        ? <Box p={5} ml={['0', '0', '240px', '240px', '240px']}>
          <Component {...props} />
        </Box>
        : <Box p={2}>
            <Component {...props} />
          </Box>
      )} */}
    </>
  )
}

export default WithNavigation
