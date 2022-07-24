import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ModeNight from '@mui/icons-material/ModeNight';

const Sidebar = () => {
  return (
    <Box flex={1} p={2}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch  />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar
