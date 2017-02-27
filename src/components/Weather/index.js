
import React, { Component } from 'react';
import LocaleChooser from './LocaleChooser';
import Forecast from './Forecast';

import { bindActionCreators } from 'redux';
import * as WeatherActions    from '../../shared/actions/WeatherActions';
import { connect }            from 'react-redux';

// selects what part of the store we want to access and care about for this component
// and connects it to the props
function mapStateToProps(reduxStoreState) {
  return { weather: reduxStoreState.weather };
}

// connects actions to the redux dispatcher
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(WeatherActions, dispatch) };
}

class Weather extends Component {

  getForecast() {
    if (this.props.weather && this.props.weather.forecast && this.props.weather.forecast.length) {
      return (<Forecast forecast={this.props.weather.forecast} />);
    }
  }

  render() {
    return (<div>
      <LocaleChooser
        actions={this.props.actions}
        weather={this.props.weather}
      />
      {this.getForecast()}
      </div>);
  }

}

LocaleChooser.propTypes = {
    actions: React.PropTypes.object.isRequired,
    weather: React.PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Weather);

