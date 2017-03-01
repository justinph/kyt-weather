
import React, { Component } from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles.scss';
import * as WeatherActions from '../../shared/actions/WeatherActions';

// selects what part of the store we want to access and care about for this component
// and connects it to the props
function mapStateToProps(reduxStoreState) {
  return { weather: reduxStoreState.weather };
}

// connects actions to the redux dispatcher
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(WeatherActions, dispatch) };
}

class LocaleChooser extends Component {

  constructor(props) {
    super(props);
    this.onCityChange = this.onCityChange.bind(this);
  }

  getCities() {
    const lcls = [];
    if (!this.props.weather.selectedLocaleSlug) {
      lcls.push(<option value key={false} />);
    }
    Object.keys(this.props.weather.availaleLocales).forEach((slug) => {
      const myLocale = this.props.weather.availaleLocales[slug];
      lcls.push(<option value={slug} key={myLocale.id}>{myLocale.name}</option>);
    });
    return (
      <select
        value={this.props.weather.selectedLocaleSlug}
        onChange={this.onCityChange}
      >{lcls}</select>
      );
  }

  onCityChange(event) {
    if (event.target.value && event.target.value !== this.props.weather.selectedLocaleSlug) {
      this.props.actions.loading();
      browserHistory.push(`/weather/${event.target.value}`);
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(LocaleChooser);
