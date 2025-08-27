import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MUITable() {

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Isim</TableCell>
                        <TableCell>Soyisim</TableCell>
                        <TableCell>Yaş</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell>{row.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <br /><br /><br /><br />



        </>
    )
}

export default MUITable