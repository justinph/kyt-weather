
import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

import Forecast, { min, max } from '../../forecast';
import DayGraph from './DayGraph';

const locales = [
    { name: 'New York, NY', id: 349727 },
    { name: 'Seattle, WA', id: 351409 },
    { name: 'Minneapolis, MN', id: 348794 }
];

// https://dataservice.accuweather.com/forecasts/v1/daily/5day/349727?apikey=

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: locales[0]
    }

    this.onCityChange = this.onCityChange.bind(this);
  }

  getCities() {
    let lcls = locales.map((lcl) => {
      return (<option value={lcl} key={lcl.id}>{lcl.name}</option>);
    });
    return (<select value={this.state.city} onChange={this.onCityChange}>{lcls}</select>);
  }

  onCityChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  getDayGraphs() {
    let i = 0;
    return Forecast.map((f) => {
      i++;
      return <DayGraph max={max} min={min} forecast={f} key={i}/>
    });
  }

  render() {
    return (<div>
      <h2>Weather for the next 5 days for {this.getCities()}</h2>
      <ul>
          <li>Low: {min}º</li>
          <li>High: {max}º</li>
      </ul>
      {this.getDayGraphs()}
    </div>);
  }
}

export default Weather;
