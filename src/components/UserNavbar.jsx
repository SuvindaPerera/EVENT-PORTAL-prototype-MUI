import { AppBar, Box, Toolbar,styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem, Button, IconButton } from '@mui/material'
import React, { useState } from 'react'
import logo from './logo.png';
import FooterLogo from './footerLogo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoWord from './LogoWord.png';
import { Link } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor:"#222831"
})

const Fullscreen= styled(Box)(({theme})=>({
  display: 'none',
  alignItems: 'center',
  gap:"20px",
  [theme.breakpoints.up("md")]:{
    display: 'flex',
  }
}));

const Mobilescreen = styled(Box)(({theme})=>({
  display: 'flex',
  alignItems: 'center',
  gap:"20px",
  [theme.breakpoints.up("md")]:{
    display: 'none',
  }
}));

const settings = ['Edit my profile','Log out'];
const settingsMobile = ['Home','Events','Services','About Us','Edit my profile','Log out'];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

    

  return (
    <AppBar position="sticky" >
      <StyledToolbar>
        
        <Box padding="20px" sx={{
                display: {xs:"none",md:"block"},
            }}>
        <img src={logo} alt="Logo" height="50px"/>
        </Box>
        
         
        <Box padding="20px" sx={{
                display: {xs:"block",md:"none"},
            }}>
        <img src={FooterLogo} alt="Logo" height="50px" />
        </Box>
        
        <Box padding="20px" sx={{
                display: {xs:"block",md:"none"},
            }}>
            <img src={LogoWord} alt="Logo" height="30px" />
        </Box>
       
        
        <Fullscreen>
          <Box display="flex" gap={2}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff' }}>
                <Typography>Home</Typography>
              </Button>
              </Link>
              <Button sx={{ color: '#fff' }}>
                <Typography>Events</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>Services</Typography>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Typography>About Us</Typography>
              </Button>
              {/* <Link to="../Login" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: '#fff', borderRadius:"50px" }} variant="contained" ml={1} startIcon={<PersonIcon/>}
              >
                Log In
              </Button>
              </Link> */}
              <IconButton>
                <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{ color: "white"}} />
                </Badge>
              </IconButton>

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                alt="User" 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg" 
                />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
              
            </Box>
        </Fullscreen>
        <Mobilescreen>
            <IconButton>
                <Badge badgeContent={4} color="primary">
                <NotificationsIcon style={{ color: "white"}} />
                </Badge>
            </IconButton>
             <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                <Avatar 
                alt="User" 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg" 
                />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {settingsMobile.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Mobilescreen>
          
      </StyledToolbar>
        

    </AppBar>
  )
}

export default Navbar