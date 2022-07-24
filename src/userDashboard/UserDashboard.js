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
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <UDleftbar/>
        <UDfeed/>
        <UDrightbar/>
      </Stack>
      <Footer/>
    </Box>
  )
}

export default UserDashboard
