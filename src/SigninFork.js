import { Stack, Typography, Button } from '@mui/material'
import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const Signin = () => {
  return (
    <Box bgcolor="lightcyan" minHeight='100vh' >
    <Stack justifyContent="center" alignItems="center" >
      <Navbar/>
         <Typography mb={5} variant="h6"  mt={15}> 
            SIGN IN
         </Typography>
         <Link to="../SigninSearching" style={{ textDecoration: 'none' }}>
            <Button size= "large" variant="contained" endIcon={<SearchSharpIcon />}
              sx={{  borderRadius:"50px" }}
            >
              I am Searching a Service
            </Button>
          </Link>
        <Typography mt={2.5}>
          <Link to="../SigninService" style={{ textDecoration: 'none' }}>
            <Button size= "large" variant="contained" endIcon={<SettingsSharpIcon />}
              sx={{  borderRadius:"50px" }}
            >
              I/ We provide a service 
            </Button>
          </Link>                  
        </Typography>
            <Typography mt={5}>
              Already Registered? 
              <Link to="../Login" style={{ textDecoration: 'none' }}>
              <Button href="#text-buttons">Log in</Button>
              </Link>
        </Typography>
      
    </Stack>
    {/* <Box mt={5}>
    <Footer/>
    </Box> */}
    
    </Box>
    
  )
}

export default Signin
