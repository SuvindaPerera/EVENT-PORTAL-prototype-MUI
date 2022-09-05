import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import EventCard from './EventCard'


const UDfeed = () => {

  const eventName = "Birthday Party";

  return (
    <Box flex={12} p={3} backgroundColor="#fff">
      <h3 className="userFeedTitle">
        Event Deatils for {eventName}
      </h3>
      <Box 
        style={{maxHeight: '100vh', overflowY: "auto", overflowX: "hidden"}}
        > 
      <Grid container spacing={1}>
        <Grid item  xs={12} md={12}>
          <EventCard />
        </Grid>
      </Grid> 
      </Box>
    </Box>
  )
}

export default UDfeed
