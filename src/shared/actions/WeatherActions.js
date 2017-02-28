
require('es6-promise').polyfill();
require('isomorphic-fetch');

import { ACCUWEATHER_API_KEY } from '../../../.secrets';

export const locales = {
    'new-york-city': { name: 'New York, NY', id: 349727 },
    'seattle':       { name: 'Seattle, WA', id: 351409 },
    'minneapolis':   { name: 'Minneapolis, MN', id: 348794 },
};

export function getWeather() {
  return { type: 'GET_WEATHER' };
}

export function setLocaleWithForecast(slug, forecast, callback) {
  return {
    type: 'SET_LOCALE_WITH_FORECAST',
    slug,
    forecast,
    callback: cb
  };
}

export function getWeatherForSlug(slug, callback=null) {
  console.log('cb is', callback);
  const cb = callback;
  const id = locales[slug].id;
  return function (dispatch) {
    console.log('dispatching', callback);
    return fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${ACCUWEATHER_API_KEY}`)
      .then(response => response.json())
      .then((json) => {
        console.log('json', json);
        dispatch(setLocaleWithForecast(slug, json.DailyForecasts));
      })
      .catch((error) => {
        console.error('got some error', error);
      });
  };
}
