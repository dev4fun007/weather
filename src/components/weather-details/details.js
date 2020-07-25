import React from 'react'
import './details.css'
import { Card, CardContent, Grid, makeStyles, createStyles } from '@material-ui/core'
import Logochooser from '../weather-logo/logochooser';


const useStyles = makeStyles(() =>
    createStyles({
        cardcontent: {
            padding: 0,
            "&:last-child": {
                paddingBottom: 0
            },
        },
    }),
);

export default function ShowWeather(props) {
    const classes = useStyles();
    const weatherResponse = props.weather;


    const dateBuilder = (d) => {
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`
    }


    return (
        <div className="weatherCard">
            <Card>
                <CardContent className={classes.cardcontent}>
                    <Grid container direction="column" justify="center">
                        <Grid item>
                            <Logochooser weatherState={weatherResponse.weather[0].main} />
                        </Grid>
                        <Grid item>
                            <div className="content">
                                <div className="temp">
                                    <span className="tempValue">{weatherResponse.main.temp}</span>
                                    <span className="degrees">&#8451;</span>
                                </div>
                                <div className="cityName">{weatherResponse.name}, {weatherResponse.sys.country}</div>
                                <div className="date">{dateBuilder(new Date())}</div>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
