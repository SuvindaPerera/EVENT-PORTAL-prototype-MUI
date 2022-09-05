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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventBidData from '../sampleData/eventBidDetails.json'


export default function BasicCard() {
  return (

    <div>
    {EventBidData.map((event) => (
      <Box key={event.id}>
        <Card sx={{ 
          minWidth: '100%',
          m: 1,
          height: '100%',
          width: '100%',
          backgroundColor:'#f5f5f5',
          boxShadow: 0,
          borderRadius: '10px' 
          }}  >
          <CardContent>
            <Box 
            display="flex" 
            justifyContent="flex-end"
            >
            <Chip
                label={event.SPBudget}
                icon={<ShoppingCartIcon />}
            >
            </Chip>
            </Box>
            <h3 className="eventBidCardCategory">
              {event.SPCategory}
            </h3>
            <h2 className="eventBidCardName">
              {event.SPName}
            </h2>
            <h3 className="eventBidCardLocation">
              {event.SPLocation}
            </h3>
            <p className='eventBidCardDescription'>
              {event.SPDescription} 
            </p>
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