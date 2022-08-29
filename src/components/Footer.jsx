import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import { BottomNavigationAction, Box, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FooterLogo from './footerLogo.png';
import BottomContent from './BottomContent'

const Footer = () => {

   

  return (
    <Box bgcolor={"#1A2027"}>
      <Stack   
              p={2}
              color="#fff" 
              display="flex"
              justifyContent="space-evenly"
              spacing={2}
              variant="row"
              >
              <Box>
                <BottomContent/>
              </Box>
      </Stack>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
          <img src={FooterLogo} alt="Logo" height="30px"/>
        </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          bgcolor: '#1A2027',
          color: '#fff',
          p: 2,
        }}
      >
        
        <Typography variant="body2" align="center">
          Event Portal © 2022. All rights reserved.
        </Typography>
      </Box>
    </Box>

    
  )
}

export default Footer

