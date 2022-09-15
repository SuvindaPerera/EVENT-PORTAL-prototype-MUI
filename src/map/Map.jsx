import React from 'react'
import { useJsApiLoader, GoogleMap} from '@react-google-maps/api'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import LandingPageNavbar from '../components/LandingPageNavbar'
import GoogleMapContent from './GoogleMapContent'
import { Grid } from '@mui/material';



// const center = { lat: 7.8731, lng: 80.7718}



const Map = () => {

//     const {isLoaded}= useJsApiLoader({
//         googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
//     })
//     if(!isLoaded){
//         return <Skeleton variant="rounded" width={210} height={60} />
//     }


  return (
    <Box 
    sx={{
      height: '100vh', 
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      }}>
        <LandingPageNavbar />
        <Grid container 
         sx={{
          paddingTop: '1vh',
          alignItems: 'center',
          justifyContent: 'center',
          
          }}>
          <Grid item sm={12} md={12}>
            <h3 className="mapTitle">Search the Map</h3>
          </Grid>
          <Grid item sm={12} md={12}>
            <GoogleMapContent />
          </Grid>
        </Grid>
    </Box>
  )
}

export default Map
