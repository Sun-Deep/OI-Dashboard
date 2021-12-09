import { Box, UnorderedList, ListItem, Text } from "@chakra-ui/layout"
import { useEffect, useState } from "react";
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('normal', {
    striped: {
        default: '#CEE0DD'
    },
})


const OITable = ({ data, columns }) => {

  const [innerData, setInnerData] = useState({})

  // const expandedData = () => {
  //   data.forEach(item => {
  //     let key = item.userId.firstName
  //     if(innerData[key]){
  //       setInnerData(value => ({
  //         ...value,
  //         [key]: [...value[key], item]
  //       }))
  //     }else{
  //       setInnerData(value => ({
  //         ...value,
  //         [key]: [item]
  //       }))
  //     }
  //   })
  // }

  // useEffect(() => {
  //   expandedData()
  // }, [])


    // const ExpandedComponent = ({ data }) => (
    //     <Box className="rightbox">
    //     <Box className="rb-container">
    //       <UnorderedList className="rb">
    //         {
    //           innerData && 
    //           innerData[data.userId.firstName].length > 0 &&
    //           innerData[data.userId.firstName].map(item => (
    //             <ListItem className="rb-item" ng-repeat="itembx">
    //               <Box className="timestamp">
    //                 <Text>Time spent {item.timespent} sec</Text>
    //                 <Text>{item.browser}</Text>
    //                 <Text as='small' color='gray'>Page {item.page}</Text>
    //                 <Text color='gray'>{item.datetime}</Text>
    //               </Box>
    //             </ListItem>
    //           ))
    //         }
            
    //       </UnorderedList>
    //     </Box>
    //   </Box>
    // );


    return <Box>
                <DataTable 
                columns={columns} 
                data={data} 
                // expandableRows 
                // expandableRowsComponent={ExpandedComponent}
                striped 
                theme='normal'
                pagination
            />
    </Box>
}

export default OITable