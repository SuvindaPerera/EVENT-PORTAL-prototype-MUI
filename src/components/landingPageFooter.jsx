import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import { BottomNavigationAction, Box, Button, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FooterLogo from './footerLogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Footer = () => {

   

  return (
    <Box bgcolor={"#1A2027"}  
            p={2}
            color="#fff" 
            display="flex"
            justifyContent="center"
            spacing={2}
            variant="row"
            height='100%'
            >
            {/* <img src={FooterLogo} alt="Logo" height="30px"/>
            <Typography variant="h6">
                Event Portal            
            </Typography> 
            <Typography variant="body2">
            2022@EventPortal
            </Typography> */}
            <Grid container spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
                <Grid item xs={12} sm={4}
                p={2}
                direction="row"
                style={{
                  display: 'flex',
                  justifyContent:"space-evenly",
                 alignItems:"center",
                  spacing: 5
                }}
                >
                  <FacebookIcon fontSize='large'/>
                  <InstagramIcon fontSize='large'/>
                  <TwitterIcon fontSize='large'/>
                </Grid>
                <Grid item xs={12} sm={4}
                  p={2}
                  direction="row"
                  style={{
                    display: 'flex',
                    justifyContent:"center",
                    alignItems:"center",
                    
                  }}
                >
                  <Typography variant="body2" justifyContent='center'>
                  Terms & Conditions | Privacy Policy   © 2022 Event Portal  
                  </Typography>
                  
                </Grid>
                <Grid item xs={12} sm={4}
                p={2}
                direction="row"
                style={{
                  display: 'flex',
                  justifyContent:"center",
                  alignItems:"center",
                  
                }}
                >
                  <Button 
                    variant='contained'
                    style={{
                      borderRadius: '50px',
                    }}
                    href='/Home'
                  >
                    <Typography variant='h5' p={2}>
                      See More <ArrowForwardIosIcon/>
                    </Typography>
                  </Button>
                </Grid>
            </Grid>
            
       
    </Box>

    
  )
}

export default Footer

