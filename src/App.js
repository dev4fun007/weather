import React, { useState } from 'react';
import './App.css';
import CitySearch from './components/weather-search/city-search';
import ShowWeather from './components/weather-details/details';
import { Grid } from '@material-ui/core';


const initialWeatherObject = {
  weather: [{ main: "Cool" }],
  main: { temp: 100 },
  name: "Nowhere",
  sys: { country: "AN" }
};


function App() {
  const [weatherResponse, setWeatherResponse] = useState(initialWeatherObject);

  return (
    <div className="mainContent">
      <Grid container direction="column" justify="center" spacing={2}>
        <Grid item>
          <ShowWeather weather={weatherResponse} />
        </Grid>
        <Grid item xs>
          <CitySearch setWeatherResponse={setWeatherResponse} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
