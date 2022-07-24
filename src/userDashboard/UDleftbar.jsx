import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box } from '@mui/system';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button, Divider, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box bgcolor={"#222831"} flex={2} p={2} 
    sx={{display:{xs:"none",md:"block"}}}
    >
      <Typography color="#fff" variant="H6" 
      
      >
        My Events
      </Typography>
      <Divider  color="white" />
      <Box
        sx={{
          
          maxWidth: '100%',
        }}
        mb={3}
        mt={3}
        backgroundColor={"white"}
      >
        <TextField fullWidth label="Search Your Events Here.." id="searchEvent" />
      </Box>
      <Button sx={{ color: '#fff', borderRadius:"50px" }} variant="contained" mb={3} startIcon={<SearchIcon/>}
              >
                Search
      </Button>
     <Box  mt={3}>   
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#222831', color: '#fff' }}
     
      component="nav"
      aria-labelledby="myevents-list"
      // subheader={
      //   <ListSubheader component="div" id="myevents-list" backgroundColor="lightcyan">
      //     My Events
      //   </ListSubheader>
      // }
    >
      <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon style={{ color: 'white' }}/>
        </ListItemIcon>
        <ListItemText primary="All Events" />
      </ListItemButton>
      
      <ListItemButton>
        <ListItemIcon>
          <EventAvailableIcon style={{ color: 'white' }}/>
        </ListItemIcon>
        <ListItemText primary="Completed Events" />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccessAlarmIcon style={{ color: 'white' }}/>
        </ListItemIcon>
        <ListItemText primary="Current Events" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding 
        >
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Jano's Birthday" secondary="Jan 2, 2022"  />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Welcome party" secondary="Jan 2, 2022"  />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon style={{ color: 'white' }}/>
        </ListItemIcon>
        <ListItemText primary="Create an Event" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DeleteIcon style={{ color: 'white' }}/>
        </ListItemIcon>
        <ListItemText primary="Delete an Event" />
      </ListItemButton>
    </List>
    </Box>
    </Box>
  );
}