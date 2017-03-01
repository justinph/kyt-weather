
import React, { Component } from 'react';
import styles from './styles.scss';
import { browserHistory } from 'react-router';

// import ForecastData, { min, max } from '../../forecast';
import DayGraph from './DayGraph';


import { bindActionCreators } from 'redux';
import * as WeatherActions    from '../../shared/actions/WeatherActions';
import { connect }            from 'react-redux';

// selects what part of the store we want to access and care about for this component
// and connects it to the props
function mapStateToProps(reduxStoreState) {
  return { weather: reduxStoreState.weather };
}

class Forecast extends Component {

  getDayGraphs() {
    let i = 0;
    return this.props.weather.forecast.map((f) => {
      i++;
      return (<DayGraph forecast={f} key={i}/>);
    });
  }

  render() {
    console.log('forecast', this.props);
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
    weather: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Forecast);

