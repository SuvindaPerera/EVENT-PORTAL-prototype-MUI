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





const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor:"#222831"
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
    <AppBar position="sticky" >
      <StyledToolbar>
    
        <Box padding="20px">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Logo" height="50px"/>
        </Link>
        </Box>
        <Fullscreen>
          <Box>
              <Button sx={{ color: '#fff' }}>
                <Typography>Home</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>Events</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>Services</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>About Us</Typography>
            </Button>
              
            
          </Box>
        </Fullscreen>
        <Mobilescreen>
          <Accordion
            sx={{
              backgroundColor: "#222831",
              color: "white",
            }}
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
                  <Button sx={{ color:"#fff"}} variant="outlined">
                    Home
                  </Button>
                  <Button sx={{ color:"#fff"}} variant="outlined">
                    Events
                  </Button>
                  <Button sx={{ color:"#fff"}} variant="outlined">
                    Services
                  </Button>
                  <Button sx={{ color:"#fff"}} variant="outlined">
                    About Us
                  </Button>
              </ButtonGroup>
            </AccordionDetails>
          </Accordion>
        </Mobilescreen>
          
      </StyledToolbar>
        

    </AppBar>
  )
}

export default Navbar