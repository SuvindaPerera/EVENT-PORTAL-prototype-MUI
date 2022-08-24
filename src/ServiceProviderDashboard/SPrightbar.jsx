import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Cardcomp from '../components/Cardcomp'
import EventCard from './EventCard'

const UDrightbar = () => {
  return (
    <Box>
      <Box bgcolor="#F5F5F5" flex={2} p={4} maxWidth='300px'
        sx={{display:{xs:"none",md:"block"}}}
      >
        <Typography  variant="H6">
        Events you my interested in
        </Typography>
        <Stack spacing={3} mt={2}>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </Stack>
      </Box>

      <Box bgcolor="#F5F5F5" flex={12} p={4} 
        sx={{display:{xs:"block",md:"none"}}}
      >
        <Typography  variant="H6">
          Events you my interested in
        </Typography>
        <Stack spacing={3} mt={2}>
            <EventCard/>
          <EventCard/>
          <EventCard/>
        </Stack>

      </Box>
    </Box>
  )
}

export default UDrightbar
