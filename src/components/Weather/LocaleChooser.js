
import React, { Component, PropTypes } from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import styles from './styles.scss';
import { connect }            from 'react-redux';


// selects what part of the store we want to access and care about for this component
// and connects it to the props
function mapStateToProps(reduxStoreState) {
  return { weather: reduxStoreState.weather };
}

class LocaleChooser extends Component {

  constructor(props) {
    super(props);
    this.onCityChange = this.onCityChange.bind(this);
  }

  getCities() {
    const lcls = [<option value='' key='false'></option>];
    Object.keys(this.props.weather.availaleLocales).forEach((slug) => {
      const myLocale = this.props.weather.availaleLocales[slug];
      lcls.push(<option value={slug} key={myLocale.id}>{myLocale.name}</option>);
    });
    return (<select value={this.props.weather.selectedLocaleSlug} onChange={this.onCityChange}>{lcls}</select>);
  }

  onCityChange(event) {
    browserHistory.push(`/weather/${event.target.value}`);
  }

  render() {
    return (<h2>Weather for the next 5 days for {this.getCities()}</h2>);
  }
}

LocaleChooser.propTypes = {
  weather: React.PropTypes.shape({
    availaleLocales: React.PropTypes.object,
    selectedLocaleSlug: React.PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(LocaleChooser);
