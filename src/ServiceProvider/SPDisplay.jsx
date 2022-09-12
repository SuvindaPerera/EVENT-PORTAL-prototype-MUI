import React from 'react'
import { useState } from 'react';
import {  Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import LandingPageNavbar from '../components/LandingPageNavbar'
import TextField from '@mui/material/TextField';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PhoneIcon from '@mui/icons-material/Phone';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FileUpload} from './FileUpload'
import {ImgDisplay} from './ImgDisplay'





const SPDisplay = () => {

const SPName = 'Vision Photography';
const SPDescription = 'A company description is an overview or summary of a business. Its an important part of a business plan that often briefly describes an organizations history, location, mission statement, management personnel and, when appropriate, legal structure';
const SPemail ='vision@gmail.com'
const SPphone = '0712345678'

const [files, setFiles]=useState([]);

const onSuccess = ( savedFiles)=>{
  setFiles(savedFiles)
}; 


const ImageData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];
  


  return (
    <Box sx={{ bgcolor:'#f5f5f5'}} className="SPMainContainer">
        <LandingPageNavbar />
        <Grid container  mt={3} mb={3} className='SPDisplayContainer'>
            <Grid item sm={12} md={8} className='SPDisplayContent'>
                <h1 className='SPDisplayTitle'>{SPName}
                    <IconButton aria-label="contact" sx={{color: '#fff'}}>
                        <QuestionAnswerIcon color='inherit'/>
                    </IconButton>
                </h1>
                <p className="SDPDIsplayDescription">{SPDescription}</p>
                
                <Divider sx={{width:'100%', height:'1px', backgroundColor:'#00ADB5', my:2}} />
                
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="text"
                            size="large"
                                sx={{  borderRadius:"50px",
                            maxHeight:"50px",
                            textTransform: 'none',
                            justifyContent: 'center',
                            color: '#00ADB5',
                            }}
                            text-decoration="none"
                            startIcon={<MailOutlineIcon color="inherit"/>}
                            href={`mailto:${SPemail}`}
                            >
                                <h3 class='SPDisplayButtons'>
                                    {SPemail}
                                </h3>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="text"
                            size="large"
                                sx={{  borderRadius:"50px",
                            maxHeight:"50px",
                            textTransform: 'none',
                            justifyContent: 'center',
                            color: '#00ADB5',
                            }}
                            text-decoration="none"
                            startIcon={<PhoneIcon color="inherit"/>}
                            href={`tel:${SPphone}`}
                            >
                            <h3 class='SPDisplayButtons'>
                                {SPphone}
                            </h3>
                               
                        </Button>
                    </Grid>
                </Grid>

                <Divider sx={{width:'100%', height:'1px', backgroundColor:'#00ADB5', my:2}} />
                <p className="SDPDIsplayGallery">Gallery</p>

                <ImageList sx={{ width: '100%', height: 450 }}>
                    <ImageListItem key="Subheader" cols={2}>
                        <ListSubheader component="div">Recent Works</ListSubheader>
                    </ImageListItem>
                        {ImageData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                            />
                        </ImageListItem>
                    ))}
                 </ImageList>
            </Grid>
            <Grid item sm={12} md={12} className='SPDisplayHomeButton'>
            <Button
                            variant="text"
                            size="large"
                                sx={{  borderRadius:"50px",
                            maxHeight:"50px",
                            textTransform: 'none',
                            justifyContent: 'center',
                            color: '#00ADB5',
                            }}
                            text-decoration="none"
                            startIcon={<ArrowBackIosNewIcon color="inherit"/>}
                            href='/Home'
                            >
                            <h3>
                                Back to Home
                            </h3>
                               
                        </Button>
            </Grid>
            <Grid item sm={12} md={12} >
              <FileUpload onSuccess={onSuccess}/>
              <ImgDisplay files={files}/>
             <ToastContainer />
            </Grid>
        </Grid>
        <Footer/>
    </Box>
  )
}

export default SPDisplay
