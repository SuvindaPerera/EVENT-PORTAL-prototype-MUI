import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MessageIcon from '@mui/icons-material/Message';


const Event = () => {
  return (
    <Card sx={{ width: 400, margin: 2, height: '100%', padding: 1.5, border: '1px solid'}}  >
      <CardContent display="flex">
        <Box display="flex" justifyContent="right">
        <Chip
            label="Budget : $100.00 "
            // onClick={handleClick}
            // onDelete={handleDelete}
            deleteIcon={<AttachMoneyIcon />}
           
        />
        </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Photography
        </Typography>
        <Typography variant="h5" component="div">
          Event Name
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Colombo, Srilanka 
        </Typography>
        <Typography variant="body2">
        peface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </Typography>
        <h5>Date</h5>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <h6>Start date here</h6>
            </Grid>
            <Grid item xs={12} md={6}>
            <h6>End date here</h6>
            </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained"
            sx={{  borderRadius:"50px" }}     
        >
            <MessageIcon fontSize="small"/>
            Contact
        </Button>
      </CardActions>
    </Card>
  )
}

export default Event
