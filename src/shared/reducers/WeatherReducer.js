
import { locales } from '../actions/WeatherActions';

const initialState = {
  availaleLocales: locales,
  selectedLocale: locales['new-york-city'],
  selectedLocaleSlug: '',
  forecast: {},
};

export default function weatherReducer(state = initialState, action) {
  let newObj;
  switch (action.type) {
    case 'GET_WEATHER':
      return state;

    case 'SET_LOCALE_WITH_FORECAST':
      newObj = Object.assign({}, state, {
        selectedLocaleSlug: action.slug,
        selectedLocale: locales[action.slug],
        forecast: action.forecast,
      });
      console.log('action', action);
      if (action.callback){
        console.log('calling back');
        action.callback();
      }
      return newObj;

    default:
      return state;
  }
}
