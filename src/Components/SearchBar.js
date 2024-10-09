import React, { useRef } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 8vw;
  width: 35vw;
  font-family: 'JetBrains Mono', monospace;
`;

const SearchBar = ({ onPlaceChanged }) => {
  const autocompleteRef = useRef(null);

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    if (onPlaceChanged) {
      onPlaceChanged(place);
    }
  };

  return (
    <Autocomplete
      onLoad={ref => (autocompleteRef.current = ref)}
      onPlaceChanged={handlePlaceChanged}
    >
      <StyledInput
        type="text"
        placeholder="ENTER A LOCATION (ADDRESS, LANDMARK, ETC.)"
      />
    </Autocomplete>
  );
};

export default SearchBar;