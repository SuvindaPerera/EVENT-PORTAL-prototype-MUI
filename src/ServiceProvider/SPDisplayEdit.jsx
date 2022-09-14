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
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
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
import EditIcon from '@mui/icons-material/Edit';





const SPDisplay = () => {

const SPName = 'Vision Photography';
const SPDescription = 'A company description is an overview or summary of a business. Its an important part of a business plan that often briefly describes an organizations history, location, mission statement, management personnel and, when appropriate, legal structure';
const SPemail ='vision@gmail.com'
const SPphone = '0712345678'


//PHOTO UPOLOAD--------------------------------------------
const [files, setFiles]=useState([]);

const onSuccess = ( savedFiles)=>{
  setFiles(savedFiles)
}; 

//EDIT Title--------------------------------------------
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [search,setSearch] = useState("");

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(search);
}

//EDIT Description--------------------------------------------
const [openDescription, setOpenDescription] = React.useState(false);
const handleOpenDescription = () => setOpenDescription(true);
const handleCloseDescription = () => setOpenDescription(false);

const [searchDescription,setSearchDescription] = useState("");

const handleSubmitDescription = (e) =>{
  e.preventDefault();
  console.log(searchDescription);
}

//EDIT Email--------------------------------------------
const [openEmail, setOpenEmail] = React.useState(false);
const handleOpenEmail = () => setOpenEmail(true);
const handleCloseEmail = () => setOpenEmail(false);

const [searchEmail,setSearchEmail] = useState("");

const handleSubmitEmail = (e) =>{
  e.preventDefault();
  console.log(searchEmail);
}

//EDIT Contact--------------------------------------------
const [openContact, setOpenContact] = React.useState(false);
const handleOpenContact = () => setOpenContact(true);
const handleCloseContact = () => setOpenContact(false);

const [searchContact,setSearchContact] = useState("");

