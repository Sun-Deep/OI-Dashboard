import { VStack } from "@chakra-ui/layout"
import BreadCrumb from "../../components/BreadCrumb"
import OITable from "../../components/OITable"
import ScreenHeading from "../../components/ScreenHeading";
import WithNavigation from "../../utils/WithNavigation"
import { data } from '../../data'


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


const Users = () => {
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
                    active: false
                },
                {
                    title: 'User',
                    link: '/users',
                    active: true
                }
            ]}
        />
        <ScreenHeading title='OI Deck Data' />
        <OITable data={data} columns={columns} />
    </VStack>
}

export default WithNavigation(Users)