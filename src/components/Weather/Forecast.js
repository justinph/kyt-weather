
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayGraph from './DayGraph';
import styles from './styles.scss';
import extremes from '../../shared/utils/weather';

// selects what part of the store we want to access and care about for this component
// and connects it to the props
function mapStateToProps(reduxStoreState) {
  return { weather: reduxStoreState.weather };
}

class Forecast extends Component {

  constructor(props) {
    super(props);
    this.state = extremes(this.props.weather.forecast);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(extremes(nextProps.weather.forecast));
  }

  getDayGraphs() {
    let i = 0;
    if (this.props.weather.loading) {
      return (<p>Loading...</p>);
    }
    return this.props.weather.forecast.map((f) => {
      i += 1;
      return (<DayGraph forecast={f} key={i} />);
    });
  }

  render() {
    return (<div>
      <ul>
        <li>Low: {this.state.min}º</li>
        <li>High: {this.state.max}º</li>
      </ul>
      {this.getDayGraphs()}
    </div>);
  }
}

Forecast.propTypes = {
    weather: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Forecast);

