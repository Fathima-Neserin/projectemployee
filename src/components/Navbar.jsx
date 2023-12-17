import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Employee App</Typography>
          <Button><Link  to={'/'} style={{color:'white',textDecoration:'none'}}>Home</Link></Button>
          <Button><Link to={'/emp'} style={{color:'white',textDecoration:'none'}}>Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
  

export default Navbar