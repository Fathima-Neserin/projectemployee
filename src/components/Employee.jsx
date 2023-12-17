import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const Employee = () => {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    
      <TextField
        required
        id="outlined-required"
        label="Name"
        defaultValue="Aman"
      /><br></br>
      <TextField
        required
        id="outlined-required"
        label="Designation"
        defaultValue="Certified Marketing Accountant"
      /><br></br>
      <TextField
        required
        id="outlined-required"
        label="Location"
        defaultValue="Calicut"
      /><br></br>
      <TextField
        required
        id="outlined-required"
        label="Salary"
        type='number'
        
      /><br></br>
      <Button variant="outlined">Submit</Button>
  </Box>
);
}
  

export default Employee