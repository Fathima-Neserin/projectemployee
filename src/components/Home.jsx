import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Home = () => {
    const [dataset,setData]=useState([]);
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
              console.log(data.data);
              setData(data.data);
         })
            
        
        })
    
  return (
    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }
      
    //   const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];
      
    
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataset.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }


export default Home