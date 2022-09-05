import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useState } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PlaceIcon from '@mui/icons-material/Place';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EventData from '../sampleData/eventDetails.json'



export default function BasicCard() {

  return (
    
    <div>
    {EventData.map((event) => (
    <Box key={event.id}>
    <Card sx={{ 
      minWidth: '100%',
      m: 2,
      height: '100%',
      width: '100%',
      backgroundColor:'#f5f5f5',
      boxShadow: 0,
      borderRadius: '10px' 
      }}  >
      
      <CardContent >
        
          <Box 
          display="flex" 
          justifyContent="flex-end"
          >
          <Chip
              label={event.eventBudget}
              icon={<ShoppingCartIcon />}
          >
          </Chip>
          </Box>
          <Box>
              <h3 className="eventBidCardCategory">
                {event.eventCategory}
              </h3>
              <h2 className="eventBidCardName">
                {event.eventName}
              </h2>
              <h3 className="eventBidCardLocation">
                {event.eventLocation}
              </h3>
              <p className='eventBidCardDescription'>
                {event.eventDescription}
              </p>
          </Box>
      </CardContent>
      <CardActions>
        <Button
              variant="text"
              size="large"
                sx={{  borderRadius:"50px",
               maxHeight:"50px",
               textTransform: 'none',
               justifyContent: 'center',
               color: '#00ADB5',
               border : '2px solid #00ADB5',
              }}
              text-decoration="none"
              endIcon={<MessageIcon color="inherit"/>}
              href=""
              >
                <h3 class='eventCardButton'>
                  Contact
                </h3>
          </Button>
      </CardActions>
      
    </Card>
    </Box>
      ))}
      </div>
  );
}