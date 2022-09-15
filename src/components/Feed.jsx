import { Box, Button, Stack, Typography } from '@mui/material'
import BottomContent from './BottomContent.jsx';
import Cardcomp from "./Cardcomp.jsx";


const Feed = () => {
  return (
    <Box p={2} mt={2} bgcolor="#F5F5F5" width="100%">
        <h3 class="BrowseTitle">
          Browse Services
        </h3>
        
        <Box sx={{display:{xs:"none",md:"block"}}}>
        <Box display="flex"  padding={5}>
          <Cardcomp />
        </Box>
        </Box>
      <Box display='flex' justifyContent='center'mt={5} >
        <Button variant="outlined"
          size="large"
          sx={{  borderRadius:"50px",
          maxHeight:"50px",
          textTransform: 'none',
          color: '#00ADB5',
          border : '2px solid #00ADB5',
         }}
         >
         <h3 class='viewMoreButton'
          style={{ textDecoration: 'none' }}
         >View More...</h3> 
        </Button>
      </Box>
    
    </Box>
  )
}

export default Feed
