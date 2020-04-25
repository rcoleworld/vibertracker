import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoicmNvbGV3b3JsZCIsImEiOiJjazlmam04d28wMzRvM2xsaTRzMHEyYzN2In0.SM_saZLbPKiRRQF6Cods2g'
});

export default function NearbyVibes() {
  return (
    <div>
      <h1>Nearby Vibes</h1>
      <FormControl fullWidth varient="outlined">
        <InputLabel>Distance</InputLabel>
        <Select>
          <MenuItem value={10}>10mi</MenuItem>
          <MenuItem value={100}>100mi</MenuItem>
          <MenuItem value={1000}>1000mi</MenuItem>
        </Select>
      </FormControl>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    </div>
  );
}