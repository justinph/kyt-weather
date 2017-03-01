
import React from 'react';
import Router from 'react-router/lib/Router';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Root from './Root';

import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from '../shared/reducers';

let initialState = window.__INITIAL_STATE__;

const reducer = combineReducers(reducers);
const store   = createStore(reducer, initialState, applyMiddleware(thunk));

const root = document.querySelector('#root');

const mount = () => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Router history={browserHistory} routes={routes(store)} />
      </AppContainer>
    </Provider>,
    root
  );
};

mount();
