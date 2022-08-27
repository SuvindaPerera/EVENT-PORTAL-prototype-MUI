import {  Button, Checkbox, Container, Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import NavbarforLogIn from '../components/NavbarforLogIn'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import TextField from '@mui/material/TextField';
import Categories from '../components/Categories';
import LocalLocations from '../components/LocalLocations';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Grid from '@mui/material/Unstable_Grid2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function SigninService() {

    //Handle dates
    const [selectdStartDate, setSelectedStartDate] = useState(null)
    const [selectdEndDate, setSelectedEndDate] = useState(null)

    //handle Price Negotiable Tick
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
    setChecked(event.target.checked);
     };

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    const[firstNameError, setFirstNameError] = useState(false)
    const[lastNameError, setLastNameError] = useState(false)
    const[phoneError, setPhoneError] = useState(false)

     const handleSubmit = (e) =>{
      e.preventDefault()

      setLastNameError(false)
      setFirstNameError(false)
      setPhoneError(false)

    
        if (firstName && lastName && phone ){
            
                console.log(firstName,lastName,phone)
        }
        if (firstName === ''){
                setFirstNameError(true)
        }
        if (lastName === ''){
                setLastNameError(true)
        }
        
        
        if (phone === ''){
                setPhoneError(true)
        }
        
     }

     

    return (

    <Box sx={{ flexGrow: 1 , bgcolor:'lightcyan' }}>
        <NavbarforLogIn />
            <Container   maxWidth="md">
                <Box sx={{ flexGrow: 1, bgcolor:'#fff'  }} p={6} justifyContent="center" >

                <h2>Create an Event</h2>
                {/* <Typography variant="body2"margin="15px">I am searching for a service</Typography> */}
                <Divider variant="middle" />

                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                    <h3>Event Details</h3>
                     <TextField
                        onChange={(e) => setFirstName(e.target.value)}
                        fullWidth
                        label = "Event Name"
                        variant = "outlined"
                        error = {firstNameError}
                        margin ="dense"
                        required                 
                    />
                    <TextField
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                        label = "Event Description"
                        multiline
                        rows={4}
                        variant = "outlined"
                        error = {lastNameError}
                        margin="dense"
                        required                         
                    />       
                    <Categories/>
                    <LocalLocations />
                    <h3>Budget for the Event</h3>
                    <TextField 
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth 
                        id="contactNumber" 
                        label="Your Budget in LKR" 
                        variant="outlined" 
                        margin="dense"
                        error = {phoneError}
                        required
                        mb={2}
                        mt={3}
                        maxWidth="50%"
                        type="number"
                        />
                        <FormControlLabel 
                      control={<Checkbox  />} 
                      label="Negotiable" 
                      />
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
                        <Grid item xs={12} md={6}>
                            <Button
                                variant="outlined"
                                sx={{
                                    p: 1,
                                    borderRadius:"50px"
                                }}
                                fullWidth
                                >
                                Clear all
                            </Button> 
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Button
                                variant="contained"
                                sx={{ 
                                    p: 2,
                                    borderRadius:"50px" 
                                    }}
                                fullWidth
                                >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

                    <Link to="/UserDashboard" style={{ textDecoration: 'none' }}>
                    <Stack  mt={3} >
                        <Button variant="text" 
                            sx={{ p: 2, borderRadius:"50px" }}
                            >
                            <ChevronLeftIcon />
                            <Typography variant="body1">Back to my page</Typography>
                        </Button>
                    </Stack>
                    </Link>
                </form>
                </Box>
            </Container>
            <Footer/>
    </Box>
    )
}