const handleSubmitContact = (e) =>{
  e.preventDefault();
  console.log(searchContact);
}


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
                    {/* //POPUP---------------------------------------------------------------------- */}
                  <Button 
                        onClick={handleOpen}
                        startIcon={<EditIcon color="inherit"/>}
                        sx={{
                            textTransform: 'none',
                            color: '#fff',
                            height: 0
                        }}
                    >
                        <h3 className="EditButtonTitle">Edit Title</h3>
                    </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                        <Container   maxWidth="sm">
                            <Box sx={{  bgcolor:'#fff'  }} p={5} justifyContent="center" >
                                <Stack direction='row' justifyContent="space-between">
                                    <h3 className="filtersTitle">Edit Title</h3>
                                    <IconButton aria-label="close" onClick={()=> handleClose(true)}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Stack>
                            <Divider variant="middle" />
                            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                                <Box >
                                <TextField
                                    onChange={(e) => setSearch(e.target.value)}
                                    fullWidth
                                    className="inputRounded"
                                    label = "New Title Here..."
                                    variant = "outlined"
                                    margin ="dense"
                                    sx={{
                                        borderRadius:"50px",
                                        textAlign: 'center',
                                        margin: "10px",
                                    }}               
                                />
                                <Grid 
                                    p={3}
                                    container 
                                    spacing={3}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={12} md={6}>
                                        <Button
                                        className='filterButton'
                                            fullWidth={true}
                                            variant="outliined"
                                            type="submit"
                                            sx={{  borderRadius:"50px",
                                            textTransform: 'none',
                                            justifyContent: 'center',
                                            color: '#00ADB5',
                                            border : '2px solid #00ADB5',
                                            }}
                                            text-decoration="none"
                                            >
                                            <p className="filterButtonContent">Apply Changes</p>
                                        </Button>
                                    </Grid>
                                </Grid>
                                </Box> 
                            </form>
                            </Box>
                        </Container>
                    </Modal> 
                    {/* //POPUP FINISH---------------------------------------------------------------------- */}

                </h1>
                <p className="SDPDIsplayDescription">{SPDescription}</p>
                 {/* //POPUP---------------------------------------------------------------------- */}
                 <Button 
                        onClick={handleOpenDescription}
                        startIcon={<EditIcon color="inherit"/>}
                        sx={{
                            textTransform: 'none',
                            color: '#00ADB5',
                            height: 0
                        }}
                    >
                        <h3 className="EditButtonTitleDec">Edit Description</h3>
                    </Button>
                        <Modal
                            open={openDescription}
                            onClose={handleCloseDescription}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                        <Container   maxWidth="sm">
                            <Box sx={{  bgcolor:'#fff'  }} p={5} justifyContent="center" >
                                <Stack direction='row' justifyContent="space-between">
                                    <h3 className="filtersTitle">Edit Description</h3>
                                    <IconButton aria-label="close" onClick={()=> handleCloseDescription(true)}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Stack>
                            <Divider variant="middle" />
                            <form noValidate autoComplete='off' onSubmit={handleSubmitDescription}>
                                <Box >
                                <TextField
                                    onChange={(e) => setSearchDescription(e.target.value)}
                                    fullWidth
                                    className="inputRounded"
                                    label = "New Description Here..."
                                    variant = "outlined"
                                    multiline
                                    maxRows={10}
                                    sx={{
                                        borderRadius:"50px",
                                        textAlign: 'center',
                                        margin: "10px",
                                    }}               
                                />
                                <Grid 
                                    p={3}
                                    container 
                                    spacing={3}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={12} md={6}>
                                        <Button
                                        className='filterButton'
                                            fullWidth={true}
                                            variant="outliined"
                                            type="submit"
                                            sx={{  borderRadius:"50px",
                                            textTransform: 'none',
                                            justifyContent: 'center',
                                            color: '#00ADB5',
                                            border : '2px solid #00ADB5',
                                            }}
                                            text-decoration="none"
                                            >
                                            <p className="filterButtonContent">Apply Changes</p>
                                        </Button>
                                    </Grid>
                                </Grid>
                                </Box> 
                            </form>
                            </Box>
                        </Container>
                    </Modal> 
                    {/* //POPUP FINISH---------------------------------------------------------------------- */}
                
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
                        {/* //POPUP---------------------------------------------------------------------- */}
                          <Button 
                                  onClick={handleOpenEmail}
                                  startIcon={<EditIcon color="inherit"/>}
                                  sx={{
                                      textTransform: 'none',
                                      color: '#00ADB5',
                                      height: 0
                                  }}
                              >
                                  <h3 className="EditButtonTitleDec">Edit Email</h3>
                              </Button>
                                  <Modal
                                      open={openEmail}
                                      onClose={handleCloseEmail}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                  >
                                  <Container   maxWidth="sm">
                                      <Box sx={{  bgcolor:'#fff'  }} p={5} justifyContent="center" >
                                          <Stack direction='row' justifyContent="space-between">
                                              <h3 className="filtersTitle">Edit Email</h3>
                                              <IconButton aria-label="close" onClick={()=> handleCloseEmail(true)}>
                                                  <CloseIcon/>
                                              </IconButton>
                                          </Stack>
                                      <Divider variant="middle" />
                                      <form noValidate autoComplete='off' onSubmit={handleSubmitEmail}>
                                          <Box >
                                          <TextField
                                              onChange={(e) => setSearchEmail(e.target.value)}
                                              fullWidth
                                              className="inputRounded"
                                              label = "New Email Here..."
                                              variant = "outlined"
                                              margin ="dense"
                                              sx={{
                                                  borderRadius:"50px",
                                                  textAlign: 'center',
                                                  margin: "10px",
                                              }}               
                                          />
                                          <Grid 
                                              p={3}
                                              container 
                                              spacing={3}
                                              display="flex"
                                              justifyContent="center"
                                              alignItems="center"
                                          >
                                              <Grid item xs={12} md={6}>
                                                  <Button
                                                  className='filterButton'
                                                      fullWidth={true}
                                                      variant="outliined"
                                                      type="submit"
                                                      sx={{  borderRadius:"50px",
                                                      textTransform: 'none',
                                                      justifyContent: 'center',
                                                      color: '#00ADB5',
                                                      border : '2px solid #00ADB5',
                                                      }}
                                                      text-decoration="none"
                                                      >
                                                      <p className="filterButtonContent">Apply Changes</p>
                                                  </Button>
                                              </Grid>
                                          </Grid>
                                          </Box> 
                                      </form>
                                      </Box>
                                  </Container>
                              </Modal> 
                              {/* //POPUP FINISH---------------------------------------------------------------------- */}
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
                        {/* //POPUP---------------------------------------------------------------------- */}
                        <Button 
                                  onClick={handleOpenContact}
                                  startIcon={<EditIcon color="inherit"/>}
                                  sx={{
                                      textTransform: 'none',
                                      color: '#00ADB5',
                                      height: 0
                                  }}
                              >
                                  <h3 className="EditButtonTitleDec">Edit Contact</h3>
                              </Button>
                                  <Modal
                                      open={openContact}
                                      onClose={handleCloseContact}
                                      aria-labelledby="modal-modal-title"
                                      aria-describedby="modal-modal-description"
                                  >
                                  <Container   maxWidth="sm">
                                      <Box sx={{  bgcolor:'#fff'  }} p={5} justifyContent="center" >
                                          <Stack direction='row' justifyContent="space-between">
                                              <h3 className="filtersTitle">Edit Contact</h3>
                                              <IconButton aria-label="close" onClick={()=> handleCloseContact(true)}>
                                                  <CloseIcon/>
                                              </IconButton>
                                          </Stack>
                                      <Divider variant="middle" />
                                      <form noValidate autoComplete='off' onSubmit={handleSubmitContact}>
                                          <Box >
                                          <TextField
                                              onChange={(e) => setSearchContact(e.target.value)}
                                              fullWidth
                                              className="inputRounded"
                                              label = "New Contact Here..."
                                              variant = "outlined"
                                              margin ="dense"
                                              sx={{
                                                  borderRadius:"50px",
                                                  textAlign: 'center',
                                                  margin: "10px",
                                              }}               
                                          />
                                          <Grid 
                                              p={3}
                                              container 
                                              spacing={3}
                                              display="flex"
                                              justifyContent="center"
                                              alignItems="center"
                                          >
                                              <Grid item xs={12} md={6}>
                                                  <Button
                                                  className='filterButton'
                                                      fullWidth={true}
                                                      variant="outliined"
                                                      type="submit"
                                                      sx={{  borderRadius:"50px",
                                                      textTransform: 'none',
                                                      justifyContent: 'center',
                                                      color: '#00ADB5',
                                                      border : '2px solid #00ADB5',
                                                      }}
                                                      text-decoration="none"
                                                      >
                                                      <p className="filterButtonContent">Apply Changes</p>
                                                  </Button>
                                              </Grid>
                                          </Grid>
                                          </Box> 
                                      </form>
                                      </Box>
                                  </Container>
                              </Modal> 
                              {/* //POPUP FINISH---------------------------------------------------------------------- */}
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
                 <Grid item sm={12} md={12} >
                  <FileUpload onSuccess={onSuccess}/>
                  <ImgDisplay files={files}/>
                  <ToastContainer />
                </Grid>
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
           

            
        </Grid>
        <Footer/>
    </Box>
  )
}

export default SPDisplay
