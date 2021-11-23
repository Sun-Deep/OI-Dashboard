import { VStack } from "@chakra-ui/layout"
import BreadCrumb from "../../components/BreadCrumb"
import OITable from "../../components/OITable"
import ScreenHeading from "../../components/ScreenHeading";
import WithNavigation from "../../utils/WithNavigation"


const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Director',
        selector: row => row.director,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];


const data = [
    {
        title: 'Sandeep',
        director: 'Pokhrel',
        year: 2021
    },
    {
        title: 'Sandeep',
        director: 'Pokhrel',
        year: 2021
    },
    {
        title: 'Sandeep',
        director: 'Pokhrel',
        year: 2021
    }
]

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
                    active: false
                },
                {
                    title: 'User',
                    link: '/user',
                    active: true
                }
            ]}
        />
        <ScreenHeading title='OI Deck Data' />
        <OITable data={data} columns={columns} />
    </VStack>
}

export default WithNavigation(MainDashbaord)