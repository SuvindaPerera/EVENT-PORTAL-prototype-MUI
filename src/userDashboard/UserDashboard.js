import { Box, Grid, Stack } from '@mui/material'
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
      <Stack direction="row"  justifyContent="space-between"
      >
        <UDleftbar/>
        <UDfeed/>
        <UDrightbar/>
      </Stack>
    </Box>

    <Box
         sx={{display:{xs:"block",md:"none"}}}
      >
        <Stack justifyContent="center">
          <Box width={300} component='div'>
            <UDleftbar/>
          </Box>
          
          <UDfeed/>
          <UDrightbar/>
        </Stack>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </Box>
  )
}

export default UserDashboard
