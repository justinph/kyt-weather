import DefaultForecast from '../../forecast'; //, { ajaxForecast }

const locales = {
    'new-york-city': { name: 'New York, NY', id: 349727 },
    'seattle':       { name: 'Seattle, WA', id: 351409 },
    'minneapolis':   { name: 'Minneapolis, MN', id: 348794 },
};

const initialState = {
  availaleLocales: locales,
  selectedLocale: locales['new-york-city'],
  selectedLocaleSlug: 'new-york-city',
  forecast: DefaultForecast,
};


export default function weatherReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_WEATHER':
      return state;
    case 'SET_LOCALE':
      //console.log('SET_LOCALE', state, action);
      return Object.assign({}, state, {
        selectedLocaleSlug: action.slug,
        selectedLocale: locales[action.slug],
      });
    default:
      return state;
  }
}
