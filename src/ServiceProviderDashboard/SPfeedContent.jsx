import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import EventCard from './EventCard';

const SPFeedContent = () => {


  
  return (
   
    <div>
      <Box  display={"flex"}  flex={10} p={3} >
        <EventCard />
      </Box>
    </div>
    
  )
}

export default SPFeedContent
