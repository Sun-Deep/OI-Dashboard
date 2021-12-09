import { Flex, Heading, Text, VStack } from "@chakra-ui/layout"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from '@nivo/bar'
import { ResponsiveLine } from '@nivo/line'
import Icon from "@chakra-ui/icon"
import { IoMdClock, IoMdDocument } from 'react-icons/io'

import BreadCrumb from "../../components/BreadCrumb"
import ScreenHeading from "../../components/ScreenHeading";
import WithNavigation from "../../utils/WithNavigation"
import { data as piechart } from "../../mockup/piechart";
import { data as bar } from "../../mockup/bar"
import { data as line } from "../../mockup/line"
import OICard from "../../components/OICard";

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
        <Flex
        gridGap={5}
        mt={10}
        flexDir={['column', 'column', 'row']}
      >

        <OICard h='300px' w={['auto', 'auto', '40%']}>
          <Text
            fontWeight='bold'
          >
              Page View
          </Text>
          <ResponsivePie
            data={piechart}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor='#333333'
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: 'ruby'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'c'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'go'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'python'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'scala'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'lisp'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'elixir'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'javascript'
                },
                id: 'lines'
              }
            ]}
          />
        </OICard>

        <OICard h='300px' w={['auto', 'auto', '60%']}>
          <Text
            fontWeight='bold'
          >
            Time Spent
          </Text>
          <ResponsiveBar
        data={bar}
        keys={[ 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            }
        ]}
        fill={[
            {
                match: {
                    id: 'donut'
                },
                id: 'dots'
            },
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
        </OICard>

      </Flex>

      <Flex
        gridGap={5}
        mt={10}
        flexDir={['column', 'column', 'row']}
      >

        <OICard h='300px' w={['auto', 'auto', '70%']}>
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
    </VStack>
}

export default WithNavigation(MainDashbaord)