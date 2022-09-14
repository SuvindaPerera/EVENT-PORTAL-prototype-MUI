import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { Button, Container, Divider, List, ListItem, ListItemText, Pagination, Stack, Tab, Tabs, Typography } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import CastleIcon from '@mui/icons-material/Castle';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import FortIcon from '@mui/icons-material/Fort';
import Fort from '@mui/icons-material/Fort';
import TuneIcon from '@mui/icons-material/Tune';
import Tune from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { borders } from '@mui/system';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import LocalLocations from './LocalLocations';
import Categories from './Categories';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';




  const Searchbar = () => {
      
    const [value, setValue] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
    };

    // FILTERS-------------------------------------------
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const boxstyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const [search,setSearch] = useState("");
      const [location,setLocation] = useState("");
      const [category,setCategory] = useState("");

      const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(search,location,category);
    }


    

    return (
        <Container maxWidth="lg" justifyContent="center" align="center">
        <Box   p={3}  >
            <h2 class='SearchTitle'
            sx={{ display: { xs: 'block', sm: 'none' } }}
            >
                Search Services Here...
            </h2>
             <Stack      
                sx={{
                //   width: 500,
                    // maxWidth: '100%',
                    padding: '20px',
                }}
                direction="row" 
                >
                <Grid container spacing={2}>
                     
                    <Grid item xs={12} md={12}>
                        
                             <TextField 
                                fullWidth
                                label="Quick Search" 
                                id="SearchServices"
                                className="inputRounded"
                                sx={{
                                    borderRadius:"50px",
                                    textAlign: 'center'
                                }} 
                                InputProps={{endAdornment: 
                                <Button
                                backgroundColor="#00ADB5"
                                
                                    sx={{ borderRadius:"50px" }}
                                >
                                    <SearchIcon
                                    fontSize="large"
                                    
                                    />
                                </Button>}}
                                />
                        
                    </Grid>
                </Grid>
            </Stack>
            
            <Stack id="Category" >
                <Box  display="flex"  width="100%" >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={10}>
                        <Box bgcolor="#fff">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile
                                aria-label="scrollable force tabs example"
                                width="100%"
                                centered 
                            >
                                <Tab icon={<CastleIcon />} label={<h4>Conferences</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<CoPresentIcon />}label={<h4>Seminars</h4>} 
                                sx={{
                                    textTransform: 'none',
                                }} />
                                <Tab icon={<PeopleIcon />}label={<h4>Anniversaries</h4>} 
                                sx={{
                                    textTransform: 'none',
                                }} />
                                <Tab icon={<GroupsIcon />}label={<h4>Meeting/ Periodic</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<FortIcon />}label={<h4>Trade shows/ Expos</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<CastleIcon />}label={<h4>Leadership Events</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<CastleIcon />}label={<h4>Concerts</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<CastleIcon />}label={<h4>Ceremonies/ Gala</h4>}
                                sx={{
                                    textTransform: 'none',
                                }} />
                                <Tab icon={<CastleIcon />}label={<h4>Product Launches</h4>}
                                sx={{
                                    textTransform: 'none',
                                }} />
                                <Tab icon={<CastleIcon />}label={<h4>VIP Events</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<CastleIcon />}label={<h4>Weddings</h4>}
                                sx={{
                                    textTransform: 'none',
                                }} />
                                <Tab icon={<CastleIcon />}label={<h4>Funerals</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<CastleIcon />}label={<h4>Birthday Parties</h4>}
                                sx={{
                                    textTransform: 'none',
                                }} />
                                <Tab icon={<CastleIcon />}label={<h4>Business Gatherings</h4>}
                                sx={{
                                    textTransform: 'none',
                                }} />
                                <Tab icon={<CastleIcon />}label={<h4>Graduation Parties</h4>}
                                sx={{
                                    textTransform: 'none',
                                }}  />
                                <Tab icon={<CastleIcon />}label={<h4>Other</h4>} />
                            </Tabs>
                        </Box>
                    </Grid>

                    {/* EDIT-------------------------------------------------------------------- */}
                    <Grid item xs={12} md={2}>
                    <Button 
                        onClick={handleOpen}
                        startIcon={<TuneIcon color="inherit"/>}
                        sx={{
                            textTransform: 'none',
                            color: '#00ADB5',
                        }}
                    >
                        <h3 className="filterButtonTitle">Filters</h3>
                    </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                        <Container   maxWidth="sm">
                            <Box sx={{  bgcolor:'#fff'  }} p={5} justifyContent="center" >
                                <Stack direction='row' justifyContent="space-between">
                                    <h3 className="filtersTitle">Filters</h3>
                                    <IconButton aria-label="close" onClick={()=> handleClose(true)}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Stack>
                            <Divider variant="middle" />
                            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                                <Box >
                                <TextField
                                    onChange={(e) => setSearch(e.target.value)}
                                    fullWidth
                                    className="inputRounded"
                                    label = "Search Here..."
                                    variant = "outlined"
                                    margin ="dense"
                                    sx={{
                                        borderRadius:"50px",
                                        textAlign: 'center',
                                        margin: "10px",
                                    }}               
                                />
                                <Categories />
                                <LocalLocations />
                                <Grid 
                                    p={3}
                                    container 
                                    spacing={3}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={12} md={6}>
                                        <Button
                                        className='filterButton'
                                        fullWidth={true}
                                        variant="outliined"
                                        type="submit"
                                        sx={{  borderRadius:"50px",
                                        textTransform: 'none',
                                        justifyContent: 'center',
                                        color: '#00ADB5',
                                        border : '2px solid #00ADB5',
                                        }}
                                        text-decoration="none"
                                            >
                                            <p className="filterButtonContent">Clear Filters</p>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Button
                                        className='filterButton'
                                            fullWidth={true}
                                            variant="outliined"
                                            type="submit"
                                            sx={{  borderRadius:"50px",
                                            textTransform: 'none',
                                            justifyContent: 'center',
                                            color: '#00ADB5',
                                            border : '2px solid #00ADB5',
                                            }}
                                            text-decoration="none"
                                            >
                                            <p className="filterButtonContent">Apply Filters</p>
                                        </Button>
                                    </Grid>
                                </Grid>
                                </Box> 
                            </form>
                            </Box>
                        </Container>
                    </Modal> 
                    </Grid>
                </Grid>
                </Box>
            </Stack>
        </Box>
        </Container>
       
    )
  }
  
  export default Searchbar
  