import { Button, Divider, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'
import map from './map.png';
import IconButton from '@mui/material/IconButton';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const BottomContent = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <Box sx={{ flexGrow: 1 }} mt={5} >
      <Grid container spacing={2}  mb={2} >

         {/* Top Services */}
        <Grid item xs={12} md={4} >
          <Item elevation={0} sx={{bgcolor:'#1A2027', color:'#fff',  height: "100%", elevation: "0"}}>
            <h2 class="bottomContent-title">
              Top Services
            </h2>
            <Divider variant="middle" color="white"/>
            <List >
                <ListItemButton style={{justifyContent:'center', borderRadius: "50px",}}>
                    <h3 class="bottomContent-buttons">Weddings</h3>
                </ListItemButton>
                <ListItemButton style={{justifyContent:'center', borderRadius: "50px",}}>
                <h3 class="bottomContent-buttons">Birthday Parties</h3>
                </ListItemButton>
                <ListItemButton style={{justifyContent:'center', borderRadius: "50px",}}>
                <h3 class="bottomContent-buttons">Funerals</h3>
                </ListItemButton>
            </List>
            <Button variant="text"
              size="large"
                sx={{  borderRadius:"50px",
               maxHeight:"50px",
               textTransform: 'none',
               justifyContent: 'center',
               color: '#00ADB5',
               border : '2px solid #00ADB5',
              }}
              text-decoration="none"
              href="/Home"
              >
                <h3 
                class='bottomButtons'>
                  See More
                </h3>
            </Button>
          </Item>
        </Grid>

         {/* Overview */}
        <Grid item xs={12} md={4}>
          <Item elevation={0} sx={{bgcolor:'#1A2027', color:'#fff', height: "100%",  }}>
            <h2 class="bottomContent-title">
              Overview
            </h2>
            <Divider variant="middle" color="white"/>
            <List>
                <ListItemButton style={{justifyContent:'center', borderRadius: "50px",}} >
                  <h3 class="bottomContent-buttons">About</h3>
                </ListItemButton>
                <ListItemButton  style={{justifyContent:'center', borderRadius: "50px",}}>
                  <h3 class="bottomContent-buttons">Services</h3>
                </ListItemButton>
                <ListItemButton  style={{justifyContent:'center', borderRadius: "50px",}}>
                  <h3 class="bottomContent-buttons">Terms of Use</h3>
                </ListItemButton>
                <ListItemButton  style={{justifyContent:'center', borderRadius: "50px",}}>
                  <h3 class="bottomContent-buttons">Privacy Policy</h3>
                </ListItemButton>
            </List>
          </Item>
        </Grid>

         {/* Quick Search Map*/}
        <Grid item xs={12} md={4} >
          <Item elevation={0} sx={{bgcolor:'#1A2027', color:'#fff', height: "100%" }}>
          <h2 class="bottomContent-title">
              Quick search the Map
            </h2>
            <Divider variant="middle" color="white" />
            <Box mt={3}>
              <img src={map}
              alt="Map" 
              height="200vh"/>
            </Box>
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
              endIcon={<MyLocationIcon color="inherit"/>}
              href="/Map"
              >
                <h3 class='bottomButtons'>
                  Search Map
                </h3>
            </Button>
          </Item>
        </Grid>
    
      </Grid>
    </Box>
  )
}

export default BottomContent
