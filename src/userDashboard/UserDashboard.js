import { Box, Stack } from '@mui/material'
import React from 'react'
import UDleftbar from './UDleftbar'
import UDfeed from './UDfeed'
import UDrightbar from './UDrightbar'
import UserNavbar from '../components/UserNavbar'
import Footer from '../components/Footer'


const UserDashboard = () => {
  return (
    <Box >
      <UserNavbar/>
      <Box
         sx={{display:{xs:"none",md:"block"}}}
      >
      <Stack direction="row" spacing={2} justifyContent="space-between"
      >
        <UDleftbar/>
        <UDfeed/>
        <UDrightbar/>
      </Stack>
    </Box>

    <Box
         sx={{display:{xs:"block",md:"none"}}}
      >
        <Stack justifyContent="center" spacing={3}>
          <Box maxWidth="100%">
            <UDleftbar/>
          </Box>
          
          <UDfeed/>
          <UDrightbar/>
        </Stack>
      </Box>
      <Footer/>
    </Box>
  )
}

export default UserDashboard
