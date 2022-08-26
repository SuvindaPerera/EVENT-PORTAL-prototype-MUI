import { Box, TextField, Typography } from '@mui/material'
import UserNavbar from '../components/UserNavbar'
import Grid from '@mui/material/Unstable_Grid2';
// import { DayPicker } from 'react-day-picker';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';

// import { TimePicker } from '@mui/x-date-pickers/TimePicker';



const EventCreateNew = () => {

const [selectdStartDate, setSelectedStartDate] = useState(null)
const [selectdEndDate, setSelectedEndDate] = useState(null)

  return (
    <Box>
        <UserNavbar/>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container 
            spacing={2} 
            mt={2} 
            justifyContent="center"
            alignItems="center"
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
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item xs={12} md={12}>
                            <h3>Select Date/Dates</h3>
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
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}

export default EventCreateNew
