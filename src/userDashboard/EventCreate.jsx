import {  Button, Checkbox, Container, Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import NavbarforLogIn from '../components/NavbarforLogIn'

import TextField from '@mui/material/TextField';
import Categories from '../components/Categories';
import LocalLocations from '../components/LocalLocations';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



export default function SigninService() {

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
            <Container   maxWidth="sm">
                <Box sx={{ flexGrow: 1, bgcolor:'#fff'  }} p={6} justifyContent="center" >

                <Typography variant="h5" margin="20px">Create an Event</Typography>
                {/* <Typography variant="body2"margin="15px">I am searching for a service</Typography> */}
                <Divider variant="middle" />

                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
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
                    <TextField 
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth 
                        id="contactNumber" 
                        label="Your Budget" 
                        variant="outlined" 
                        margin="dense"
                        error = {phoneError}
                        required
                        mb={2}
                        mt={3}
                        maxWidth="50%"
                        />
                    <FormControlLabel 
                      control={<Checkbox defaultChecked />} 
                      label="Negotiable" 
                      />
                    <Stack  mt={4} justifyContent="space-between" spacing={2}>
                        <Button
                            
                            variant="outlined"
                            sx={{
                                p: 1,
                                borderRadius:"50px"
                            }}
                            >
                            Clear all
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ 
                                p: 2,
                                 borderRadius:"50px" 
                                }}
                            >
                            Submit
                        </Button>
                    </Stack>
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