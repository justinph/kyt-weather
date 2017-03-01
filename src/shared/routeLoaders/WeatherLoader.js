
import * as WeatherActions from '../actions/WeatherActions';

/**
 * Returns a function that can respond to the onEnter event/param for a given route
 * Method could be written directly on the onEnter param, but it is cleaner to separate here
 * @param  {store} store redux store we talk to
 * @return {null}
 */
export default function location(store) {
  return function (nextState, replace, callback) {
    const weather = store.getState().weather;
    if (!weather.forecast.length ||
      weather.forecast.selectedLocaleSlug !== nextState.params.location) {
      store.dispatch(WeatherActions.getWeatherForSlug(nextState.params.location)).then(() => {
        callback();
      });
    } else {
      callback();
    }
  };
}
