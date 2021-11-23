import { Box, Flex, Text } from "@chakra-ui/layout"
import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

const BreadCrumb = ({ items }) => {
    return <Box>
        <Flex
            fontSize='12px'
            gridGap={2}
        >
            {
                items.map((item, idx) => (
                    <Link to={item.link} key={idx}>
                        <Flex
                            gridGap={1}
                            alignItems='center'
                        >
                        <Text 
                            color={item.active ? 'primary': 'black'}
                            fontWeight={item.active ? 'bold': 'normal'}
                        >
                            {item.title} 
                        </Text>
                            {
                                idx !== items.length - 1 && <BiRightArrowAlt />
                            }
                        </Flex>
                    </Link>
                ))
            }
        </Flex>
    </Box>
}

export default BreadCrumb