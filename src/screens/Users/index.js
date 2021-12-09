import { Box, VStack } from "@chakra-ui/layout"

import BreadCrumb from "../../components/BreadCrumb"
import OITable from "../../components/OITable"
import ScreenHeading from "../../components/ScreenHeading";
import WithNavigation from "../../utils/WithNavigation"
import { data } from '../../data'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const columns = [
    {
        name: 'First Name',
        selector: row => row.userId.firstName,
        cell: row => {
            return (
                <Box
                    _hover={{
                        textDecoration: 'underline'
                    }}
                >
                    <Link to={`/user?user_name=${row.userId.firstName}`}>
                        {row.userId.firstName}
                    </Link>
                </Box>
            )
        }
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
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        let list = JSON.parse(JSON.stringify(data))
        const unique = [...new Map(list.map(li => [li.userId.firstName, li])).values()]
        setListUsers(unique)
    }, [])

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
        <OITable data={listUsers} columns={columns} />
    </VStack>
}

export default WithNavigation(Users)