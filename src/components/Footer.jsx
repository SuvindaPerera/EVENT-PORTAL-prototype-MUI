import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import { BottomNavigationAction, Box, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FooterLogo from './footerLogo.png';

const Footer = () => {

   

  return (
    <Box bgcolor={"#1A2027"}  
            p={2}
            color="#fff" 
            display="flex"
            justifyContent="center"
            spacing={2}
            variant="row"
            >
            <img src={FooterLogo} alt="Logo" height="30px"/>
            <Typography variant="h6">
                Event Portal            
            </Typography> 
            <Typography variant="body2">
            2022@EventPortal
            </Typography>
            
       
    </Box>

    
  )
}

export default Footer

