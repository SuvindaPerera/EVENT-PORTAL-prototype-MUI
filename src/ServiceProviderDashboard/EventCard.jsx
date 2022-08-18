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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PlaceIcon from '@mui/icons-material/Place';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}  >
      <CardContent display="flex">
        <Box display="flex" justifyContent="right">
        <Chip
            label="Budget : Negotiable "
            // onClick={handleClick}
            // onDelete={handleDelete}
            deleteIcon={<AttachMoneyIcon />}
           
        />
        </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Photography
        </Typography>
        <Typography variant="h5" component="div">
          Birthday Party photographer needed!
        </Typography>
        <Typography sx={{ mb: 1.5 , mt:1.5}} color="text.secondary">
            <PlaceIcon fontSize='small' />
         Colombo, Srilanka 
        </Typography>
        <Typography variant="body2">
        Jano's Birthday Party<br></br>
            A warm, relaxed and confident greeting puts people at ease right away. a personalized compliment to make guests feel special and you're already winning.  
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
            <ThumbUpIcon fontSize="small"/>
            Accept the Event
        </Button>
      </CardActions>
    </Card>
  );
}