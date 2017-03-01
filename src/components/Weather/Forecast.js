
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayGraph from './DayGraph';
import styles from './styles.scss';

// selects what part of the store we want to access and care about for this component
// and connects it to the props
function mapStateToProps(reduxStoreState) {
  return { weather: reduxStoreState.weather };
}

class Forecast extends Component {

  getDayGraphs() {
    let i = 0;
    if (this.props.weather.loading) {
      return (<p>Loading...</p>);
    }
    return this.props.weather.forecast.map((f) => {
      i++;
      return (<DayGraph forecast={f} key={i}/>);
    });
  }

  render() {
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

