import { Autocomplete, TextField } from '@mui/material';
import React from 'react'

const LocalLocations = () => {

    const defaultProps = {
        options: districts,
        getOptionLabel: (option) => option.title,
      };

  return (
        <Autocomplete
            {...defaultProps}
            id="locationSearch"
            clearOnEscape
            margin="dense"
            renderInput={(params) => (
            <TextField {...params} label="Event Category"  
            variant="standard" 
            />
        )}
        />
  )
}
const districts = [
    { title: 'Seminars'},
    { title: 'Internal Company'},
    { title: 'Meeting/ Periodic'},
    { title: 'Trade shows/ Expos' },
    { title: 'Leadership Events'},
    { title: "Networking Events" },
    { title: 'Ceremonies/ Gala'},
    {title: 'Product Launches'},
    {title: 'VIP Events'},
    {title: 'Weddings'},
    {title: 'Funerals'},
    {title: 'Birthday Parties'},
    {title: 'Business Gatherings'},
    {title: 'Graduation Parties'},
    {title: 'Other'},                    
    
  ];

export default LocalLocations
