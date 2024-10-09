import React from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '60vw', // Adjust width as needed
  height: '60vh', // Adjust height as needed
  marginBottom: '5vh'
  //border: '1px solid red' // Temporary border to visualize the map container
};

const center = {
  lat: 0,
  lng: 0
};

const Map = ({ onLoad, onUnmount }) => (
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={2}
    onLoad={onLoad}
    onUnmount={onUnmount}
    mapTypeId="satellite"
    options={{
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
      rotateControl: false,
      gestureHandling: 'auto'
    }}
  >
    {/* Additional components can be added here if needed */}
  </GoogleMap>
);

export default Map;