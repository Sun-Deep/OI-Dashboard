import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/layout"

import BreadCrumb from "../../components/BreadCrumb"
import ScreenHeading from "../../components/ScreenHeading";
import WithNavigation from "../../utils/WithNavigation"
import { data } from '../../data'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OICard from "../../components/OICard";
import { ResponsiveLine } from '@nivo/line'
import { IoMdClock, IoMdDocument } from 'react-icons/io'
import Icon from "@chakra-ui/icon";
import { data as line } from "../../mockup/line"
import OITable from "../../components/OITable";
import { useQuery } from "../../hooks/useQuery";

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
                    <Link to={`/user?${row.userId.firstName}`}>
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
    const [IP, setIP] = useState([])
    const [selectedIP, setSelectedIP] = useState('')

    let query = useQuery()

    useEffect(() => {
        let userName = query.get('user_name')
        let ip = [...new Set(data.map(d => {
            if(d['userId']['firstName'] === userName){
                console.log(d)
                return d['ip']
            }
        }))].filter(ip => ip !== undefined)
        setIP(ip)

        setListUsers(() => {
            return data.filter(d => d['userId']['firstName'] === userName)
         })
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
        <ScreenHeading title='User Detail' />
       <Flex
        gridGap={3}
        borderBottom='1px solid #e1e1e1'
        p={2}
        flexWrap='wrap'
       >
           {
               IP.map(ip => <Text 
                    key={ip}
                    cursor='pointer'
                    onClick={() => setSelectedIP(ip)}
                    color={selectedIP === ip ? 'primary' : 'black'}
                >
                    {ip}
                </Text>)
           }
       </Flex>
    
       <Flex
        gridGap={5}
        mt={10}
        flexDir={['column', 'column', 'column', 'row']}
        mb={10}
      >

        <OICard h='300px' w={['auto', 'auto', 'auto', '70%']}>
          <Text
            fontWeight='bold'
          >
              Page View / Time Spent
          </Text>
          <ResponsiveLine
            data={line}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
    />
        </OICard>

        <VStack
            spacing={2}
            alignSelf='center'
        >
            <OICard 
            d='flex' 
            justifyContent='center' 
            alignItems='center'
            gridGap={2} 
            h='100px' 
            w='230px'
        >
         <Flex
                bgColor='#AEEBE1'
                h='50px'
                w='50px'
                borderRadius='50%'
                justifyContent='center'
                alignItems='center'
                boxShadow='lg'
            >
                <Icon color='primary' as={IoMdDocument} />
                
            </Flex>
            <VStack>
                    <Heading>1234</Heading>
                    <Text color='gray'>Total view</Text>
                </VStack>
         </OICard>

         <OICard 
            d='flex' 
            justifyContent='center' 
            alignItems='center'
            gridGap={2} 
            h='100px' 
            w='230px'
        >
         <Flex
                bgColor='#D3D3F5'
                h='50px'
                w='50px'
                borderRadius='50%'
                justifyContent='center'
                alignItems='center'
                boxShadow='lg'
            >
                <Icon color='#5D5FEF' as={IoMdClock} />
                
            </Flex>
            <VStack>
                    <Heading>1234</Heading>
                    <Text color='gray'>Total time spent</Text>
                </VStack>
         </OICard>
        </VStack>
      </Flex>
      <OITable data={listUsers} columns={columns} />
    </VStack>
}

export default WithNavigation(Users)