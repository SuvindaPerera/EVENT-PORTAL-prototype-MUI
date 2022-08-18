import React from 'react'
import { Box, Typography } from '@mui/material'
import SPfeedContent from './SPfeedContent'


const UDfeed = () => {
  return (
    <Box flex={8}>
      <Typography 
        variant="h6"
        display="flex"
        justifyContent={"center"}
        mt={3}
        mb={3}
      >
        Events you interacted
      </Typography>
      <SPfeedContent />
    </Box>
  )
}

export default UDfeed
