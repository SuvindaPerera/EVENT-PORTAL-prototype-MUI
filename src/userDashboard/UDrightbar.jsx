import { Box, ListItem, ListItemButton, Stack, Typography,TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Cardcomp from '../components/Cardcomp'
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import InputAdornment from '@mui/material/InputAdornment';

const UDrightbar = () => {

  //CHAT USER LIST---------------------------------------
const[chat, setChat] = React.useState([
  {id:1, name:"John Doe", message:"Hi, I am interested in your service", avatar: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg"},
  {id:2, name:"Kusal Photogrphy", message:"Hi, I am interested in your service", avatar: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg"},
  {id:3, name:"Melanga Instruments", message:"Hi, I am interested in your service", avatar: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg"},
  {id:4, name:"Nayanthi Catring Service", message:"Hi, I am interested in your service", avatar: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg"},
])

//SEARCH FILTER-----------------------------------
const [searchFilter,setSearchFilter] = useState("");

  return (
    <Box >
      {/* FOR DESKTOP----------------------------------------------------- */}
      <Box bgcolor="#F5F5F5" flex={2} p={4} 
         minHeight={'100%'}
         width={250}
        sx={{display:{xs:"none",md:"block"}}}
      >
        <h3 className="userChatTitle">
          Chats
        </h3>
        <TextField 
          onChange={(e) => setSearchFilter(e.target.value)}
          className="searchUserBar"
          fullWidth 
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          placeholder='Search Your Chats Here' 
          id="searchEvent"
          sx={{
            borderRadius: '50px',
            textAlign: 'center',
          }}  
        />
        <Box 
        mt={3}
        style={{maxHeight: 400, overflow: 'auto'}}
        >
          <List>
            {chat.filter((chat)=>{
              if(searchFilter === ""){
                return chat
              }else if(chat.name.toLowerCase().includes(searchFilter.toLowerCase())){
                return chat
              }
            }).map((chat) => (
              <ListItem key={chat.name} disablePadding={true} disableGutters={true}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar src={chat.avatar} />
                  </ListItemAvatar>
                  <p>{chat.name}</p>
                </ListItemButton>
              </ListItem>
            ))}
            
          </List>
        </Box>
      </Box>

      {/* FOR MOBILE----------------------------------------------------------- */}
      <Box bgcolor="#F5F5F5" flex={12} p={4} 
        sx={{display:{xs:"block",md:"none"}}}
      >
        <h3 className="userChatTitle">
          Chats
        </h3>
        <TextField 
          onChange={(e) => setSearchFilter(e.target.value)}
          className="searchUserBar"
          fullWidth 
          placeholder='Search Your Chats Here' 
          id="searchEvent"
          sx={{
            borderRadius: '50px',
            textAlign: 'center',
          }}  
        />
        <Box 
        mt={3}
        style={{maxHeight: 400, overflow: 'auto'}}
        >
          <List>
            {chat.filter((chat)=>{
              if(searchFilter === ""){
                return chat
              }else if(chat.name.toLowerCase().includes(searchFilter.toLowerCase())){
                return chat
              }
            }).map((chat) => (
              <ListItem key={chat.name} disablePadding disableGutters>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar src={chat.avatar} />
                  </ListItemAvatar>
                  <p>{chat.name}</p>
                </ListItemButton>
              </ListItem>
            ))}
            
          </List>
        </Box>

      </Box>
    </Box>
  )
}

export default UDrightbar

