import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import LandingPageNavbar from './components/LandingPageNavbar'
import Cardcomp from './components/Cardcomp'
import landingBG from './media/landingPagebg.png'
import LandingPageFooter from './components/landingPageFooter'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlaceIcon from '@mui/icons-material/Place';


const LandingPage = () => {
  return (
    <Box bgcolor="lightcyan">
    <LandingPageNavbar topalignment='fixed'/>
    <Stack  padding={5}>
        <Typography variant='h6'>
          <PlaceIcon/>Nearby place : <b>Badulla</b>
        </Typography>      
        <Typography variant="h3" fontStyle={"bold"} fontFamily="Poppins" >
            <b>WEDDINGS, EXPOS, SEMINARS AND MORE...</b>
        </Typography>
        <Typography variant="h6">
          Showing : <b>12.735</b> results
        </Typography>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12} md={6}> 
            <Box display="flex" justifyContent="space-evenly" mt={5} spacing={5}
             style={{ display: "flex", alignItems: "center", spacing:"20px" }}>
              <Cardcomp />
              <Cardcomp />
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt={5} spacing={5}
             style={{ display: "flex", alignItems: "center", spacing:"20px" }}>
              <Cardcomp />
              <Cardcomp />
            </Box>
            <Box display="flex" justifyContent="space-evenly" mt={5} spacing={5}
             style={{ display: "flex", alignItems: "center", spacing:"20px" }}>
              <Button variant='contained'p={1}
                style={{
                  borderRadius: '50px',
                }}
              >
                Load More <ExpandMoreIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}> 
            <Box display="flex" justifyContent="right" mt={5} spacing={5}>
              <img src={landingBG} alt="landing page bg" width="70%" height="100%"
              
              />

            </Box>
          </Grid>
          <Box display="flex" width="100%">
          <Grid item xs={12} md={12}>
            <LandingPageFooter />
          </Grid>
          </Box>
        </Grid>      
    </Stack>
    </Box>
  )
}

export default LandingPage
