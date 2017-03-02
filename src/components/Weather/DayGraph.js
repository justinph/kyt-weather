import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';


class DayGraph extends Component {
  constructor (props) {
    super(props);
    this.state = this.updateRanges();
  }

  getPrettyDate() {
    const date = new Date(this.props.forecast.Date);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  updateRanges() {
    const containerHeight = 300;
    const allTempsDiff = this.props.max - this.props.min;
    const myTempDiff = this.props.forecast.Temperature.Maximum.Value - this.props.forecast.Temperature.Minimum.Value;
    const normalizer = allTempsDiff / 100;
    const topPct = (((this.props.max - this.props.forecast.Temperature.Maximum.Value) * normalizer)/100) * containerHeight;
    const height =  ((myTempDiff * normalizer)/100) * containerHeight;
    return {
      topPct,
      height,
    };
  }

  render() {
    //<p><strong>{this.getPrettyDate()}:</strong> Low of {this.props.forecast.Temperature.Minimum.Value}º and a high of {this.props.forecast.Temperature.Maximum.Value}º.</p>
    //
    const divStyle = {
      top: `${this.state.topPct}px`,
      height: `${this.state.height}px`,
      border: '1px solid grey',
      width: '90px',
    };

    return (<div style={divStyle} className={styles.day}>
        Hi: {this.props.forecast.Temperature.Maximum.Value}º
        <br />
        Low: {this.props.forecast.Temperature.Minimum.Value}º
      </div>

      );
  }
}


DayGraph.propTypes = {
  forecast: PropTypes.object.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};

export default DayGraph;
