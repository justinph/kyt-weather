
import React, { Component } from 'react';
import styles from './styles.scss';
import { browserHistory } from 'react-router';

// import ForecastData, { min, max } from '../../forecast';
import DayGraph from './DayGraph';



class Forecast extends Component {


  getDayGraphs() {
    let i = 0;
    return this.props.forecast.map((f) => {
      i++;
      return (<DayGraph forecast={f} key={i}/>);
    });
  }

  render() {
    console.log(this.props);
    return (<div>
      {/* <ul>
          <li>Low: {min}º</li>
          <li>High: {max}º</li>
      </ul> */}
      {this.getDayGraphs()}
    </div>);
  }
}

Forecast.propTypes = {
    forecast: React.PropTypes.array,
};

export default Forecast;
