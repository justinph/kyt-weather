
export function getWeather() {
  return { type: 'GET_WEATHER' };
}


export function setLocale(slug) {
  return {
    type: 'SET_LOCALE',
    slug,
  };
}

