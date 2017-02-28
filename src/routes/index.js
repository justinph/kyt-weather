
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../components/App';


// Webpack 2 supports ES2015 `System.import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

const importHome = (nextState, cb) => {
  System.import('../components/Home')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importTools = (nextState, cb) => {
  System.import('../components/Tools')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importWeatherIdx = (nextState, cb) => {
  System.import('../components/Weather')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importForecast = (nextState, cb) => {
  System.import('../components/Weather/Forecast')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

// TODO: Look here: https://github.com/reactjs/react-router-redux/issues/319
// OR just buck up and use https://github.com/acdlite/redux-router

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={importHome} />
    <Route path="tools" getComponent={importTools} />
    <Route path="weather" getComponent={importWeatherIdx} >
      <Route path=":location" getComponent={importForecast} onEnter={ }/>
    </Route>
  </Route>
);

function load (store, dispatch) {
  return function (nextState, replace, next) {
    dispatch(loadProject(nextState.params.id)).then(data => {
      //some code
        next();
    });
}


/*
(nextState, replace, cb) => {
        console.log('nextState', nextState);
        // cb();
        if (nextState.params.location) {
          console.log('dispatching action');
          WeatherActions.getWeatherForSlug(nextState.params.location);
          setTimeout(() => { cb(); }, 5000);

 */

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../components/Home');    // eslint-disable-line global-require
  require('../components/Tools');   // eslint-disable-line global-require
  require('../components/Weather');   // eslint-disable-line global-require
  require('../components/Weather/Forecast.js');   // eslint-disable-line global-require
}

export default routes;
