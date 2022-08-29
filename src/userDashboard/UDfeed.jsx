import React from 'react'
import { Box, Typography } from '@mui/material'
import FeedLeftBar from './FeedLeftBar'
import UDleftbar from './UDleftbar'


const UDfeed = () => {
  return (
    
    <Box flex={10}>
      <Typography 
        variant="h6"
        display="flex"
        justifyContent={"center"}
        mt={3}
        mb={3}
      >
        Service Providers who got in touch with
      </Typography>
      
      <FeedLeftBar />
    </Box>
  )
}

export default UDfeed
