import {GoogleApiWrapper,Map, InfoWindow, Marker} from 'google-maps-react';
import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Box from '@mui/material/Box';


export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      address: '' ,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter:{
        lat: 7.8731,
        lng: 80.7718
      }
    
    };
  }

    
   
    handleChange = address => {
      this.setState({ address });
    };
   
    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          console.log('Success', latLng);
          this.setState({address});
          this.setState({mapCenter:latLng});
          })
        .catch(error => console.error('Error', error));
    };
   
    render() {
      return (
        <Box
        sx={{
          height: '100',
          width: '100',
        }}

        >
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input size = "50" 
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';

                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

          <div className="map">
            <Map 
            google={this.props.google}
            initialCenter={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            zoom={10}
            >
              <Marker 
                position={{
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng
                }}
              />
            </Map>
          </div>
        </Box>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  })(MapContainer)