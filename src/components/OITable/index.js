import { Box } from "@chakra-ui/layout"
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('normal', {
    striped: {
        default: '#CEE0DD'
    },
})


const OITable = ({ data, columns }) => {

    const ExpandedComponent = ({ data }) => (
        <div class="rightbox">
        <div class="rb-container">
          <ul class="rb">
            <li class="rb-item" ng-repeat="itembx">
              <div class="timestamp">
                3rd May 2020<br/> 7:00 PM
              </div>
              <div class="item-title">Chris Serrano posted a photo on your wall.</div>
    
            </li>
            <li class="rb-item" ng-repeat="itembx">
              <div class="timestamp">
                19th May 2020<br/> 3:00 PM
              </div>
              <div class="item-title">Mia Redwood commented on your last post.</div>
    
            </li>
    
            <li class="rb-item" ng-repeat="itembx">
              <div class="timestamp">
                17st June 2020<br/> 7:00 PM
              </div>
              <div class="item-title">Lucas McAlister just send you a message.</div>
    
            </li>
    
          </ul>
    
        </div>
      </div>
    );


    return <Box>
                <DataTable 
                columns={columns} 
                data={data} 
                expandableRows 
                expandableRowsComponent={ExpandedComponent}
                striped 
                theme='normal'
                pagination
            />
    </Box>
}

export default OITable