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
import Events from '../sampleData/events.json'


const UDleftbar = () => {

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
        minHeight='100vh'
        width={300}
        bgcolor={"#30353D"} 
        p={2} 
        // sx={{display:{xs:"none",md:"block"}}}
       >
      <h3 className="userDashboardTitle">
        My Events
      </h3>
      <Divider variant='middle' color="white" />
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
        <Divider variant="middle" color="white"/>

        <p className="userEventSubheading">Events You have created</p> 
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
