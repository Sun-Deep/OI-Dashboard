import { Box } from "@chakra-ui/layout"
import BreadCrumb from "../../components/BreadCrumb"
import OITable from "../../components/OITable"
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

        <OITable />
    </Box>
}

export default WithNavigation(MainDashbaord)