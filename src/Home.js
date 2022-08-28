import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Feed from './components/Feed'
import Footer from './components/Footer'
import Navbar from './components/LandingPageNavbar'
import Searchbar from './components/Searchbar'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack>
        <Searchbar />
      </Stack>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      
          <Feed />
          
      </Stack>
      <Footer/>
    </Box>
  )
}

export default Home
