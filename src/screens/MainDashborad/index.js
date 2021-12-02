import { Text, VStack } from "@chakra-ui/layout"
import BreadCrumb from "../../components/BreadCrumb"
import OITable from "../../components/OITable"
import ScreenHeading from "../../components/ScreenHeading";
import WithNavigation from "../../utils/WithNavigation"
import { data } from '../../data'
import OICard from "../../components/OICard";


const columns = [
    {
        name: 'First Name',
        selector: row => row.userId.firstName,
    },
    {
        name: 'IP',
        selector: row => row.ip,
    },
    {
        name: 'Page',
        selector: row => row.page,
    },
    {
        name: 'Time Spent',
        selector: row => row.timespent
    },
    {
        name: 'Date Time',
        selector: row => row.datetime
    }
];


const MainDashbaord = () => {
    return <VStack
        spacing={2}
        align='stretch'
        w='full'
    >
        <BreadCrumb 
            items={[
                {
                    title: 'Dashboard',
                    link: '/',
                    active: true
                }
            ]}
        />
        <ScreenHeading title='Dashboard' />
    </VStack>
}

export default WithNavigation(MainDashbaord)