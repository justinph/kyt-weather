
import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

import Forecast, { min, max, ajaxForecast } from '../../forecast';
import DayGraph from './DayGraph';

import { bindActionCreators } from 'redux';
import * as WeatherActions    from '../../shared/actions/WeatherActions';
import { connect }            from 'react-redux';


// selects what part of the store we want to access and care about for this component
// and connects it to the props
function mapStateToProps(reduxStoreState) {
  //console.log('derp state', state);
  return { weather: reduxStoreState.weather };
}

// connects actions to the redux dispatcher
function mapDispatchToProps(dispatch) {
  //console.log('derp dispatch', dispatch);
  return { actions: bindActionCreators(WeatherActions, dispatch) };
}

class Weather extends Component {

  constructor(props) {
    super(props);
    this.onCityChange = this.onCityChange.bind(this);
  }

  getCities() {
    const lcls = [];
    Object.keys(this.props.weather.availaleLocales).forEach((slug) => {
      const myLocale = this.props.weather.availaleLocales[slug];
      lcls.push(<option value={slug} key={myLocale.id}>{myLocale.name}</option>);
    });
    return (<select value={this.props.weather.selectedLocaleSlug} onChange={this.onCityChange}>{lcls}</select>);
  }

  onCityChange(event) {
    this.props.actions.setLocale(event.target.value);
  }

  getDayGraphs() {
    let i = 0;
    return Forecast.map((f) => {
      i++;
      return <DayGraph max={max} min={min} forecast={f} key={i}/>
    });
  }

  render() {
    //console.log(this);
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

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
