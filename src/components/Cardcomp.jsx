import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import { Box } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { borders } from '@mui/system';


export default function ActionAreaCard() {
  return (
    <Card elevation={0} 
      sx={{ 
      maxWidth: 345, 
      borderRadius:3, 
       
      borderHeight:10,
      "&:hover": {
      borderBottom:5,
      borderBottomColor:'#00ADB5',

    },
      }}
      >
      <CardActionArea
      href='/ServiceProviderDetails'
      >
        <CardMedia
          component="img"
          height="200vh"
          image="https://images.pexels.com/photos/931796/pexels-photo-931796.jpeg?cs=srgb&dl=pexels-nghia-trinh-931796.jpg&fm=jpg"
          alt="Vision Photography"
        />
        <CardContent>
            {/* <Stack display="flex" width="100%"  mb={1} direction="row-reverse">
            <StarIcon
                sx={{ 
                    color:yellow[700],
                    
                }}
                />
                <Typography variant="body2" >
                    4.5
                </Typography>
                
            </Stack>  */}
          <h3 class='serviceCardTitle'>
            Vision Photography
          </h3>
          <h5 class='serviceCardCategory'>
            Photography
          </h5>
          <Box display="flex" justifyContent="flex-end">
            <LocationOnIcon fontSize='small'/>
            <Typography variant="subheading2">
                Colombo,Srilanka
            </Typography>
          </Box>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}