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
import ListItem from '@mui/material/ListItem';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react'
import UpdateIcon from '@mui/icons-material/Update';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Events from '../sampleData/events.json'


export default function NestedList() {

  // USER EVENT LIST----------------------------
  const eventName = "Birthday Party";

  //BUTTON SUBMIT SEARCH ----------------------------
  const [search,setSearch] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(search);
  }
  
  //SEARCH FILTER-----------------------------------
  const [searchFilter,setSearchFilter] = useState("");
  

  return (
    <div className="userDashboardEventContainer">
      <Box 
        height='100vh'
        width={300}
        bgcolor={"#30353D"} 
        p={2} 
        // sx={{display:{xs:"none",md:"block"}}}
       >
      <h3 className="userDashboardTitle">
        My Bidded Events
      </h3>
      <Divider  variant="middle" color="white" />
      <Box
        sx={{
          maxWidth: '100%',
        }}
        mt={2}
        mb={2}
        backgroundColor='#30353D'
        >

          {/* EVENT SEARCH BAR---------------------------------------------------- */}
        <TextField 
          onChange={(e) => setSearchFilter(e.target.value)}
          className="searchUserBar"
          fullWidth 
          placeholder='Search bidded events ' 
          id="searchEvent"
          sx={{
            borderRadius: '50px',
            textAlign: 'center',
          }}  
        />
       </Box>

          {/* DIVIDER---------------------------------------------------- */}
        <Divider variant="middle" color="white"/>

        <p className="userEventSubheading">Events You have Bidded</p> 
        <Box 
        mt={3}
        style={{maxHeight: '30vh', overflow: 'auto'}}
        >
           {/* USER EVENT LIST---------------------------------------------------- */}
          <List>
            {Events.filter((eve)=>{
              if(searchFilter === ""){
                return eve
              }else if(eve.eventName.toLowerCase().includes(searchFilter.toLowerCase())){
                return eve
              }
            }).map((event) => (
              <ListItem key={event.id} disablePadding>
                <ListItemButton>
                  <p className="userEventListName">{event.eventName}</p>
                </ListItemButton>
                <ListItemButton sx={{ alignItems:'flex-end' }} >
                  <div className="userEventCloseIcon">
                    <ClearIcon color="error" />
                  </div>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <div
          display="flex"
          justifyContent= 'flex-end'
        >

        <Divider color="white" variant="middle" sx={{marginTop: 3}}/>
          {/* CREATE NEW EVENT BUTTON---------------------------------------------------- */}
          <Button
              fullWidth="true"
              variant="contained"
              size="medium"
                sx={{  borderRadius:"50px",
               maxHeight:"50px",
               textTransform: 'none',
               justifyContent: 'center',
               color: '#fff',
               backgroundColor: '#00ADB5',
               marginTop: '20px',
                "&:hover": {
                  backgroundColor: "#1A2027",
                  border : '2px solid #00ADB5',
                }
              }}
              text-decoration="none"
              href="/ServiceProviderDetails"
              endIcon={<UpdateIcon color="inherit"/>}
              >
                <h3 className="userCreateEventButton">
                  Update my Page
                </h3>
          </Button>

          {/* SEACRH FOR NEW EVENT BUTTON---------------------------------------------------- */}
          <Button
              fullWidth="true"
              variant="contained"
              size="medium"
                sx={{  borderRadius:"50px",
               maxHeight:"50px",
               textTransform: 'none',
               justifyContent: 'center',
               color: '#fff',
               backgroundColor: '#00ADB5',
               marginTop: '20px',
                "&:hover": {
                  backgroundColor: "#1A2027",
                  border : '2px solid #00ADB5',
                }
              }}
              text-decoration="none"
              href="/Home"
              endIcon={<ManageSearchIcon color="inherit"/>}
              >
                <h3 className="userCreateEventButton">
                  Search for New Events
                </h3>
          </Button>
        </div>
      </Box>
    </div>
  );
}