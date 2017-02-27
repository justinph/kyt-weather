
export function getWeather() {
  return { type: 'GET_WEATHER' };
}


export function setLocale(slug) {
  //console.log('got slug', slug);
  return {
    type: 'SET_LOCALE',
    slug,
  };
}

