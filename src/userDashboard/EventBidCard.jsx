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

const budget = '100';

export default function BasicCard() {
  return (
    <Card sx={{ 
      minWidth: '100%',
      p: 2, 
      height: '100%',
      width: '100%',
      backgroundColor:'#f2f2f2',
      boxShadow: 0, 
      }}  >
      <CardContent>
        <Box 
        display="flex" 
        justifyContent="flex-end"
        >
        <Chip
            label="Budget : "
            icon={<ShoppingCartIcon />}
        >
        </Chip>
        </Box>
        <h3 className="eventBidCardCategory">
          Photography
        </h3>
        <h2 className="eventBidCardName">
          Kusal Photography
        </h2>
        <h3 className="eventBidCardLocation">
          Colombo, Srilanka
        </h3>
        <p className='eventBidCardDescription'>
          Do you have a photography business and are looking to move to the next level? 
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
  );
}