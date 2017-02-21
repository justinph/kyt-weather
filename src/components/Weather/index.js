
import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

import Forecast, { min, max } from '../../forecast';
import DayGraph from './DayGraph';


//console.log(Forecast, min, max);

// https://dataservice.accuweather.com/forecasts/v1/daily/5day/349727?apikey=

class Weather extends Component {


    getDayGraphs() {
        let i = 0;
        return Forecast.map((f) => {
            i++;
            return <DayGraph max={max} min={min} forecast={f} key={i}/>
        });
    }

    render() {
        return (<div>
            <h2>Weather for the next 5 days:</h2>
            <ul>
                <li>Low: {min}º</li>
                <li>High: {max}º</li>
            </ul>
            {this.getDayGraphs()}
        </div>
      );
    }
}

export default Weather;
