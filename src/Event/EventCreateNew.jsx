import * as React from 'react';
import { Box, FormGroup, TextField, Typography } from '@mui/material'
import UserNavbar from '../components/UserNavbar'
import Grid from '@mui/material/Unstable_Grid2';
// import { DayPicker } from 'react-day-picker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';

// import { TimePicker } from '@mui/x-date-pickers/TimePicker';



const EventCreateNew = () => {

//Handle dates
const [selectdStartDate, setSelectedStartDate] = useState(null)
const [selectdEndDate, setSelectedEndDate] = useState(null)

//handle Price Negotiable Tick
const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
        <UserNavbar/>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container 
            spacing={2} 
            mt={2} 
            maxWidth="sm"
            >
                <Grid item xs={12} md={12}>
                    <h2>Create a new Event</h2>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField fullWidth label="Enter Event Title" variant="outlined" />    
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField 
                    fullWidth 
                    label="Event Description (Max. 500 characters)"
                    variant="outlined" 
                    multiline
                        rows={4}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Grid container 
                        spacing={2}  
                        justifyContent="left"
                        >
                        
                        <Grid item xs={12} md={12}>
                            <h3>Select Date/Dates</h3>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControl>
                            <FormLabel id="selectDate">Duration of the event</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="oneDay" control={<Radio />} label="One Day Event" />
                                <FormControlLabel value="moreDays" control={<Radio />} label="Not a single day event" />
                            </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            
                            <h5>Start date</h5>
                            <DatePicker
                            selected={selectdStartDate}
                            onChange={date=>setSelectedStartDate(date)}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h5>End date</h5>
                            <DatePicker
                            selected={selectdEndDate}
                            onChange={date=>setSelectedEndDate(date)}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <h3>Your Budget</h3>
                        </Grid>
                        <Grid Item xs={12} md={3}>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel 
                                control={<Checkbox />} 
                                label="Negotiable"
                                labelPlacement="start"
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <TextField 
                            fullWidth label="Your budget in LKR" 
                            variant="outlined"
                            type="number" 
                            maxValue="10"
                            />    
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button 
                            variant="outlined"
                            fullWidth
                            sx={{  borderRadius:"50px" }}
                            >
                            Clear All
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button 
                            variant="contained"
                            fullWidth
                            type="submit"
                            sx={{  borderRadius:"50px" }}
                            >
                            Create New Event
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default EventCreateNew
