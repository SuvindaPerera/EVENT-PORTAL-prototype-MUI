import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import EventCard from './EventCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const FeedLeftBar = () => {

  

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   
      <Box bgcolor={"lightcyan"}  display={"flex"}  height="100vh" flex={10} p={3}>
        
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="UserEvents"
        
        sx={{ borderRight: 2, borderColor: 'divider', bgcolor: 'lightcyan', color: '#fff',minWidth: "100px" }}   
      >
        <Tab label="Contacted" {...a11yProps(0)} />
        <Tab label="Not responded" {...a11yProps(1)} />
        <Tab label="Finished" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <EventCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EventCard />
        <EventCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EventCard />
        <EventCard />
        <EventCard />
      </TabPanel>
    </Box>
    
  )
}

export default FeedLeftBar
