
import { locales } from '../actions/WeatherActions';

const initialState = {
  availaleLocales: locales,
  selectedLocale: locales['new-york-city'],
  selectedLocaleSlug: '',
  forecast: {},
  loading: null,
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
        loading: false,
      });
      return newObj;
    case 'LOADING_FORECAST':
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
}
