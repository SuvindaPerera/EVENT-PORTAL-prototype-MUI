import { AppBar, Box, Toolbar,styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import logo from './logo.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cyan } from '@mui/material/colors';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom';
import logowhitebg from './logoWhitebg.png'





const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor:"lightcyan"
})

const Fullscreen= styled(Box)(({theme})=>({
  display: 'none',
  alignItems: 'center',
  gap:"20px",
  [theme.breakpoints.up("md")]:{
    display: 'flex',
  }
}));

const Mobilescreen = styled(Box)(({theme})=>({
  display: 'flex',
  alignItems: 'center',
  gap:"20px",
  [theme.breakpoints.up("md")]:{
    display: 'none',
  }
}));

const Navbar = () => {

  

  return (
    <AppBar position="static" elevation={0} >
      <StyledToolbar>
    
        <Box padding="40px">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logowhitebg} alt="Logo" height="50px"/>
        </Link>
        </Box>
        <Fullscreen>
          <Box >
              <Button sx={{ color: '#222831' }}>
                <Typography>Home</Typography>
              </Button>
              <Button sx={{ color: '#222831' }} href="./">
                <Typography>Events</Typography>
              </Button>
              <Button sx={{ color: '#222831' }}>
                <Typography>Services</Typography>
              </Button>
              <Button sx={{ color: '#222831' }}>
                <Typography>About Us</Typography>
              </Button>
              <Link to="../Login" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff', borderRadius:"50px", backgroundColor:'#222831' }} variant="contained" ml={1} startIcon={<PersonIcon/>}
              >
                Log In
              </Button>
              </Link>
              
            
          </Box>
        </Fullscreen>
        <Mobilescreen>
          <Accordion
            sx={{
              backgroundColor: "lightcyan",
              color: "#222831",
            }}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: cyan[500] }}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
              color="primary"
              
            >
              <Typography>MENU</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical outlined button group"
                >
                  <Button sx={{ color:"#222831"}} variant="outlined">
                    Home
                  </Button>
                  <Button sx={{ color:"##222831"}} variant="outlined">
                    Events
                  </Button>
                  <Button sx={{ color:"#222831"}} variant="outlined">
                    Services
                  </Button>
                  <Button sx={{ color:"#222831f"}} variant="outlined">
                    About Us
                  </Button>
                  <Link to="../SigninSearching" style={{ textDecoration: 'none' }}>
                  <Button sx={{ color: '#fff' }} variant="contained" ml={1} startIcon={<PersonIcon/>}  >
                    Log In
                  </Button>
                  </Link>
              </ButtonGroup>
            </AccordionDetails>
          </Accordion>
        </Mobilescreen>
          
      </StyledToolbar>
        

    </AppBar>
  )
}

export default Navbar