import { Box } from "@chakra-ui/layout"

const OICard = ({ children, ...otherProps }) => {

    return <Box
        boxShadow='4px 4px 40px rgba(0, 0, 0, 0.25)'
        borderRadius='16px'
        backgroundColor='white'
        p={3}
        {...otherProps}
    >
        {children}
    </Box>
}

export default OICard