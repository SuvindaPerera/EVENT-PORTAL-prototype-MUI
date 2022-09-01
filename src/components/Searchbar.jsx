import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
import Filters from './Filters'





  const Searchbar = () => {
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
      }));

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        
      };
    
      
    const [value, setValue] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
    };

    

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
                    <Grid item xs={12} md={2}>
                            <Filters title='Select Filters'/>
                    </Grid>
                </Grid>
                </Box>
            </Stack>
        </Box>
        </Container>
       
    )
  }
  
  export default Searchbar
  