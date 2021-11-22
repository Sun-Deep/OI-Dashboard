import { Box } from "@chakra-ui/layout"
import BreadCrumb from "../../components/BreadCrumb"
import WithNavigation from "../../utils/WithNavigation"

const MainDashbaord = () => {
    return <Box>
        <BreadCrumb 
            items={[
                {
                    title: 'Dashboard',
                    link: '/',
                    active: false
                },
                {
                    title: 'User',
                    link: '/user',
                    active: true
                }
            ]}
        />
    </Box>
}

export default WithNavigation(MainDashbaord)