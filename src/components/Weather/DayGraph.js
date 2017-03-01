import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';


class DayGraph extends Component {
  // constructor (props) {
  //   super(props);
  // }

  getPrettyDate() {
    const date = new Date(this.props.forecast.Date);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }


  render() {
    return (<p><strong>{this.getPrettyDate()}:</strong> Low of {this.props.forecast.Temperature.Minimum.Value}º and a high of {this.props.forecast.Temperature.Maximum.Value}º.</p>);
  }
}


DayGraph.propTypes = {
  forecast: PropTypes.object.isRequired
};


export default DayGraph;
