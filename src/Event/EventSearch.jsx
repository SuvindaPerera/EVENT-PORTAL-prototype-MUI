import { Box } from '@mui/system'
import React from 'react'
import Footer from '../components/Footer'
import EventSearchBar from './EventSearchBar'
import UserNavbar from '../components/UserNavbar'

const Eventsearch = () => {
  return (
    <Box>
        <UserNavbar/>
        <EventSearchBar/>
        <Footer/>
    </Box>
  )
}

export default Eventsearch
