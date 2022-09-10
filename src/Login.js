import { Stack, Typography, Button, TextField, Box, Divider ,InputBase} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import NavbarforLogIn from './components/LandingPageNavbar'


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
   <div>
    <Box 
    sx={{ height:'100vh' ,backgroundColor:"#f5f5f5" }}>
        <NavbarforLogIn/>
        <Stack mt={'5%'} justifyContent="center" alignItems="center" className="loginContainer">
         <h3 className="loginTitle">
            Log In
         </h3>
        
            <form noValidate autoComplete="off" onSubmit = {handleSubmit}>
            <TextField
            onChange={(e) => setUsername(e.target.value)}
            label = "Username"
            variant = "outlined"
            error = {usernameError}
            className="inputRounded"            
            /><br/><br/>

                <TextField
                onChange={(e) => setPassword(e.target.value)}
                label = "Password"
                type = "password" 
                variant = "outlined"
                error = {passwordError}
                className="inputRounded"          
                />
                
                <br/><br/>

               <Link to="../UserDashboard" style={{ textDecoration: 'none' }}>
                <Button type="submit" size= "large" variant="contained"
                  sx={{  borderRadius:"50px" }}
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
      <Footer/>
      </div>
  )
}


