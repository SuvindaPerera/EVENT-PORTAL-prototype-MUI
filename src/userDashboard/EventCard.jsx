import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MessageIcon from '@mui/icons-material/Message';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }} >
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
          Jet Photography
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Colombo, Srilanka 
        </Typography>
        <Typography variant="body2">
        Do you have a photography business and are looking to move to the next level? 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained"
            sx={{  borderRadius:"50px" }}
            
        >
            <MessageIcon fontSize="small"/>
            Contact
        </Button>
        <Button size="small" variant="contained"
            sx={{  borderRadius:"50px" }}
        >
            View Profile
        </Button>
      </CardActions>
    </Card>
  );
}