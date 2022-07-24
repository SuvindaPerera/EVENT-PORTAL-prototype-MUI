import { Stack, Typography, Button, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import NavbarforLogIn from './components/NavbarforLogIn'


export default function Login() {

     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
     const [usernameError, setUsernameError] = useState(false)
     const [passwordError, setPasswordError] = useState(false)

     const handleSubmit = (e) =>{
      e.preventDefault()
      setUsernameError(false)
      setPasswordError(false)
      
      if (username == ''){
         setUsernameError(true)
      }
      if (password == ''){
         setPasswordError(true)
      }
      if (username && password){
         console.log(username,password)
      }
     }
   
  return (

    <Box sx={{  bgcolor:'lightcyan', minHeight:'100vh' }}>
        <NavbarforLogIn/>
        <Stack mt={15} justifyContent="center" alignItems="center">
        <Typography variant='h6'>         
        LOG IN
        </Typography><br/><br/>
        
            <form noValidate autoComplete="off" onSubmit = {handleSubmit}>
            <TextField
            onChange={(e) => setUsername(e.target.value)}
            label = "Username"
            variant = "outlined"
            error = {usernameError}           
            /><br/><br/>

                <TextField
                onChange={(e) => setPassword(e.target.value)}
                label = "Password"
                type = "password" 
                variant = "outlined"
                error = {passwordError}            
                /><br/><br/>

               <Link to="../UserDashboard" style={{ textDecoration: 'none' }}>
                <Button type="submit" size= "large" variant="contained"
                  sx={{ color: '#fff', borderRadius:"50px" }}
                >
                Log In
                </Button>
                </Link>      
            
            </form>

            <Box mt={2.5}>
            New Here? 
            <Link to="/SigninFork" style={{ textDecoration: 'none' }}>
            <Button href="#text-buttons">Register!</Button>
            </Link>
            </Box> 

        </Stack> 
      
    </Box>
  )
}


