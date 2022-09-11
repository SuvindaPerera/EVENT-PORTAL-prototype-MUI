import React from 'react'
import { useJsApiLoader, GoogleMap} from '@react-google-maps/api'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';



const center = { lat: 7.8731, lng: 80.7718}



const Map = () => {

    const {isLoaded}= useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    if(!isLoaded){
        return <Skeleton variant="rounded" width={210} height={60} />
    }


  return (
    <Box sx={{height: '100vh', width: '100vw'}}>
        <GoogleMap 
        center={center} 
        zoom={8} 
        mapContainerStyle={{width: '100%', height: '100%'}}
        >
        </GoogleMap>
    </Box>
  )
}

export default Map
