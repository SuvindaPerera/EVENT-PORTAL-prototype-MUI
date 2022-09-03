import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Cardcomp from '../components/Cardcomp'

const UDrightbar = () => {
  return (
    <Box>
      <Box bgcolor="#F5F5F5" flex={2} p={4} 
        sx={{display:{xs:"none",md:"block"}}}
      >
        <Typography  variant="H6">
          Suggested Services
        </Typography>
        <Stack spacing={3} mt={2}>
          <Cardcomp/>
        </Stack>
      </Box>

      <Box bgcolor="#F5F5F5" flex={12} p={4} 
        sx={{display:{xs:"block",md:"none"}}}
      >
        <Typography  variant="H6">
          Suggested Services
        </Typography>
        <Stack spacing={3} mt={2}>
          <Cardcomp/>
        </Stack>

      </Box>
    </Box>
  )
}

export default UDrightbar

