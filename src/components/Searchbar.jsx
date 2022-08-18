import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Divider, List, ListItem, ListItemText, Pagination, Stack, Tab, Tabs, Typography } from '@mui/material';
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
        <Box bgcolor={"lightcyan"}  p={3} >
            <Typography variant="h6" align="center" padding="10px">Search Services Here</Typography>
             <Stack      
                sx={{
                //   width: 500,
                    // maxWidth: '100%',
                    padding: '20px',
                }}
                direction="row" 
                >
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} md={10}>
                        
                             <TextField 
                                fullWidth
                                label="Quick Search" 
                                id="SearchServices" 
                                
                                />
                        
                    </Grid>
                    <Grid item xs={12} md={2}
                    align="center"
                    justify="center" 
                    >
                        <Button 
                            startIcon={<SearchIcon />} 
                            variant="contained"
                            fullWidth
                            sx={{ p: 2, borderRadius:"50px" }}
                            >
                            Search
                         </Button>   
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
                                <Tab icon={<CastleIcon />} label="Conferences" />
                                <Tab icon={<CoPresentIcon />}label="Seminars" />
                                <Tab icon={<PeopleIcon />}label="Internal Company" />
                                <Tab icon={<GroupsIcon />}label="Meeting/ Periodic" />
                                <Tab icon={<FortIcon />}label="Trade shows/ Expos" />
                                <Tab icon={<CastleIcon />}label="Leadership Events" />
                                <Tab icon={<CastleIcon />}label="Networking Events" />
                                <Tab icon={<CastleIcon />}label="Ceremonies/ Gala" />
                                <Tab icon={<CastleIcon />}label="Product Launches" />
                                <Tab icon={<CastleIcon />}label="VIP Events" />
                                <Tab icon={<CastleIcon />}label="Weddings" />
                                <Tab icon={<CastleIcon />}label="Funerals" />
                                <Tab icon={<CastleIcon />}label="Birthday Parties" />
                                <Tab icon={<CastleIcon />}label="Business Gatherings" />
                                <Tab icon={<CastleIcon />}label="Graduation Parties" />
                                <Tab icon={<CastleIcon />}label="Other" />
                            </Tabs>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                            {/* <Button 
                                style={{textTransform: 'none'}} 
                                startIcon={<TuneIcon />} 
                                variant="outlined"
                                href="#"
                                fullWidth
                                sx={{ p: 2, borderRadius:"50px" }}
                            
                                >
                                <Typography>Filters</Typography>
                            </Button> */}
                            <Filters title='Select Filters'/>
                    </Grid>
                </Grid>
                </Box>
            </Stack>
        </Box>
       
    )
  }
  
  export default Searchbar
  