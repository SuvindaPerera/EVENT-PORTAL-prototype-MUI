import { Stack, Typography, Button, Grid, Card, CardMedia } from '@mui/material'
import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Navbar from './components/LandingPageNavbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { Box, rgbToHex } from '@mui/system';
import Paper from '@mui/material/Paper';
import ServiceImg from './media/searchService.jpg'
import ProvideImg from './media/provideService2.jpg'
import searchVid from './media/video/searching.mp4'

const Signin = () => {
  return (
    <div>
    <Box bgcolor="#f5f5f5" minHeight='100vh' 
    >
      <Navbar/>
    <Stack 
    justifyContent="center" 
    alignItems="center" 
    >
        <h3 className="loginTitle"
        >
            Sign In
         </h3>

         <Grid 
         container
         direction="row"
         justifyContent="space-between"
         alignItems="center"
         spacing={2}
         lg padding={5}
         >
          <Grid item alignItems="center" sm={12} md={6} >
            <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#000',
              height: '50vh',
              backgroundImage:`url(${ServiceImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            >
            <Link to="../SigninSearching" style={{ textDecoration: 'none' }}>
                <Box backgroundColor= 'rgb(26, 32, 39,0.8)' borderRadius={50} >
                  <Button
                    variant="text"
                    size="large"
                      sx={{  borderRadius:"50px",
                    maxHeight:"50px",
                    textTransform: 'none',
                    justifyContent: 'center',
                    color: '#00ADB5',
                    border : '2px solid #00ADB5',
                    }}
                    text-decoration="none"
                    endIcon={<SearchSharpIcon color="inherit"/>}
                    >
                      <h3 class='bottomButtons'>
                        I am Searching a Service
                      </h3>
                  </Button>
                </Box>
              </Link>

              </Box> 
              
          </Grid>
          <Grid item alignItems="center" sm={12} md={6}>
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#000',
              height: '50vh',
              backgroundImage:`url(${ProvideImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            >
            <Typography>
              <Link to="../SigninService" style={{ textDecoration: 'none' }}>
                <Box backgroundColor= 'rgb(26, 32, 39,0.8)' borderRadius={50} >
                    <Button
                      variant="text"
                      size="large"
                        sx={{  borderRadius:"50px",
                      maxHeight:"50px",
                      textTransform: 'none',
                      justifyContent: 'center',
                      color: '#00ADB5',
                      border : '2px solid #00ADB5',
                      }}
                      text-decoration="none"
                      endIcon={<SettingsSharpIcon color="inherit"/>}
                      >
                        <h3 class='bottomButtons'>
                          I / We provide a Service
                        </h3>
                    </Button>
                  </Box>
              </Link>                  
            </Typography>
            </Box>
          </Grid>
        </Grid>

        
        <h3 class="signinforkSignined">
          Already Registered? 
          <Button href="../Login">
            <h3 class="signinforkLogin"  >
              Log In
            </h3>
        </Button>           
        </h3>
              
        
      
    </Stack>
    </Box>
      <Footer/>
    </div>
    
  )
}

export default Signin
