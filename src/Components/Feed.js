import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import styled from 'styled-components';

const containerStyle = {
  width: 'calc(100% - 320px)', // Adjust width to accommodate search bar
  height: '100vh'
};

const center = {
  lat: 0, // Center at the equator
  lng: 0 // Center at the prime meridian
};

const Feed = () => {
  const [map, setMap] = useState(null);
  const autocompleteRef = useRef(null);

  const onLoad = mapInstance => {
    setMap(mapInstance);
    mapInstance.setTilt(0); // No tilt for a flat view
  };

  const onUnmount = () => {
    setMap(null);
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry) {
      const location = place.geometry.location;
      map.panTo({ lat: location.lat(), lng: location.lng() });
      map.setZoom(15); // Zoom in to the location
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE" libraries={['places']}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '10px' }}>
          <Autocomplete
            onLoad={ref => (autocompleteRef.current = ref)}
            onPlaceChanged={onPlaceChanged}
          >
            <StyledInput
              type="text"
              placeholder="Search for a location"
            />
          </Autocomplete>
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2} // Start zoomed out
          onLoad={onLoad}
          onUnmount={onUnmount}
          mapTypeId="satellite" // Use satellite view
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
      </div>
    </LoadScript>
  );
};

export default Feed;
