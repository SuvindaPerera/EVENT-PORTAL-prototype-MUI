import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box } from '@mui/system';
import { Button, Divider, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';


const UDleftbar = () => {

  // USER EVENT LIST----------------------------
const eventName = "Birthday Party";

//BUTTON SUBMIT SEARCH ----------------------------
const [search,setSearch] = useState("");
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(search);
}

//USER EVENTS-------------------------------------
const [userEvents,setUserEvents] = useState([
  {id:1, eventName:"Birthday Party", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:2, eventName:"Wedding", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:3, eventName:"Anniversary", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:4, eventName:"Graduation", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:6, eventName:"Christmas Party", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:7, eventName:"New Year Party", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:8, eventName:"Halloween Party", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:9, eventName:"Thanksgiving Party", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:10, eventName:"Valentine Party", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:11, eventName:"Easter Party", eventDate:"2021-10-10", eventTime:"10:00"},
  {id:13, eventName:"Independence Day Party", eventDate:"2021-10-10", eventTime:"10:00"},
]);

//SEARCH FILTER-----------------------------------
const [searchFilter,setSearchFilter] = useState("");


  return (
    <div className="userDashboardEventContainer">
      <Box 
        minHeight={'100%'}
        width={300}
        bgcolor={"#30353D"} 
        p={2} 
        // sx={{display:{xs:"none",md:"block"}}}
       >
      <h3 className="userDashboardTitle">
        My Events
      </h3>
      <Divider  color="white" />
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
          placeholder='Search Your Events Here' 
          id="searchEvent"
          sx={{
            borderRadius: '50px',
            textAlign: 'center',
          }}  
        />
       </Box>

          {/* DIVIDER---------------------------------------------------- */}
        <Divider color="white"/>
        <p className="userEventSubheading">Events You have created</p> 
        <Box 
        mt={3}
        style={{maxHeight: 400, overflow: 'auto'}}
        >
           {/* USER EVENT LIST---------------------------------------------------- */}
          <List>
            {userEvents.filter((eve)=>{
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
              href="/EventCreate"
              endIcon={<AddIcon color="inherit"/>}
              >
                <h3 className="userCreateEventButton">
                  Create a New Event
                </h3>
            </Button>
        </div>
      </Box>
    </div>
  )
}

export default UDleftbar
