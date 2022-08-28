import { Box, Button, Stack, Typography } from '@mui/material'
import BottomContent from './BottomContent.jsx';
import Cardcomp from "./Cardcomp.jsx";


const Feed = () => {
  return (
    <Box  flex={4} p={2} mt={2} bgcolor="#F5F5F5">
        <Typography variant="h6" mb={2}>
            Browse Service
        </Typography>
        
        <Box sx={{display:{xs:"none",md:"block"}}}>
        <Box display="flex" justifyContent="space-evenly" mt={5}>
          <Cardcomp />
          <Cardcomp />
          <Cardcomp />
          <Cardcomp />
        </Box>
        <Box display="flex" justifyContent="space-evenly" mt={5}>
          <Cardcomp />
          <Cardcomp />
          <Cardcomp />
          <Cardcomp />
        </Box>
        </Box>
        <Box sx={{display:{xs:"block",md:"none"}}}>
        <Stack  spacing={3}  mt={5} justifyContent="center">
          <Cardcomp />
          <Cardcomp />
          <Cardcomp />
          <Cardcomp />
        </Stack>
        </Box>
      <Box display='flex' justifyContent='center'mt={5} >
        <Button variant="contained"
          size="large"
          sx={{  borderRadius:"50px" }}
        >
          View More
        </Button>
      </Box>
      
      <BottomContent/>
    </Box>
  )
}

export default Feed
