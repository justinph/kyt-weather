
require('es6-promise').polyfill();
require('isomorphic-fetch');

/* eslint-disable */
const forecast = [
    {"Date":"2017-02-21T07:00:00-05:00","EpochDate":1487678400,"Temperature":{"Minimum":{"Value":40.0,"Unit":"F","UnitType":18},"Maximum":{"Value":48.0,"Unit":"F","UnitType":18}},"Day":{"Icon":4,"IconPhrase":"Intermittent clouds"},"Night":{"Icon":38,"IconPhrase":"Mostly cloudy"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&lang=en-us","Link":"http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=1&lang=en-us"},{"Date":"2017-02-22T07:00:00-05:00","EpochDate":1487764800,"Temperature":{"Minimum":{"Value":48.0,"Unit":"F","UnitType":18},"Maximum":{"Value":57.0,"Unit":"F","UnitType":18}},"Day":{"Icon":3,"IconPhrase":"Partly sunny"},"Night":{"Icon":35,"IconPhrase":"Partly cloudy"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&lang=en-us","Link":"http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=2&lang=en-us"},{"Date":"2017-02-23T07:00:00-05:00","EpochDate":1487851200,"Temperature":{"Minimum":{"Value":52.0,"Unit":"F","UnitType":18},"Maximum":{"Value":68.0,"Unit":"F","UnitType":18}},"Day":{"Icon":3,"IconPhrase":"Partly sunny"},"Night":{"Icon":38,"IconPhrase":"Mostly cloudy"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&lang=en-us","Link":"http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=3&lang=en-us"},{"Date":"2017-02-24T07:00:00-05:00","EpochDate":1487937600,"Temperature":{"Minimum":{"Value":56.0,"Unit":"F","UnitType":18},"Maximum":{"Value":66.0,"Unit":"F","UnitType":18}},"Day":{"Icon":4,"IconPhrase":"Intermittent clouds"},"Night":{"Icon":36,"IconPhrase":"Intermittent clouds"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&lang=en-us","Link":"http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=4&lang=en-us"},{"Date":"2017-02-25T07:00:00-05:00","EpochDate":1488024000,"Temperature":{"Minimum":{"Value":38.0,"Unit":"F","UnitType":18},"Maximum":{"Value":64.0,"Unit":"F","UnitType":18}},"Day":{"Icon":12,"IconPhrase":"Showers"},"Night":{"Icon":38,"IconPhrase":"Mostly cloudy"},"Sources":["AccuWeather"],"MobileLink":"http://m.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=5&lang=en-us","Link":"http://www.accuweather.com/en/us/new-york-ny/10007/daily-weather-forecast/349727?day=5&lang=en-us"}

];
/* eslint-enable */

let tMin = 200;
let tMax = -400;

forecast.forEach((f) => {
  if (f.Temperature.Maximum.Value > tMax) {
    tMax = f.Temperature.Maximum.Value;
  }
  if (f.Temperature.Minimum.Value < tMin) {
    tMin = f.Temperature.Minimum.Value;
  }
});

export const min = tMin;
export const max = tMax;

// export const ajaxForecast = fetch('https://dataservice.accuweather.com/forecasts/v1/daily/5day/349727?apikey=??')
//   .then(response => response.json())
//   .then(json => json);


export default forecast;
