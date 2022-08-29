import * as React from 'react';
import {Card, Grid, Stack} from '@mui/material';
import { Box } from '@mui/system'
import { Button, Divider, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



const UDleftbar = () => {
  return (
    <Stack p={4}>
      <Box>
        <h4>Event Details</h4>
      </Box>
      <Box><TextField id="search" 
      label="Search" 
      variant="outlined" 
      InputProps={{endAdornment: 
        <Button
        backgroundColor="#00ADB5"        
            sx={{ borderRadius:"50px" }}
        >
            <SearchIcon/>
        </Button>}}
      />
      </Box>

      {/* <Card>
        <Stack>
          <Button 
          
          endIcon={<SearchIcon />}
                  sx={{  borderRadius:"50px" }}
          >              
          </Button>
          <h4>Event Name</h4>
          <Button endIcon={<SearchIcon />}
                  sx={{  borderRadius:"50px" }}
          >              
          </Button> 
        </Stack>
      </Card>             */}
        <Grid container
         padding={1}
         backgroundColor='#5f5f5f5f'
         >
          <Grid item md={8}>
              <h3 class=''>Event</h3>
          </Grid>
          <Grid item md={4}>
            <Stack
            direction="row"
            justifyContent="right"
            >
            <SearchIcon />
            <SearchIcon />
            </Stack>
          </Grid>
        </Grid>
    </Stack>
  )
}

export default UDleftbar
