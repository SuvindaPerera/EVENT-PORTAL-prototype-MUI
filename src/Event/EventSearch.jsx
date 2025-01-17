
import React from 'react'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Searchbar from './EventSearchBar'
import Event from './Event'

const EventSearch = () => {
  return (
    <Box>
      <Navbar />
      <Stack>
        <Searchbar />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Event/>
          
          
      </Stack>
      <Footer/>
    </Box>
         
    
  )
}

export default EventSearch
