import React, { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';
import Map from './Map';
import SearchBar from './SearchBar';
import styled from 'styled-components';

// Styled button component
const RequestButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10vw;
  background-color: #050B38; // Same color as the background
  color: white;
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  height: 40px;
  border: 1px solid white; // White border
  padding: 10px 20px;
  cursor: pointer;
  z-index: 2; // Ensure it appears above other elements
`;

const Feed = () => {
  const [map, setMap] = useState(null);

  const onLoad = mapInstance => {
    setMap(mapInstance);
    mapInstance.setTilt(0);
  };

  const onUnmount = () => {
    setMap(null);
  };

  const onPlaceChanged = (place) => {
    if (place.geometry) {
      const location = place.geometry.location;
      map.panTo({ lat: location.lat(), lng: location.lng() });
      map.setZoom(15);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCZQ_hWQ4iFAHd9EI929TqJTevBgeoSEIs" libraries={['places']}>
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
          <SearchBar onPlaceChanged={onPlaceChanged} />
        </div>
        <RequestButton>+ REQUEST A NODE</RequestButton>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Map onLoad={onLoad} onUnmount={onUnmount} />
        </div>
      </div>
    </LoadScript>
  );
};

export default Feed;