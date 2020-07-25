import React, { useState } from 'react'
import "./city-search.css";
import { TextField, Fab, Snackbar, IconButton } from '@material-ui/core';
import { SearchRounded, MyLocationRounded, Close  } from '@material-ui/icons';


//Constant part of the url to fetch the weather information
const baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=1dc6ff1225029e55b04918b4f34f23f4&units=metric&`;


export default function CitySearch(props) {
    //For snackbar state
    const [open, setOpen] = useState(false);

    //Using query state object for getting city name
    const [query, setQuery] = useState('');

    //A method to set the state of weather response, passed in by the parent component
    const setWeather = props.setWeatherResponse;


    /**
     * Use the web api to fetch current location
     */
    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(getWeatherForCurrentLocation);
    }

    /**
     * Callback method for fetch the current location, helps in 
     * creating an url with latitude and longitude set for the api call
     * @param {pos} pos 
     */
    const getWeatherForCurrentLocation = (pos) => {
        const url = `${baseURL}lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
        fetchWeather(url);
    }

    /**
     * Helper method to create url with city name for the api call
     * @param {event} e 
     */
    const getWeatherForSearchedLocation = (e) => {
        //Fetch weather only if the textfield does have a value
        if (query.length > 0) {
            const url = `${baseURL}q=${query}`
            fetchWeather(url);
        } else {
            setOpen(true);
        }
    }

    /**
     * Helper method to make the actual api call with the given url
     * @param {url} url 
     */
    const fetchWeather = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                //Update the state variable to reflect changes everywhere
                setWeather(result);
                //Clear the search text box
                setQuery('');
                console.log(result);
            });
    }

    //Handle close button for the snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };    

    return (
        <div className="inputMain">
            <div>
                <TextField id="cityName" label="City" variant="outlined"
                    onChange={e => setQuery(e.target.value)} value={query} />
            </div>
            <div className="currentLocation">
                <Fab size="small" color="secondary" onClick={getCurrentLocation}>
                    <MyLocationRounded />
                </Fab>
            </div>
            <div className="seach">
                <Fab color="primary" variant="extended" onClick={getWeatherForSearchedLocation}>
                    <SearchRounded />
                    <span className="iconLabel">
                        Search
                    </span>
                </Fab>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={2000}
                message="Type in a city to search!"
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <Close fontSize="small" />
                    </IconButton>
                }
            />
        </div>
    )
}
