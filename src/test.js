import { Autocomplete, Button, Divider, Grid, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LocalLocations from './components/LocalLocations';


// const SigninSearching = () => {

  

//   return (

    
//   )
// }



// export default SigninSearching

export default function SigninService() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const [compnayName, setCompanyName] = useState('')
      const [compnayDescription, setCompanyDescription] = useState('')

      const handleSubmit = (e) => {
        e.preventDefault()

        if (compnayName && compnayDescription ){
            console.log(compnayName, compnayDescription)
        }
      }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Navbar/>
        <Box bgcolor={'lightcyan'} p={5}>
            <Grid container spacing={2} 
            justifyContent="center"
            my={5}
            >
            <Grid item xs={12} md={8}>
                <Item>
                <Typography variant="h5"margin="20px">Sign In</Typography>
                <Divider variant="middle" />
                
                <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} md={6} >
                    <Item >
                        
                        <TextField 
                            onClick={(e) => setCompanyName(e.target.value)}
                            fullWidth 
                            id="companyName" 
                            label="Compnay Name" 
                            variant="outlined" 
                            margin="dense" 
                        />
                        <TextField 
                            onClick={(e) => setCompanyDescription(e.target.value)}
                            fullWidth
                            multiline
                            rows={4} 
                            id="companyDescription" 
                            label="Compnay Description" 
                            variant="outlined" 
                            margin="dense" 
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            >Submit
                        </Button>
                        <TextField fullWidth id="email" label="e-mail" variant="outlined" margin="dense"/>
                        <TextField 
                        fullWidth 
                        name="password"
                        type="password"
                        placeholder="password"
                        label="Enter a password"
                        margin="dense"
                        />
                        <TextField 
                            fullWidth 
                            name="reenterPassword"
                            type="password"
                            placeholder="password"
                            label="Re-enter password"
                            margin="dense"
                        />
                       
                    </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Item>
                        
                    <TextField fullWidth id="contactNumber" label="Contact Number" variant="outlined" margin="dense"/>
                    <LocalLocations/>
                        <Stack direction="row-reverse" spacing={2} mt={5}>
                        <Button
                            variant="contained"
                            type="submit"
                            >Submit
                        </Button>
                        <Button
                            variant="outlined"
                            type="reset"
                            >Clear all
                        </Button>
                        </Stack>
                        
                    </Item>
                    </Grid>
                </Grid>
                </form>
                </Item>
            </Grid>
            </Grid>
        </Box>
        </Box>
    )
}