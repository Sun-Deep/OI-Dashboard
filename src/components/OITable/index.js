import { Box } from "@chakra-ui/layout"
import DataTable, { createTheme } from 'react-data-table-component';

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

createTheme('normal', {
    striped: {
        default: '#CEE0DD'
    },
})


const OITable = () => {

    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;


    return <Box>
                <DataTable 
                columns={columns} 
                data={data} 
                expandableRows 
                expandableRowsComponent={ExpandedComponent}
                striped 
                theme='normal'
                pagination
            />;
    </Box>
}

export default OITable