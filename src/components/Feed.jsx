import { Box, Typography } from '@mui/material'
import BottomContent from './BottomContent.jsx';
import Cardcomp from "./Cardcomp.jsx";


const Feed = () => {
  return (
    <Box  flex={4} p={2} mt={2} bgcolor="#F5F5F5">
        <Typography variant="h6" mb={2}>
            Browse Service
        </Typography>
      <Cardcomp />
      <BottomContent/>
    </Box>
  )
}

export default Feed
