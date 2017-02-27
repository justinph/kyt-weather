
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import styles from './styles.scss';

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
    this.props.actions.setLocale(event.target.value);
  }

  render() {
    return (<h2>Weather for the next {this.props.weather.derp} days for {this.getCities()}</h2>);
  }
}

LocaleChooser.propTypes = {
    actions: React.PropTypes.object.isRequired,
    weather: React.PropTypes.object.isRequired,
};

export default LocaleChooser;
