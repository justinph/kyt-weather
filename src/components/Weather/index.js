
import React, { Component } from 'react';
import LocaleChooser from './LocaleChooser';
import Forecast from './Forecast';

class Weather extends Component {
  render() {
    return (<div>
      <LocaleChooser />
      {this.props.children}
      </div>);
  }
}

export default Weather;

